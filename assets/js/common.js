/* ==========================================================
   데이터 과학 온라인 교과서 — 공용 스크립트: 56차시 목차 · 3/4학점 모드 · 사이드바 · 퀴즈 엔진
   - 기본 40차시(3학점) + 확장 16차시(4학점) = 56차시
   - localStorage "dsc-mode": "3" | "4" (기본 "4")
   ========================================================== */

const COURSE = [
  {
    unit: 0, label: "시작하기", roman: "", color: "var(--ink-faint)",
    lessons: [
      { id: "L01", file: "l01.html", title: "오리엔테이션: 데이터로 세상 읽기", std: "", ext: false },
    ],
  },
  {
    unit: 1, label: "데이터 과학의 이해", roman: "Ⅰ", color: "var(--u1)",
    lessons: [
      { id: "L02", file: "l02.html", title: "데이터 과학의 개념과 발전", std: "12데과01-01", ext: false },
      { id: "L03", file: "l03.html", title: "데이터 기반 의사 결정", std: "12데과01-01", ext: false },
      { id: "L04", file: "l04.html", title: "정형·반정형·비정형 데이터", std: "12데과01-02", ext: false },
      { id: "L05", file: "l05.html", title: "데이터 속성과 잠재적 가치", std: "12데과01-02", ext: false },
      { id: "L06", file: "l06.html", title: "데이터셋과 데이터베이스", std: "12데과01-03", ext: false },
      { id: "L07", file: "l07.html", title: "데이터 통합: 키로 연결하기", std: "12데과01-03", ext: false },
      { id: "L08", file: "l08.html", title: "SQL로 데이터베이스 질의하기", std: "12데과01-03", ext: true },
      { id: "L09", file: "l09.html", title: "데이터가 바꾸는 사회와 직업", std: "12데과01-04", ext: false },
      { id: "L10", file: "l10.html", title: "데이터 과학 진로 탐색", std: "12데과01-04", ext: true },
      { id: "L11", file: "l11.html", title: "Ⅰ영역 미니 프로젝트", std: "12데과01-01~04", ext: true },
    ],
  },
  {
    unit: 2, label: "데이터 준비와 분석", roman: "Ⅱ", color: "var(--u2)",
    lessons: [
      { id: "L12", file: "l12.html", title: "데이터 수집과 공공 데이터", std: "12데과02-01", ext: false },
      { id: "L13", file: "l13.html", title: "편향 없는 데이터 수집", std: "12데과02-01", ext: false },
      { id: "L14", file: "l14.html", title: "파이썬·pandas 첫걸음", std: "12데과02-01", ext: false },
      { id: "L15", file: "l15.html", title: "기술 통계로 데이터 특성 파악", std: "12데과02-01", ext: false },
      { id: "L16", file: "l16.html", title: "웹 데이터 수집: API·크롤링", std: "12데과02-01", ext: true },
      { id: "L17", file: "l17.html", title: "전처리 ① 결측치", std: "12데과02-02", ext: false },
      { id: "L18", file: "l18.html", title: "전처리 ② 이상치", std: "12데과02-02", ext: false },
      { id: "L19", file: "l19.html", title: "전처리 ③ 정규화·표준화", std: "12데과02-02", ext: false },
      { id: "L20", file: "l20.html", title: "데이터 시각화 ① 목적에 맞는 그래프", std: "12데과02-02", ext: false },
      { id: "L21", file: "l21.html", title: "데이터 시각화 ② 지도·대시보드", std: "12데과02-02", ext: true },
      { id: "L22", file: "l22.html", title: "속성 간 관계와 상관 분석", std: "12데과02-03", ext: false },
      { id: "L23", file: "l23.html", title: "데이터 통합과 파생 속성", std: "12데과02-03", ext: true },
      { id: "L24", file: "l24.html", title: "같은 데이터, 다른 분석", std: "12데과02-04", ext: false },
      { id: "L25", file: "l25.html", title: "Ⅱ영역 미니 프로젝트", std: "12데과02-01~04", ext: true },
    ],
  },
  {
    unit: 3, label: "데이터 모델링과 평가", roman: "Ⅲ", color: "var(--u3)",
    lessons: [
      { id: "L26", file: "l26.html", title: "데이터 모델의 개념", std: "12데과03-01", ext: false },
      { id: "L27", file: "l27.html", title: "데이터 분석 도구 탐색", std: "12데과03-01", ext: false },
      { id: "L28", file: "l28.html", title: "통계적 회귀: 최소제곱법", std: "12데과03-02", ext: false },
      { id: "L29", file: "l29.html", title: "기계학습 회귀: 경사 하강법", std: "12데과03-02", ext: false },
      { id: "L30", file: "l30.html", title: "다중 회귀와 변수 선택", std: "12데과03-02", ext: true },
      { id: "L31", file: "l31.html", title: "두 회귀 모델 비교·해석", std: "12데과03-02", ext: false },
      { id: "L32", file: "l32.html", title: "유사도와 거리", std: "12데과03-03", ext: false },
      { id: "L33", file: "l33.html", title: "k-평균 군집 분석", std: "12데과03-03", ext: false },
      { id: "L34", file: "l34.html", title: "군집 수 정하기와 군집 해석", std: "12데과03-03", ext: true },
      { id: "L35", file: "l35.html", title: "연관 분석: 지지도·신뢰도·향상도", std: "12데과03-04", ext: false },
      { id: "L36", file: "l36.html", title: "연관 규칙 찾기 실습", std: "12데과03-04", ext: true },
      { id: "L37", file: "l37.html", title: "분류 모델: k-NN과 의사결정트리", std: "12데과03-05", ext: false },
      { id: "L38", file: "l38.html", title: "모델 평가: 정확도와 혼동 행렬", std: "12데과03-05", ext: false },
      { id: "L39", file: "l39.html", title: "과대적합과 교차 검증", std: "12데과03-05", ext: true },
      { id: "L40", file: "l40.html", title: "목적에 맞는 분석 방법 선택", std: "12데과03-06", ext: false },
      { id: "L41", file: "l41.html", title: "Ⅲ영역 종합 실습: 모델 비교", std: "12데과03-05·06", ext: true },
    ],
  },
  {
    unit: 4, label: "데이터 과학 프로젝트", roman: "Ⅳ", color: "var(--u4)",
    lessons: [
      { id: "L42", file: "l42.html", title: "분야별 데이터 과학 적용 사례", std: "12데과04-01", ext: false },
      { id: "L43", file: "l43.html", title: "프로젝트 주제 선정과 적합성 판단", std: "12데과04-01", ext: false },
      { id: "L44", file: "l44.html", title: "프로젝트 계획 수립", std: "12데과04-01·02", ext: false },
      { id: "L45", file: "l45.html", title: "데이터 수집과 전처리", std: "12데과04-02", ext: false },
      { id: "L46", file: "l46.html", title: "탐색적 데이터 분석(EDA)", std: "12데과04-02", ext: false },
      { id: "L47", file: "l47.html", title: "분석 방법 ① 적용", std: "12데과04-03", ext: false },
      { id: "L48", file: "l48.html", title: "분석 방법 ② 적용과 비교", std: "12데과04-03", ext: false },
      { id: "L49", file: "l49.html", title: "모델 개선과 재분석", std: "12데과04-04", ext: true },
      { id: "L50", file: "l50.html", title: "분석 결과 해석", std: "12데과04-04", ext: false },
      { id: "L51", file: "l51.html", title: "데이터 스토리텔링", std: "12데과04-04", ext: true },
      { id: "L52", file: "l52.html", title: "사회적 영향과 데이터 윤리 성찰", std: "12데과04-05", ext: false },
      { id: "L53", file: "l53.html", title: "보고서·발표 준비", std: "12데과04-05", ext: true },
      { id: "L54", file: "l54.html", title: "프로젝트 발표와 평가", std: "12데과04-05", ext: false },
      { id: "L55", file: "l55.html", title: "결과 공유와 포트폴리오", std: "12데과04-05", ext: true },
    ],
  },
  {
    unit: 5, label: "마무리", roman: "", color: "var(--ink-faint)",
    lessons: [
      { id: "L56", file: "l56.html", title: "총정리와 성찰", std: "전 성취기준", ext: false },
    ],
  },
];

/* ---------- 3/4학점 모드 ---------- */
function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function getMode() {
  const m = safeGet("dsc-mode");
  return m === "3" ? "3" : "4";
}
function setMode(m) {
  safeSet("dsc-mode", m);
  location.reload();
}

/* 현재 페이지 위치 파악 */
const IS_LESSON = location.pathname.includes("/lessons/");
const ROOT = IS_LESSON ? "../" : "./";

function currentLessonId() {
  return document.body.dataset.lesson || null;
}

/* 전체 차시(모드 반영 번호 포함) */
function flatLessons() {
  const all = COURSE.flatMap(u =>
    u.lessons.map(l => ({ ...l, unit: u.unit, unitLabel: u.label, roman: u.roman, color: u.color }))
  );
  let n4 = 0, n3 = 0;
  for (const l of all) {
    n4++; l.num4 = n4;
    if (!l.ext) { n3++; l.num3 = n3; } else l.num3 = null;
  }
  return all;
}

/* 현재 모드에서의 표시 번호 ("7차시" / 확장이면 3학점 모드에서 "확장") */
function lessonNumLabel(l, mode) {
  if (mode === "3") return l.ext ? "확장" : `${l.num3}차시`;
  return `${l.num4}차시`;
}

/* ---------- 사이드바 렌더링 ---------- */
function renderSidebar() {
  const cur = currentLessonId();
  const mode = getMode();
  const all = flatLessons();
  const side = document.createElement("aside");
  side.id = "sidebar";

  let html = `<a class="brand" href="${ROOT}index.html">데이터 과학<small>2022 개정 교육과정 · 교과서 4종 통합</small></a>`;

  html += `<div class="mode-switch" role="group" aria-label="학점 모드 선택">
    <button class="${mode === "3" ? "on" : ""}" data-m="3">3학점 · 40차시</button>
    <button class="${mode === "4" ? "on" : ""}" data-m="4">4학점 · 56차시</button>
  </div>`;

  for (const u of COURSE) {
    const visible = u.lessons.filter(l => mode === "4" || !l.ext);
    if (!visible.length) continue;
    const withNums = visible.map(l => all.find(a => a.id === l.id));
    html += `<div class="unit-group">
      <div class="unit-title"><span class="dot" style="background:${u.color}"></span>${u.roman ? u.roman + ". " : ""}${u.label}</div>
      <ul>` +
      withNums.map(l =>
        `<li><a href="${ROOT}lessons/${l.file}" class="${l.id === cur ? "active" : ""}${l.ext ? " is-ext" : ""}">
          <span class="lnum">${mode === "3" ? l.num3 : l.num4}</span>${l.title}${l.ext ? '<span class="ext-mark">확장</span>' : ""}</a></li>`
      ).join("") +
      `</ul></div>`;
  }
  html += `<div class="side-extra"><ul>
    <li><a href="${ROOT}tools.html" class="${document.body.dataset.page === "tools" ? "active" : ""}">🧰 데이터 분석 도구 모음</a></li>
    <li><a href="${ROOT}index.html#standards">📋 성취기준 한눈에 보기</a></li>
    <li><a href="${ROOT}data.html" class="${document.body.dataset.page === "data" ? "active" : ""}">🗂️ 실습 데이터 안내</a></li>
    <li><a href="${ROOT}textbook-analysis.html">📚 교과서 4종 비교 분석</a></li>
  </ul></div>`;
  side.innerHTML = html;

  side.querySelectorAll(".mode-switch button").forEach(b =>
    b.addEventListener("click", () => setMode(b.dataset.m)));

  const app = document.getElementById("app");
  app.insertBefore(side, app.firstChild);

  // 모바일 토글 버튼
  const btn = document.createElement("button");
  btn.id = "menu-btn"; btn.textContent = "☰"; btn.setAttribute("aria-label", "목차 열기");
  btn.addEventListener("click", () => side.classList.toggle("open"));
  document.body.appendChild(btn);
  document.addEventListener("click", e => {
    if (side.classList.contains("open") && !side.contains(e.target) && e.target !== btn) side.classList.remove("open");
  });

  const active = side.querySelector("a.active");
  if (active) active.scrollIntoView({ block: "center" });
}

/* ---------- 차시 헤더 자동 채움 ---------- */
function fillLessonHead() {
  const cur = currentLessonId();
  if (!cur) return;
  const mode = getMode();
  const l = flatLessons().find(x => x.id === cur);
  if (!l) return;

  const noEl = document.querySelector(".lesson-head .lesson-no");
  if (noEl) noEl.textContent = lessonNumLabel(l, mode).replace("차시", "") + "차시";

  const crumbs = document.querySelector(".lesson-head .crumbs");
  if (crumbs && !crumbs.textContent.trim())
    crumbs.textContent = (l.roman ? l.roman + ". " : "") + l.unitLabel;

  // 확장 차시 안내 배너 (3학점 모드에서 열람 시)
  if (l.ext) {
    const b = document.createElement("div");
    b.className = "ext-banner";
    b.innerHTML = mode === "3"
      ? "◆ 이 차시는 <b>4학점(56차시) 확장 차시</b>입니다. 3학점 과정에서는 건너뛰어도 되지만, 심화 학습으로 활용할 수 있습니다."
      : "◆ 4학점 확장 차시";
    const head = document.querySelector(".lesson-head");
    if (head) head.insertAdjacentElement("afterend", b);
  }
}

/* ---------- 이전/다음 차시 내비 (모드 반영: 3학점이면 확장 건너뜀) ---------- */
function renderLessonNav() {
  const cur = currentLessonId();
  if (!cur) return;
  const mode = getMode();
  let list = flatLessons();
  const curLesson = list.find(l => l.id === cur);
  if (mode === "3" && curLesson && !curLesson.ext) list = list.filter(l => !l.ext);
  const idx = list.findIndex(l => l.id === cur);
  if (idx < 0) return;
  const prev = list[idx - 1], next = list[idx + 1];
  const lab = l => `${lessonNumLabel(l, mode)} · ${l.title}`;
  const nav = document.createElement("nav");
  nav.className = "lesson-nav";
  nav.innerHTML =
    (prev ? `<a href="${prev.file}"><div class="dir">← 이전 차시</div><div class="nav-title">${lab(prev)}</div></a>`
          : `<a href="${ROOT}index.html"><div class="dir">← 처음으로</div><div class="nav-title">교과서 홈</div></a>`) +
    (next ? `<a class="next" href="${next.file}"><div class="dir">다음 차시 →</div><div class="nav-title">${lab(next)}</div></a>`
          : `<a class="next" href="${ROOT}index.html"><div class="dir">과정 끝 →</div><div class="nav-title">교과서 홈으로</div></a>`);
  document.querySelector("main").appendChild(nav);

  const foot = document.createElement("footer");
  foot.className = "site-foot";
  foot.innerHTML = "본 교재는 2022 개정 교육과정 「데이터 과학」 성취기준에 맞추어 교과서 4종(삼양미디어·씨마스·와이비엠·천재교과서)의 구성을 분석·참고하여 새로 집필한 오리지널 콘텐츠입니다. 출판사 표기는 해당 교과서의 구성·소재를 참고했음을 뜻하며, 본문·그림은 모두 새로 작성되었습니다. · 수업 목적으로 자유롭게 활용할 수 있습니다.";
  document.querySelector("main").appendChild(foot);
}

/* ---------- 출판사 태그 툴팁 ---------- */
function initPubTags() {
  document.querySelectorAll("i.pub, i.pub-c").forEach(el => {
    if (el.title) return;
    el.title = el.classList.contains("pub-c")
      ? "분석한 교과서 4종 중 3종 이상이 공통으로 다루는 내용입니다."
      : `${el.textContent} 교과서의 구성·소재를 참고해 재구성한 내용입니다.`;
  });
}

/* ---------- 퀴즈 엔진 ----------
   Quiz.render(selector, [
     {type:"mc", q:"...", choices:["...","..."], answer:0, explain:"..."},
     {type:"ox", q:"...", answer:true, explain:"..."},
     {type:"short", q:"...", model:"예시 답안 ...", explain:"..."(선택)}
   ])
--------------------------------- */
const Quiz = {
  render(sel, items, opts = {}) {
    const host = document.querySelector(sel);
    if (!host) return;
    const title = opts.title || "스스로 점검하기";
    let answered = 0, correct = 0;
    const gradable = items.filter(i => i.type !== "short").length;

    const wrap = document.createElement("section");
    wrap.className = "quiz-wrap";
    wrap.innerHTML = `<div class="quiz-head"><span>✏️ ${title}</span><span class="quiz-score">0 / ${gradable}</span></div><div class="quiz-body"></div>`;
    const body = wrap.querySelector(".quiz-body");
    const scoreEl = wrap.querySelector(".quiz-score");

    items.forEach((item, i) => {
      const div = document.createElement("div");
      div.className = "q-item";
      const qHtml = `<div class="q-text"><span class="q-no">문제 ${i + 1}.</span>${item.q}</div>`;

      if (item.type === "mc" || item.type === "ox") {
        const choices = item.type === "ox" ? ["O (맞다)", "X (틀리다)"] : item.choices;
        const answerIdx = item.type === "ox" ? (item.answer ? 0 : 1) : item.answer;
        div.innerHTML = qHtml + `<div class="q-choices">` +
          choices.map((c, ci) => `<button class="q-choice" data-i="${ci}">${item.type === "ox" ? c : "①②③④⑤"[ci] + " " + c}</button>`).join("") +
          `</div><div class="q-explain" style="display:none"></div>`;
        const btns = div.querySelectorAll(".q-choice");
        const exp = div.querySelector(".q-explain");
        btns.forEach(b => b.addEventListener("click", () => {
          const pick = +b.dataset.i;
          btns.forEach(x => x.disabled = true);
          btns[answerIdx].classList.add("correct");
          const ok = pick === answerIdx;
          if (!ok) b.classList.add("wrong");
          answered++; if (ok) correct++;
          exp.style.display = "block";
          exp.innerHTML = (ok ? `<b class="good">정답!</b> ` : `<b class="bad">아쉬워요.</b> 정답은 <b>${item.type === "ox" ? choices[answerIdx][0] : "①②③④⑤"[answerIdx]}</b> 입니다. `) + (item.explain || "");
          scoreEl.textContent = `${correct} / ${gradable}`;
          if (answered === items.length || (answered >= gradable && gradable === items.length)) showResult();
        }));
      } else { // short (서술형: 자가 점검)
        div.innerHTML = qHtml +
          `<div class="q-short"><textarea class="plain" placeholder="자신의 생각을 정리해 써 보세요."></textarea>
          <details class="reveal model-answer"><summary>예시 답안 확인하기 (먼저 스스로 써 본 다음 열어 보세요)</summary>
          <div class="reveal-body">${item.model}${item.explain ? `<p>${item.explain}</p>` : ""}</div></details></div>`;
      }
      body.appendChild(div);
    });

    const result = document.createElement("div");
    result.className = "quiz-result";
    body.appendChild(result);
    function showResult() {
      result.style.display = "block";
      const rate = gradable ? correct / gradable : 1;
      const msg = rate === 1 ? "완벽해요! 다음 차시로 넘어가도 좋습니다. 🎉"
        : rate >= 0.7 ? "잘했어요! 틀린 문항의 해설을 한 번 더 읽어 보세요. 👍"
        : "본문을 다시 읽고, 틀린 문항을 복습해 보세요. 💪";
      result.textContent = `채점 결과: ${correct} / ${gradable} — ${msg}`;
    }

    host.appendChild(wrap);
  }
};

/* ---------- 초기화 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  if (IS_LESSON) { fillLessonHead(); renderLessonNav(); }
  initPubTags();
});
