# 차시 집필 가이드 (에이전트·교사 공용)

이 교재는 2022 개정 「데이터 과학」 성취기준 19개를 반영한 학생 활동 중심 온라인 교과서입니다.
교과서 4종(삼양미디어·씨마스·와이비엠·천재교과서)을 분석·통합하여 **새로 집필**합니다.

## 반드시 참고할 파일
- 모범 차시: `lessons/l35.html` — 구조·톤·분량·위젯·퀴즈 형식을 그대로 따른다.
- 목차: `assets/js/common.js` 상단 `COURSE` (차시 id·제목·성취기준·확장 여부)
- 성취기준 원문: `../extract/curriculum.md`
- 교과서 분석: `../extract/analysis_삼양.json`, `analysis_씨마스.json`, `analysis_YBM.json`, `analysis_천재.json` (+ 같은 이름 .md)
- 실습 데이터: `assets/data/README.md` (파이썬에서 `load_csv("파일.csv")`)
- 스타일: `assets/css/style.css` (새 클래스는 차시 파일의 `<style>`에 작성)

## 파일 골격
```html
<!DOCTYPE html><html lang="ko"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>차시 제목 | 데이터 과학</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">
<link rel="stylesheet" href="../assets/css/style.css?v=20260930">
<style>/* 이 차시 위젯 전용 스타일 */</style>
</head>
<body data-unit="단원번호 0~5" data-lesson="L##">
<div id="app"><main>
<header class="lesson-head">
  <div class="crumbs"></div>
  <h1><span class="lesson-no"></span>차시 제목(COURSE와 동일)</h1>
  <span class="std-badge">성취기준 12데과0X-0Y</span>
  <div class="objectives"><div class="label">🎯 학습 목표</div><ul><li>…할 수 있다.</li>(2~3개)</ul>
    <div class="std-full">[12데과0X-0Y] 성취기준 원문</div></div>
</header>
<div class="ds-steps">…(해당 단계에 class="on")</div>
<div class="box box-story"><span class="box-label">생각 열기</span>…</div>
<h2><span class="sec-no">1</span>소제목 <i class="pub-c">공통</i></h2> …
… 본문 / 표 / figure+SVG / .sim 위젯 / .pycell / .box / .activity / .summary …
<div id="quiz"></div>
</main></div>
<script src="../assets/js/common.js?v=20260930"></script>
<script src="../assets/js/pycell.js?v=20260930"></script>   (파이썬 셀이 있을 때만)
<script> 위젯 IIFE ...  Quiz.render("#quiz", [...]); </script>
</body></html>
```
`data-unit`: L01=0, Ⅰ=1, Ⅱ=2, Ⅲ=3, Ⅳ=4, L56=5.
`ds-steps` 단계: 문제 정의 / 수집 / 전처리 / 탐색 / 모델링 / 평가·해석 / 공유

## 차시 구성 요건 (모든 차시)
1. **학습 목표** 2~3개 + 성취기준 원문.
2. **생각 열기**(box-story): 학생 생활 속 장면으로 시작.
3. **본문** 3~5개 절(h2). 개념은 쉬운 말 → 정확한 용어(keyterm) 순서. 필요한 곳에 표·수식(.formula)·인라인 SVG 도해(figure + figcaption).
4. **조작형 위젯 1개 이상**(.sim): 순수 JS(외부 라이브러리 없이), 클릭·슬라이더·드래그·선택으로 결과가 즉시 바뀌는 것. canvas 또는 DOM. 모바일 폭에서도 깨지지 않게.
5. **파이썬 셀**(.pycell) — 실습 차시(Ⅱ·Ⅲ·Ⅳ 대부분)는 2~4개. 교재 데이터(`load_csv`)나 코드 안의 작은 DataFrame 사용.
   사용 가능: pandas, numpy, matplotlib, scikit-learn, sqlite3, scipy. (seaborn·mlxtend·requests 불가)
   같은 페이지의 셀은 변수를 공유하므로 위→아래 순서로 실행된다고 가정. 각 셀 끝에 `# ✏️` 로 시작하는 바꿔 보기 과제 한 줄.
   그래프 한글 제목/축 사용 가능(나눔고딕 자동 적용). `plt.show()`로 끝낸다. 코드 실행 시간은 수 초 이내.
6. **학생 활동**(.activity) 1~2개: act-kind는 개별 활동/모둠 활동/토론 활동/탐구 활동/조사 활동 중. 표·write-lines로 활동지 형태.
7. **교사용 지도 팁**(.box-teacher) 1개: 도구 대안(Orange·스프레드시트·엔트리 등), 흔한 오개념, 시간 배분 등.
8. **핵심 정리**(.summary) 3~5줄.
9. **퀴즈**: `Quiz.render("#quiz", [...])` 5문항 — mc(보기 5개, answer 0부터), ox, short(model 예시답안) 섞어서. 계산 문제 1개 이상(해당 시). 해설 충실히.

## 출판사 태그
h2 또는 activity 제목 옆에 붙인다.
- `<i class="pub-c">공통</i>` — 4종 중 3종 이상이 다루는 내용.
- `<i class="pub">삼양</i>` `<i class="pub">씨마스</i>` `<i class="pub">YBM</i>` `<i class="pub">천재</i>` — 해당 교과서의 특색 있는 소재·활동을 참고해 **재구성**한 경우. 분석 JSON의 distinctive/activities/lesson_ideas에서 근거를 찾아 쓴다. 근거 없는 태그 금지.

## 검사 (필수)
차시를 쓸 때마다 반드시 실행해서 ⚠ 없이 OK가 나올 때까지 고친다:
```
cd "C:/vibe/data science/tools" && node check_lesson.mjs ../ds-textbook/lessons/l17.html
```
`SHOW_OUT=1`을 앞에 붙이면 각 셀의 출력도 보여 준다 — 본문에 인용한 수치가 실제 출력과 일치하는지 확인할 것.
브라우저와 같은 Pyodide 0.26.4(pandas 2.2, scikit-learn 1.4, matplotlib 3.5)로 실행된다. 로컬 `python`은 버전이 낮으니 검증에 쓰지 말 것.
JS 위젯은 문법만 검사되므로 DOM id 오타·null 참조를 스스로 꼼꼼히 확인한다.

## 저작권·내용 원칙
- 교과서 문장·그림·예제 데이터를 **옮겨 쓰지 않는다.** 소재·구성 아이디어만 참고하고 설명·예시·데이터는 새로 만든다.
- 수치 예시는 손으로 검산해 **틀림이 없어야 한다.** 파이썬 코드는 실제로 실행되는 코드여야 한다 (열 이름은 data/README.md 기준).
- 실제 통계를 인용할 때는 확실한 것만, 연도와 출처 기관을 밝힌다. 불확실하면 “예를 들어”로 가상 예시임을 드러낸다.
- 학생 대상 존댓말(~합니다/~해 봅시다). 분량: 본문+위젯+활동으로 50분 수업 1차시 (HTML 25~45KB 정도).
- 확장 차시(ext:true)는 심화 내용이며 3학점 반은 건너뛸 수 있게 앞뒤 차시와 독립적으로 이해 가능하게 쓴다.
