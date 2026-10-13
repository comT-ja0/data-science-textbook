/* ==========================================================
   브라우저 파이썬 실습 셀 (Pyodide 기반)
   - 페이지의 .pycell 요소를 실행 가능한 코드 셀로 변환
   - 첫 실행 시에만 Pyodide(약 10~20MB)를 내려받음
   - numpy / pandas / scikit-learn / matplotlib / sqlite3 자동 로드
   - load_csv("파일명.csv") : assets/data/ 의 교재 데이터 불러오기
   - matplotlib 사용 시 한글 글꼴(나눔고딕)을 자동 적용
   - 같은 페이지의 셀들은 변수를 공유합니다(위 셀 → 아래 셀 순서로 실행)
   ========================================================== */

const PyCell = (() => {
  let pyodide = null;
  let loading = null;
  let fontReady = false;

  const DATA_URL = new URL((location.pathname.includes("/lessons/") ? "../" : "./") + "assets/data/", location.href).href;
  const FONT_URL = "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/nanumgothic/NanumGothic-Regular.ttf";

  async function ensurePyodide() {
    if (pyodide) return pyodide;
    if (!loading) {
      loading = (async () => {
        statusAll("파이썬 환경을 내려받는 중… (최초 1회, 10~20초)");
        await new Promise((res, rej) => {
          const s = document.createElement("script");
          s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
          s.onload = res; s.onerror = () => rej(new Error("Pyodide 로드 실패 — 인터넷 연결을 확인하세요."));
          document.head.appendChild(s);
        });
        pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/" });
        await pyodide.runPythonAsync(`
import sys, io, base64, traceback, json, warnings
warnings.simplefilter('ignore')

_DATA_URL = ${JSON.stringify(DATA_URL)}

def load_csv(name, **kw):
    """교재 데이터 폴더(assets/data)의 CSV를 pandas DataFrame으로 불러옵니다."""
    import pandas as pd
    from pyodide.http import open_url
    return pd.read_csv(open_url(_DATA_URL + name), **kw)

def _run_user_code(code):
    out = io.StringIO()
    noise = io.StringIO()
    old_out, old_err = sys.stdout, sys.stderr
    sys.stdout, sys.stderr = out, noise
    err = None
    warnings.simplefilter('ignore')
    try:
        if 'matplotlib' in code or 'plt.' in code:
            import matplotlib
            matplotlib.use('AGG')
        exec(compile(code, '<학생코드>', 'exec'), _user_ns)
    except Exception:
        err = traceback.format_exc(limit=3)
    finally:
        sys.stdout, sys.stderr = old_out, old_err
    imgs = []
    if 'matplotlib' in sys.modules:
        try:
            import matplotlib.pyplot as plt
            for num in plt.get_fignums():
                buf = io.BytesIO()
                plt.figure(num).savefig(buf, format='png', dpi=110, bbox_inches='tight')
                imgs.append(base64.b64encode(buf.getvalue()).decode())
            plt.close('all')
        except Exception:
            pass
    return json.dumps({'out': out.getvalue(), 'err': err, 'imgs': imgs})

_user_ns = {'__name__': '__main__', 'load_csv': load_csv}
`);
        statusAll("파이썬 준비 완료 ✔");
        return pyodide;
      })();
    }
    return loading;
  }

  /* matplotlib 한글 글꼴: 처음 그래프를 그릴 때 한 번만 내려받아 등록 */
  async function ensureKoreanFont(py) {
    if (fontReady) return;
    try {
      await py.loadPackage("matplotlib");
      const res = await fetch(FONT_URL);
      if (!res.ok) throw new Error("font");
      const buf = new Uint8Array(await res.arrayBuffer());
      py.FS.writeFile("/tmp/NanumGothic.ttf", buf);
      py.runPython(`
import matplotlib
matplotlib.use('AGG')
from matplotlib import font_manager, rcParams
font_manager.fontManager.addfont('/tmp/NanumGothic.ttf')
rcParams['font.family'] = 'NanumGothic'
rcParams['axes.unicode_minus'] = False
`);
    } catch (e) {
      // 글꼴을 못 받아도 그래프는 그려지며, 한글만 네모로 보일 수 있다
    }
    fontReady = true;
  }

  function statusAll(msg) {
    document.querySelectorAll(".py-status").forEach(el => (el.textContent = msg));
  }

  async function runCell(cell) {
    const ta = cell.querySelector(".pycell-code");
    const out = cell.querySelector(".pycell-out");
    const btn = cell.querySelector(".btn-run");
    out.classList.add("show");
    out.innerHTML = "실행 중…";
    btn.disabled = true;
    try {
      const py = await ensurePyodide();
      const code = ta.value;
      const needs = code + "\n" + (cell.dataset.setup || "");
      if (/load_csv|pandas|pd\./.test(needs)) await py.loadPackage("pandas");
      if (/sqlite3/.test(needs)) await py.loadPackage("sqlite3");
      await py.loadPackagesFromImports(code);
      if (/matplotlib|plt\./.test(code)) await ensureKoreanFont(py);
      const setup = cell.dataset.setup;
      if (setup && !cell.dataset.setupDone) {
        await py.loadPackagesFromImports(setup);
        py.globals.get("_run_user_code")(setup);
        cell.dataset.setupDone = "1";
      }
      const resJson = py.globals.get("_run_user_code")(code);
      const res = JSON.parse(resJson);
      let html = "";
      if (res.out) html += escapeHtml(stripWarnings(res.out));
      if (res.err) html += `<span class="py-err">${escapeHtml(friendlyError(res.err))}</span>`;
      for (const b64 of res.imgs) html += `<img src="data:image/png;base64,${b64}" alt="그래프 출력">`;
      out.innerHTML = html || "(출력 없음 — print()로 결과를 출력해 보세요.)";
    } catch (e) {
      out.innerHTML = `<span class="py-err">${escapeHtml(String(e))}</span>`;
    } finally {
      btn.disabled = false;
    }
  }

  /* 자주 만나는 오류에 한 줄 도움말을 덧붙인다 */
  function friendlyError(err) {
    const tips = [
      [/NameError: name '(\w+)'/, m => `💡 '${m[1]}'라는 이름을 찾을 수 없어요. 철자를 확인하거나, 위쪽 셀을 먼저 실행했는지 확인하세요.`],
      [/KeyError: '?([^'\n]+)'?/, m => `💡 '${m[1]}' 열(키)이 없어요. df.columns로 열 이름을 확인해 보세요.`],
      [/IndentationError/, () => "💡 들여쓰기가 맞지 않아요. 같은 블록은 같은 칸만큼 띄어 써야 합니다."],
      [/SyntaxError/, () => "💡 문법 오류예요. 괄호·따옴표·콜론(:)이 빠지지 않았는지 확인하세요."],
      [/ZeroDivisionError/, () => "💡 0으로 나누었어요. 분모가 0이 되는 경우를 확인하세요."],
    ];
    for (const [re, f] of tips) { const m = err.match(re); if (m) return err + "\n" + f(m); }
    return err;
  }

  function stripWarnings(text) {
    const lines = text.split("\n");
    const kept = [];
    for (let i = 0; i < lines.length; i++) {
      if (/:\d+:\s*\w*(Warning|Error)?Warning:/.test(lines[i])) {
        while (i < lines.length && lines[i].trim() !== "") i++;
        continue;
      }
      kept.push(lines[i]);
    }
    return kept.join("\n").replace(/^\n+/, "");
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function autoResize(ta) {
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight + 4, 560) + "px";
  }

  function init() {
    document.querySelectorAll(".pycell").forEach(cell => {
      const ta = cell.querySelector("textarea");
      ta.classList.add("pycell-code");
      ta.spellcheck = false;
      const original = ta.value.trim();
      ta.value = original;

      const head = document.createElement("div");
      head.className = "pycell-head";
      head.innerHTML = `<span>🐍 파이썬 실습 ${cell.dataset.title ? "· " + cell.dataset.title : ""}</span>
        <span class="py-title py-status"></span>
        <button class="btn-reset">처음으로</button>
        <button class="btn-run">▶ 실행</button>`;
      cell.insertBefore(head, ta);

      const out = document.createElement("div");
      out.className = "pycell-out";
      cell.appendChild(out);

      head.querySelector(".btn-run").addEventListener("click", () => runCell(cell));
      head.querySelector(".btn-reset").addEventListener("click", () => {
        ta.value = original; autoResize(ta);
        out.classList.remove("show"); out.innerHTML = "";
      });
      ta.addEventListener("keydown", e => {
        if (e.key === "Tab") {
          e.preventDefault();
          const s = ta.selectionStart;
          ta.value = ta.value.slice(0, s) + "    " + ta.value.slice(ta.selectionEnd);
          ta.selectionStart = ta.selectionEnd = s + 4;
        }
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); runCell(cell); }
      });
      ta.addEventListener("input", () => autoResize(ta));
      autoResize(ta);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
  return { runCell };
})();
