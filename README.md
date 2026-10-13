# 📊 데이터 과학 온라인 교과서

> 2022 개정 교육과정 고등학교 진로 선택 과목 **「데이터 과학」** 학생 활동 중심 온라인 교과서
> 교과서 4종(삼양미디어·씨마스·와이비엠·천재교과서)을 성취기준별로 분석·통합하여 새로 집필

**🔗 바로 가기: https://comt-ja0.github.io/data-science-textbook/**

| 📚 교과서 4종 통합 | 📖 40차시 + 확장 16차시 | 🕹️ 차시마다 조작형 실험 위젯 | 🐍 설치 없는 브라우저 파이썬 | 🗂️ 실습 데이터 13종 | ✏️ 차시별 형성평가 |
|:-:|:-:|:-:|:-:|:-:|:-:|

---

## 이 교과서의 특징

- **성취기준 19개 전부 반영** — 모든 차시 상단에 성취기준 코드와 원문, 학습 목표를 표시합니다.
- **3학점 / 4학점 모두 지원** — 왼쪽 목차 위 스위치로 **3학점(40차시)** 과 **4학점(56차시)** 을 바꿉니다. 3학점 모드에서는 확장 차시(◆)가 숨겨지고 차시 번호가 다시 매겨집니다.
- **설치 없이 파이썬 실습** — 브라우저에서 pandas·numpy·matplotlib·scikit-learn·sqlite3가 바로 실행되고, 그래프의 한글도 깨지지 않습니다. `load_csv("파일.csv")` 한 줄로 교재 데이터를 불러옵니다.
- **직접 만지며 배우는 위젯** — 장바구니 규칙 실험실, 조인 시각화기, 표본 편향 시뮬레이터, IQR 울타리 계산기, 상관 산점도, 최소제곱 게임, 경사 하강법 실행기, k-평균 단계 실행기, k-NN 놀이터, 혼동 행렬 임계값 실험 등.
- **바로 쓰는 활동지** — 개별·모둠·토론 활동은 인쇄(Ctrl+P)하면 사이드바가 빠진 활동지 형태로 나옵니다.
- **교사용 지도 팁** — Orange·스프레드시트 대안, 흔한 오개념, 시간 배분을 차시마다 안내합니다.
- **교과서 4종 분석 반영** — 각 교과서의 좋은 소재는 재구성해 출처 태그(`공통`·`삼양`·`씨마스`·`YBM`·`천재`)로 표시하고, 4종 공통 약점(목적에 맞는 분석 방법 선택, 공정한 모델 비교, 사회적 영향 성찰)은 별도 차시로 보강했습니다.

## 단원 구성

| 단원 | 3학점 | 4학점 | 성취기준 |
|---|:-:|:-:|---|
| 오리엔테이션 | 1 | 1 | — |
| Ⅰ. 데이터 과학의 이해 | 7 | 10 | 12데과01-01 ~ 04 |
| Ⅱ. 데이터 준비와 분석 | 10 | 14 | 12데과02-01 ~ 04 |
| Ⅲ. 데이터 모델링과 평가 | 11 | 16 | 12데과03-01 ~ 06 |
| Ⅳ. 데이터 과학 프로젝트 | 10 | 14 | 12데과04-01 ~ 05 |
| 총정리 | 1 | 1 | 전 범위 |
| **합계** | **40** | **56** | |

<details>
<summary><b>📋 전체 차시 목록 펼치기</b> (◆ = 4학점 확장 차시)</summary>

| 4학점 | 3학점 | 차시 | 성취기준 |
|:-:|:-:|---|---|
| 1 | 1 | [오리엔테이션: 데이터로 세상 읽기](https://comt-ja0.github.io/data-science-textbook/lessons/l01.html) | — |
| | | **Ⅰ. 데이터 과학의 이해** | |
| 2 | 2 | [데이터 과학의 개념과 발전](https://comt-ja0.github.io/data-science-textbook/lessons/l02.html) | 12데과01-01 |
| 3 | 3 | [데이터 기반 의사 결정](https://comt-ja0.github.io/data-science-textbook/lessons/l03.html) | 12데과01-01 |
| 4 | 4 | [정형·반정형·비정형 데이터](https://comt-ja0.github.io/data-science-textbook/lessons/l04.html) | 12데과01-02 |
| 5 | 5 | [데이터 속성과 잠재적 가치](https://comt-ja0.github.io/data-science-textbook/lessons/l05.html) | 12데과01-02 |
| 6 | 6 | [데이터셋과 데이터베이스](https://comt-ja0.github.io/data-science-textbook/lessons/l06.html) | 12데과01-03 |
| 7 | 7 | [데이터 통합: 키로 연결하기](https://comt-ja0.github.io/data-science-textbook/lessons/l07.html) | 12데과01-03 |
| 8 | ◆ | [SQL로 데이터베이스 질의하기](https://comt-ja0.github.io/data-science-textbook/lessons/l08.html) | 12데과01-03 |
| 9 | 8 | [데이터가 바꾸는 사회와 직업](https://comt-ja0.github.io/data-science-textbook/lessons/l09.html) | 12데과01-04 |
| 10 | ◆ | [데이터 과학 진로 탐색](https://comt-ja0.github.io/data-science-textbook/lessons/l10.html) | 12데과01-04 |
| 11 | ◆ | [Ⅰ영역 미니 프로젝트](https://comt-ja0.github.io/data-science-textbook/lessons/l11.html) | 12데과01-01~04 |
| | | **Ⅱ. 데이터 준비와 분석** | |
| 12 | 9 | [데이터 수집과 공공 데이터](https://comt-ja0.github.io/data-science-textbook/lessons/l12.html) | 12데과02-01 |
| 13 | 10 | [편향 없는 데이터 수집](https://comt-ja0.github.io/data-science-textbook/lessons/l13.html) | 12데과02-01 |
| 14 | 11 | [파이썬·pandas 첫걸음](https://comt-ja0.github.io/data-science-textbook/lessons/l14.html) | 12데과02-01 |
| 15 | 12 | [기술 통계로 데이터 특성 파악](https://comt-ja0.github.io/data-science-textbook/lessons/l15.html) | 12데과02-01 |
| 16 | ◆ | [웹 데이터 수집: API·크롤링](https://comt-ja0.github.io/data-science-textbook/lessons/l16.html) | 12데과02-01 |
| 17 | 13 | [전처리 ① 결측치](https://comt-ja0.github.io/data-science-textbook/lessons/l17.html) | 12데과02-02 |
| 18 | 14 | [전처리 ② 이상치](https://comt-ja0.github.io/data-science-textbook/lessons/l18.html) | 12데과02-02 |
| 19 | 15 | [전처리 ③ 정규화·표준화](https://comt-ja0.github.io/data-science-textbook/lessons/l19.html) | 12데과02-02 |
| 20 | 16 | [데이터 시각화 ① 목적에 맞는 그래프](https://comt-ja0.github.io/data-science-textbook/lessons/l20.html) | 12데과02-02 |
| 21 | ◆ | [데이터 시각화 ② 지도·대시보드](https://comt-ja0.github.io/data-science-textbook/lessons/l21.html) | 12데과02-02 |
| 22 | 17 | [속성 간 관계와 상관 분석](https://comt-ja0.github.io/data-science-textbook/lessons/l22.html) | 12데과02-03 |
| 23 | ◆ | [데이터 통합과 파생 속성](https://comt-ja0.github.io/data-science-textbook/lessons/l23.html) | 12데과02-03 |
| 24 | 18 | [같은 데이터, 다른 분석](https://comt-ja0.github.io/data-science-textbook/lessons/l24.html) | 12데과02-04 |
| 25 | ◆ | [Ⅱ영역 미니 프로젝트](https://comt-ja0.github.io/data-science-textbook/lessons/l25.html) | 12데과02-01~04 |
| | | **Ⅲ. 데이터 모델링과 평가** | |
| 26 | 19 | [데이터 모델의 개념](https://comt-ja0.github.io/data-science-textbook/lessons/l26.html) | 12데과03-01 |
| 27 | 20 | [데이터 분석 도구 탐색](https://comt-ja0.github.io/data-science-textbook/lessons/l27.html) | 12데과03-01 |
| 28 | 21 | [통계적 회귀: 최소제곱법](https://comt-ja0.github.io/data-science-textbook/lessons/l28.html) | 12데과03-02 |
| 29 | 22 | [기계학습 회귀: 경사 하강법](https://comt-ja0.github.io/data-science-textbook/lessons/l29.html) | 12데과03-02 |
| 30 | ◆ | [다중 회귀와 변수 선택](https://comt-ja0.github.io/data-science-textbook/lessons/l30.html) | 12데과03-02 |
| 31 | 23 | [두 회귀 모델 비교·해석](https://comt-ja0.github.io/data-science-textbook/lessons/l31.html) | 12데과03-02 |
| 32 | 24 | [유사도와 거리](https://comt-ja0.github.io/data-science-textbook/lessons/l32.html) | 12데과03-03 |
| 33 | 25 | [k-평균 군집 분석](https://comt-ja0.github.io/data-science-textbook/lessons/l33.html) | 12데과03-03 |
| 34 | ◆ | [군집 수 정하기와 군집 해석](https://comt-ja0.github.io/data-science-textbook/lessons/l34.html) | 12데과03-03 |
| 35 | 26 | [연관 분석: 지지도·신뢰도·향상도](https://comt-ja0.github.io/data-science-textbook/lessons/l35.html) | 12데과03-04 |
| 36 | ◆ | [연관 규칙 찾기 실습](https://comt-ja0.github.io/data-science-textbook/lessons/l36.html) | 12데과03-04 |
| 37 | 27 | [분류 모델: k-NN과 의사결정트리](https://comt-ja0.github.io/data-science-textbook/lessons/l37.html) | 12데과03-05 |
| 38 | 28 | [모델 평가: 정확도와 혼동 행렬](https://comt-ja0.github.io/data-science-textbook/lessons/l38.html) | 12데과03-05 |
| 39 | ◆ | [과대적합과 교차 검증](https://comt-ja0.github.io/data-science-textbook/lessons/l39.html) | 12데과03-05 |
| 40 | 29 | [목적에 맞는 분석 방법 선택](https://comt-ja0.github.io/data-science-textbook/lessons/l40.html) | 12데과03-06 |
| 41 | ◆ | [Ⅲ영역 종합 실습: 모델 비교](https://comt-ja0.github.io/data-science-textbook/lessons/l41.html) | 12데과03-05·06 |
| | | **Ⅳ. 데이터 과학 프로젝트** | |
| 42 | 30 | [분야별 데이터 과학 적용 사례](https://comt-ja0.github.io/data-science-textbook/lessons/l42.html) | 12데과04-01 |
| 43 | 31 | [프로젝트 주제 선정과 적합성 판단](https://comt-ja0.github.io/data-science-textbook/lessons/l43.html) | 12데과04-01 |
| 44 | 32 | [프로젝트 계획 수립](https://comt-ja0.github.io/data-science-textbook/lessons/l44.html) | 12데과04-01·02 |
| 45 | 33 | [데이터 수집과 전처리](https://comt-ja0.github.io/data-science-textbook/lessons/l45.html) | 12데과04-02 |
| 46 | 34 | [탐색적 데이터 분석(EDA)](https://comt-ja0.github.io/data-science-textbook/lessons/l46.html) | 12데과04-02 |
| 47 | 35 | [분석 방법 ① 적용](https://comt-ja0.github.io/data-science-textbook/lessons/l47.html) | 12데과04-03 |
| 48 | 36 | [분석 방법 ② 적용과 비교](https://comt-ja0.github.io/data-science-textbook/lessons/l48.html) | 12데과04-03 |
| 49 | ◆ | [모델 개선과 재분석](https://comt-ja0.github.io/data-science-textbook/lessons/l49.html) | 12데과04-04 |
| 50 | 37 | [분석 결과 해석](https://comt-ja0.github.io/data-science-textbook/lessons/l50.html) | 12데과04-04 |
| 51 | ◆ | [데이터 스토리텔링](https://comt-ja0.github.io/data-science-textbook/lessons/l51.html) | 12데과04-04 |
| 52 | 38 | [사회적 영향과 데이터 윤리 성찰](https://comt-ja0.github.io/data-science-textbook/lessons/l52.html) | 12데과04-05 |
| 53 | ◆ | [보고서·발표 준비](https://comt-ja0.github.io/data-science-textbook/lessons/l53.html) | 12데과04-05 |
| 54 | 39 | [프로젝트 발표와 평가](https://comt-ja0.github.io/data-science-textbook/lessons/l54.html) | 12데과04-05 |
| 55 | ◆ | [결과 공유와 포트폴리오](https://comt-ja0.github.io/data-science-textbook/lessons/l55.html) | 12데과04-05 |
| 56 | 40 | [총정리와 성찰](https://comt-ja0.github.io/data-science-textbook/lessons/l56.html) | 전 성취기준 |

</details>

## 차시 페이지 구성

모든 차시는 같은 흐름으로 되어 있습니다.

1. 🎯 **학습 목표** — 성취기준 코드·원문과 함께
2. 💭 **생각 열기** — 학생 생활 속 장면으로 시작
3. 📖 **본문** — 개념 설명, 표, 수식, 도해(SVG)
4. 🕹️ **데이터 실험실** — 클릭·드래그·슬라이더로 직접 조작하는 위젯
5. 🐍 **파이썬 실습** — ▶ 실행으로 바로 돌리고, 코드 끝 ✏️ 과제대로 바꿔 보기
6. ✍️ **학생 활동** — 개별·모둠·토론 활동지
7. 🧑‍🏫 **지도 팁** — 도구 대안, 오개념, 운영 요령
8. 📌 **핵심 정리**
9. ✏️ **스스로 점검하기** — 즉시 채점 퀴즈와 해설, 서술형 예시 답안

Ⅳ단원은 **“우리 학교 전력 사용량을 줄이려면?”**(SDG 7·13) 예시 프로젝트가 45~50차시에 이어지고, 모둠은 같은 단계를 각자 주제로 수행합니다.

## 함께 제공하는 페이지

| 페이지 | 내용 |
|---|---|
| [📚 교과서 4종 비교 분석](https://comt-ja0.github.io/data-science-textbook/textbook-analysis.html) | 4종의 구성·도구·코드 수준, 성취기준 19개 대응 매트릭스, 교과서별 강점·유의점·차용 아이디어, 주제별 비교, 오류·정오 모음, 학교 여건별 활용 가이드 |
| [🗂️ 실습 데이터 안내](https://comt-ja0.github.io/data-science-textbook/data.html) | 데이터 13종 미리보기·내려받기 |
| [🧰 데이터 분석 도구 모음](https://comt-ja0.github.io/data-science-textbook/tools.html) | Orange, 스프레드시트, CODAP, Google Colab, 공공 데이터 포털 안내 |

## 실습 데이터

`assets/data/`의 CSV 13종은 모두 수업을 위해 **새로 만든 교육용 가상 데이터**입니다(실제 관측값 아님).

| 파일 | 주 용도 |
|---|---|
| `health.csv` | 결측치·이상치 처리 (일부러 넣은 결측 5칸, 이상치 4개) |
| `study.csv` | 상관 분석, 단순·다중 회귀 |
| `bike.csv` | 공공자전거 대여량 회귀·시각화 |
| `customers.csv` | k-평균 군집 |
| `basket.csv` | 학교 매점 연관 분석 |
| `air.csv` | 지역별 미세먼지 시각화 |
| `school_students.csv` · `school_clubs.csv` · `school_reading.csv` | 데이터 통합(join)·SQL |
| `fruit.csv` | 분류(k-NN·의사결정트리), 정규화 |
| `energy.csv` | Ⅳ단원 예시 프로젝트 |
| `climate.csv` | 기온 추세, 허위 상관 |
| `survey_population.csv` | 표본 편향 실험 |

자세한 열 설명은 [`assets/data/README.md`](assets/data/README.md)에 있습니다.

## 수업 활용 팁

- **학점 모드** — 목차 위에서 학교 편제에 맞게 고릅니다. 선택은 브라우저에 저장됩니다.
- **파이썬 셀** — 처음 실행할 때 실행 환경(10~20MB)과 한글 글꼴을 내려받으므로 인터넷이 필요합니다. 학교 방화벽에서 `cdn.jsdelivr.net`이 허용되어야 합니다. 같은 페이지의 셀은 변수를 공유하므로 위에서부터 차례로 실행합니다.
- **Colab으로 옮기기** — 셀 코드를 복사한 뒤 `load_csv("x.csv")`를 `pd.read_csv("https://comt-ja0.github.io/data-science-textbook/assets/data/x.csv")`로 바꾸면 그대로 동작합니다.
- **저장 없음 설계** — 퀴즈 응답은 저장되지 않습니다. 계획서·루브릭 등 일부 위젯만 브라우저에 임시 저장되므로, 결과물은 캡처하거나 인쇄해 제출받으세요.
- **크롬북·태블릿** — 설치가 필요 없어 그대로 사용할 수 있습니다.

## 로컬에서 실행하기

정적 사이트라 빌드가 필요 없습니다. 파이썬 셀이 데이터를 불러오려면 로컬 서버로 엽니다.

```bash
git clone https://github.com/comT-ja0/data-science-textbook.git
cd data-science-textbook
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` 에 접속합니다.

## 파일 구조

```
data-science-textbook/
├── index.html              # 홈 (단원 안내, 문제 해결 과정, 성취기준 표)
├── textbook-analysis.html  # 교과서 4종 비교 분석 보고서
├── data.html               # 실습 데이터 안내
├── tools.html              # 외부 분석 도구와 데이터 포털
├── AUTHORING.md            # 차시 집필 가이드
├── LESSON_PLAN.md          # 차시별 집필 계획 (교과서 4종 반영 내역)
├── assets/
│   ├── css/style.css       # 공용 스타일 (인쇄·학점 모드·출판사 태그)
│   ├── js/common.js        # 56차시 목차(COURSE), 3/4학점 모드, 사이드바, 퀴즈 엔진
│   ├── js/pycell.js        # 브라우저 파이썬 셀 (Pyodide, load_csv, 한글 글꼴)
│   └── data/*.csv          # 교육용 가상 데이터 13종
└── lessons/l01.html … l56.html
```

## 내용 수정하기

- 각 차시는 독립된 HTML 파일(`lessons/lNN.html`)입니다. 본문을 고치고 저장하면 됩니다.
- 차시 제목·순서·확장 차시 지정은 `assets/js/common.js` 상단의 `COURSE` 배열에서 관리합니다.
- 새 차시를 쓸 때는 [`AUTHORING.md`](AUTHORING.md)의 구성 요건을 따르세요.
- 수정 후 `git push`하면 약 1분 뒤 사이트에 반영됩니다.

## 저작권

- 본문·활동·퀴즈·위젯 코드·실습 데이터는 이 프로젝트를 위해 **새로 작성한 오리지널 콘텐츠**입니다. 교과서의 문장·그림·데이터는 사용하지 않았으며, 출판사 태그는 구성·소재를 참고했음을 밝히는 표시입니다.
- 성취기준 원문은 교육부 고시 「2022 개정 정보과 교육과정」(공공저작물)에 따릅니다.
- 수업 목적으로 자유롭게 활용·수정할 수 있습니다.
