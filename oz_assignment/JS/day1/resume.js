// ===== 1. 방문자 인사: 입력값 + localStorage (Storage API) =====
const visitorInput = document.querySelector("#visitor-name");
const visitorBtn = document.querySelector("#visitor-save");
const visitorResult = document.querySelector("#visitor-result");

function showWelcome(name) {
  visitorResult.textContent = "환영합니다, " + name + " 님";
}

// 새로고침해도 유지: 저장된 값이 있으면 바로 표시
const savedName = localStorage.getItem("visitorName");
if (savedName) {
  showWelcome(savedName);
}

visitorBtn.addEventListener("click", function () {
  // 조건문: 빈 값이면 경고 후 종료
  if (visitorInput.value.trim() === "") {
    alert("이름을 입력하세요");
    return;
  }
  localStorage.setItem("visitorName", visitorInput.value.trim());
  showWelcome(visitorInput.value.trim());
});

// ===== 2. 프로젝트 칸 클릭 → 설명 표시 (DOM + 이벤트) =====
const projects = document.querySelectorAll(".project");
const projectInfo = document.querySelector("#project-info");

// 배열: 순서가 중요한 데이터 (본인 프로젝트 설명으로 바꾸세요)
const projectDescriptions = [
  "프로젝트 1 설명을 작성하세요.",
  "프로젝트 2 설명을 작성하세요.",
  "프로젝트 3 설명을 작성하세요.",
  "프로젝트 4 설명을 작성하세요.",
];

projects.forEach((box, i) => {
  box.addEventListener("click", () => {
    projectInfo.textContent = projectDescriptions[i];
  });
});

// ===== 3. 내용 입력 글자 수 실시간 확인 (input 이벤트) =====
const messageInput = document.querySelector("#message");
const messageResult = document.querySelector("#message-result");

function validateMessage() {
  if (messageInput.value.length < 5) {
    messageResult.textContent = "5자 이상 입력하세요.";
    messageResult.style.color = "red";
  } else {
    messageResult.textContent = "좋아요! (" + messageInput.value.length + "자)";
    messageResult.style.color = "blue";
  }
}

messageInput.addEventListener("input", validateMessage);

// ===== 4. 푸터 현재 시각 (Timer API: setInterval) =====
const clock = document.querySelector("#clock");

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString("ko-KR");
}

updateClock();                 // 처음 한 번 바로 표시
setInterval(updateClock, 1000); // 이후 1초마다 갱신
