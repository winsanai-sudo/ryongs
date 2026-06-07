const steps = [
  {
    key: "완성본",
    label: "완성본 10초",
    title: "완성본을 10초만 보여주고, 다시 처음으로 돌아갑니다",
    url: "render.app/final-demo",
    prompt: `오늘 최종적으로는 이런 도구를 만들 겁니다.

문제와 해설을 넣으면
손글씨 풀이 자료가 만들어지고,
정답 가리기·힌트·PNG 저장까지 되는 웹페이지입니다.`,
    talk: "완성본을 오래 설명하지 말고, '이런 게 나옵니다'만 보여준 뒤 바로 허술한 1단계로 돌아가면 변화가 훨씬 드라마틱하게 보입니다.",
    render: () => `
      <h3 class="demo-title">손글씨 풀이 생성기</h3>
      <p class="demo-sub">문제와 해설을 넣으면 학생용 자료로 바뀝니다.</p>
      <div class="tool-layout">
        <div class="input-card">
          <span class="card-label">입력</span>
          <div class="fake-field">문제<br>x² - 5x + 6 = 0을 풀어라.</div>
          <div class="fake-field">해설<br>(x - 2)(x - 3) = 0<br>x = 2 또는 x = 3</div>
          <div class="toolbar">
            <span class="demo-chip teal">정답 가리기</span>
            <span class="demo-chip coral">PNG 저장</span>
          </div>
        </div>
        <div class="notebook">
          <span class="card-label">손글씨 미리보기</span>
          <div class="handwriting">x² - 5x + 6 = 0<br>= (x - 2)(x - 3)<br><br>정답: x = 2 또는 x = 3</div>
        </div>
      </div>`
  },
  {
    key: "1단계",
    label: "허술한 시작",
    title: "아주 단순한 요청으로 일부러 허술하게 시작합니다",
    url: "localhost/simple",
    prompt: `수학 문제와 해설을 입력하면 보여주는 웹페이지를 만들어줘.`,
    talk: "이 정도 요청만 하면 결과도 이 정도입니다. AI가 부족한 게 아니라, 아직 원하는 것을 충분히 말하지 않은 겁니다.",
    render: () => `
      <h3 class="demo-title">수학 문제 표시 페이지</h3>
      <p class="demo-sub">뭔가 만들어졌지만 아직 수업 도구 같지는 않습니다.</p>
      <div class="empty-box">문제와 해설을 여기에 표시합니다</div>`
  },
  {
    key: "2단계",
    label: "입력 구조",
    title: "입력칸과 미리보기를 나누면 도구처럼 보이기 시작합니다",
    url: "localhost/input-preview",
    prompt: `문제 입력칸과 해설 입력칸을 따로 만들어줘.
입력한 내용이 오른쪽 미리보기 영역에 바로 나타나게 해줘.`,
    talk: "이제 단순한 페이지가 아니라, 선생님이 조작하는 수업 자료 제작 도구처럼 바뀌었습니다.",
    render: () => `
      <h3 class="demo-title">입력과 미리보기</h3>
      <p class="demo-sub">구조를 말했더니 화면 배치가 생겼습니다.</p>
      <div class="tool-layout">
        <div class="input-card">
          <span class="card-label">입력 영역</span>
          <div class="fake-field">문제 입력칸</div>
          <div class="fake-field">해설 입력칸</div>
        </div>
        <div class="preview-card">
          <span class="card-label">미리보기</span>
          <div class="fake-field">입력한 문제와 해설이 바로 보입니다.</div>
        </div>
      </div>`
  },
  {
    key: "3단계",
    label: "수학 자료화",
    title: "문제·풀이·정답으로 나누면 수학 해설지가 됩니다",
    url: "localhost/math-solution",
    prompt: `미리보기 영역을 문제, 풀이, 정답으로 구분해줘.
수학 해설지처럼 단계가 잘 보이게 정리해줘.`,
    talk: "여기서 중요한 건 '예쁘게 해줘'가 아니라, 수학 자료의 구조를 말해주는 겁니다.",
    render: () => `
      <h3 class="demo-title">수학 해설지 구조</h3>
      <p class="demo-sub">자료의 구조를 말하면 읽는 순서가 선명해집니다.</p>
      <div class="solution-block">
        <section><h4>문제</h4><p>x² - 5x + 6 = 0을 풀어라.</p></section>
        <section><h4>풀이</h4><p>x² - 5x + 6 = (x - 2)(x - 3)이므로 각각 0이 되는 값을 찾습니다.</p></section>
        <section><h4>정답</h4><p>x = 2 또는 x = 3</p></section>
      </div>`
  },
  {
    key: "4단계",
    label: "손글씨 디자인",
    title: "노트와 손글씨 느낌을 넣는 순간 가장 크게 바뀝니다",
    url: "localhost/handwriting-note",
    prompt: `미리보기 영역을 노트에 손글씨로 쓴 것처럼 바꿔줘.
배경은 연한 줄노트 느낌으로 하고,
글씨는 자연스러운 필기체 느낌이 나게 해줘.
너무 장난스럽지 않고 수학 선생님 해설지처럼 깔끔하게 만들어줘.`,
    talk: "여기서 선생님들이 가장 많이 놀랍니다. 기능은 그대로인데, 갑자기 수업 자료처럼 보이기 시작합니다.",
    render: () => `
      <h3 class="demo-title">손글씨 노트 미리보기</h3>
      <p class="demo-sub">시각 변화가 가장 큰 단계입니다.</p>
      <div class="notebook">
        <span class="card-label">노트 미리보기</span>
        <div class="handwriting">문제: x² - 5x + 6 = 0<br><br>풀이: (x - 2)(x - 3) = 0<br>x - 2 = 0 또는 x - 3 = 0<br><br>정답: x = 2 또는 x = 3</div>
      </div>`
  },
  {
    key: "5단계",
    label: "정답 가리기",
    title: "정답 가리기 모드를 넣으면 학생용 자료가 됩니다",
    url: "localhost/student-mode",
    prompt: `학생용으로 쓸 수 있게 정답 가리기 모드를 추가해줘.
정답 가리기 버튼을 누르면 마지막 정답 영역이 숨겨지게 해줘.`,
    talk: "이제 단순 해설지가 아니라, 학생에게 직접 줄 수 있는 자료가 됩니다.",
    render: () => `
      <h3 class="demo-title">교사용 / 학생용 전환</h3>
      <p class="demo-sub">같은 자료를 수업 상황에 맞게 바꿉니다.</p>
      <div class="toolbar">
        <span class="demo-chip teal">정답 보이기</span>
        <span class="demo-chip coral">정답 가리기</span>
      </div>
      <div class="notebook">
        <div class="handwriting">x² - 5x + 6 = 0<br>= (x - 2)(x - 3)<br><br><span style="background:#0b1320;color:#0b1320;padding:4px 10px;border-radius:4px;">정답: x = 2 또는 x = 3</span></div>
      </div>`
  },
  {
    key: "6단계",
    label: "힌트 버튼",
    title: "힌트 버튼을 넣으면 자기주도 학습 도구가 됩니다",
    url: "localhost/hints",
    prompt: `학생들이 스스로 풀 수 있도록 힌트 1, 힌트 2, 힌트 3 버튼을 만들어줘.
버튼을 누를 때마다 풀이 방향이 조금씩 드러나게 해줘.`,
    talk: "바로 정답을 주는 것이 아니라, 생각할 발판을 줄 수 있습니다. 수학 수업에서 특히 반응이 좋습니다.",
    render: () => `
      <h3 class="demo-title">단계별 힌트</h3>
      <p class="demo-sub">학생이 스스로 풀어볼 여지를 남깁니다.</p>
      <div class="feature-grid">
        <div class="feature-card"><strong>힌트 1</strong>곱해서 6, 더해서 -5가 되는 두 수를 찾습니다.</div>
        <div class="feature-card"><strong>힌트 2</strong>-2와 -3을 떠올려 봅니다.</div>
        <div class="feature-card"><strong>힌트 3</strong>(x - 2)(x - 3) = 0으로 인수분해합니다.</div>
      </div>`
  },
  {
    key: "7단계",
    label: "PNG 저장",
    title: "PNG 저장 기능을 넣으면 진짜 수업 준비 도구가 됩니다",
    url: "localhost/download",
    prompt: `미리보기 영역을 PNG 이미지로 저장할 수 있게 해줘.
버튼 이름은 '손글씨 풀이 저장하기'로 해줘.`,
    talk: "여기서부터는 진짜 수업 준비 도구입니다. 만든 화면을 이미지로 저장해서 바로 학급방이나 클래스룸에 올릴 수 있습니다.",
    render: () => `
      <h3 class="demo-title">이미지로 저장</h3>
      <p class="demo-sub">화면에서 끝나지 않고 자료 파일이 됩니다.</p>
      <div class="notebook">
        <div class="handwriting">x² - 5x + 6 = 0<br>= (x - 2)(x - 3)<br>정답: x = 2 또는 x = 3</div>
      </div>
      <div class="toolbar"><span class="demo-chip coral">손글씨 풀이 저장하기</span></div>`
  },
  {
    key: "8단계",
    label: "모바일 개선",
    title: "학생이 보는 스마트폰 화면까지 요청합니다",
    url: "localhost/mobile",
    prompt: `학생들이 스마트폰으로 봐도 편하게 보이도록 모바일 화면을 개선해줘.
화면이 좁을 때는 입력 영역과 미리보기 영역이 위아래로 배치되게 해줘.
버튼은 손가락으로 누르기 쉽게 크게 만들어줘.`,
    talk: "선생님은 컴퓨터로 만들지만, 학생은 휴대폰으로 볼 가능성이 높습니다. 마지막에는 학생이 보는 화면까지 요청해야 합니다.",
    render: () => `
      <h3 class="demo-title">모바일 화면</h3>
      <p class="demo-sub">학생의 실제 사용 환경에 맞춥니다.</p>
      <div class="mobile-preview">
        <div class="phone-screen">
          <span class="card-label">학생 화면</span>
          <div class="fake-field">문제</div>
          <div class="fake-field">손글씨 풀이 미리보기</div>
          <div class="toolbar"><span class="demo-chip teal">힌트</span><span class="demo-chip coral">저장</span></div>
        </div>
      </div>`
  },
  {
    key: "9단계",
    label: "GitHub 저장",
    title: "내 컴퓨터 안의 사이트를 온라인 보관함에 올립니다",
    url: "github.com/classroom-tool",
    prompt: `지금까지 만든 사이트 파일을 GitHub 저장소에 올리는 과정을 보여줘.
GitHub는 웹사이트 파일을 보관하는 온라인 자료실이라고 설명해줘.`,
    talk: "지금까지 만든 사이트는 아직 내 컴퓨터 안에만 있습니다. 학생들이 보려면 먼저 사이트 파일을 온라인 보관함에 올려야 합니다.",
    render: () => `
      <h3 class="demo-title">GitHub에 보관</h3>
      <p class="demo-sub">GitHub = 온라인 자료 보관함</p>
      <div class="deploy-flow">
        <div class="deploy-card"><strong>내 컴퓨터</strong>내 책상 위 자료</div>
        <div class="deploy-card"><strong>GitHub</strong>온라인 자료 보관함</div>
        <div class="deploy-card"><strong>저장 기록</strong>언제 무엇을 바꿨는지 남김</div>
        <div class="deploy-card"><strong>공유 준비</strong>Render가 가져갈 수 있음</div>
      </div>`
  },
  {
    key: "10단계",
    label: "Render 배포",
    title: "Render가 GitHub 파일을 인터넷 주소로 열어줍니다",
    url: "https://math-handwriting-demo.onrender.com",
    prompt: `GitHub에 올린 사이트를 Render에 연결해서 배포하는 과정을 보여줘.
Render는 GitHub 파일을 실제 인터넷 주소로 열어주는 전시관이라고 설명해줘.`,
    talk: "처음에는 제 컴퓨터 안에서만 열리던 것이, 이제 학생 휴대폰에서도 열립니다. 이 장면이 마지막 한 방입니다.",
    render: () => `
      <h3 class="demo-title">외부 접속 성공</h3>
      <p class="demo-sub">Render = 인터넷 주소를 만들어 주는 전시관</p>
      <div class="deploy-flow">
        <div class="deploy-card"><strong>GitHub</strong>파일 보관</div>
        <div class="deploy-card"><strong>Render</strong>사이트 실행</div>
        <div class="deploy-card"><strong>URL</strong>학생에게 공유</div>
        <div class="deploy-card"><strong>휴대폰</strong>외부에서 접속</div>
      </div>
      <div class="url-banner">https://math-handwriting-demo.onrender.com</div>`
  }
];

let current = 0;

const nav = document.querySelector("#stepNav");
const stageKicker = document.querySelector("#stageKicker");
const stageTitle = document.querySelector("#stageTitle");
const demoUrl = document.querySelector("#demoUrl");
const demoSurface = document.querySelector("#demoSurface");
const promptText = document.querySelector("#promptText");
const talkText = document.querySelector("#talkText");
const counter = document.querySelector("#counter");
const toast = document.querySelector("#toast");

function buildNav() {
  nav.innerHTML = steps.map((step, index) => `
    <button class="step-button" type="button" data-index="${index}">
      <strong>${String(index).padStart(2, "0")}</strong>
      <span>${step.label}<em>${step.key}</em></span>
    </button>
  `).join("");

  nav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    setStep(Number(button.dataset.index));
  });
}

function setStep(index) {
  current = Math.max(0, Math.min(index, steps.length - 1));
  const step = steps[current];
  stageKicker.textContent = `${step.key} · ${step.label}`;
  stageTitle.textContent = step.title;
  demoUrl.textContent = step.url;
  demoSurface.innerHTML = step.render();
  promptText.textContent = step.prompt;
  talkText.textContent = step.talk;
  counter.textContent = `${current} / ${steps.length - 1}`;

  document.querySelectorAll(".step-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.index) === current);
  });
}

async function copy(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1400);
}

document.querySelector("#copyBtn").addEventListener("click", () => copy(steps[current].prompt));
document.querySelector("#copyAllBtn").addEventListener("click", () => {
  const all = steps.map((step, index) => `[${index}. ${step.label}]\n${step.prompt}`).join("\n\n---\n\n");
  copy(all);
});
document.querySelector("#startBtn").addEventListener("click", () => setStep(0));
document.querySelector("#prevBtn").addEventListener("click", () => setStep(current - 1));
document.querySelector("#nextBtn").addEventListener("click", () => setStep(current + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setStep(current + 1);
  if (event.key === "ArrowLeft") setStep(current - 1);
});

buildNav();
setStep(0);
