# JavaScript Day 1 정리

## 1. JavaScript란?

웹 브라우저에서 동작하는 프로그래밍 언어. 버튼 클릭, 입력 처리, 화면 변경을 담당한다.

| 구분 | 역할 |
|------|------|
| HTML | 구조 |
| CSS | 디자인 |
| JS | 동작 |

---

## 2. 실행 방법 4가지

1. **브라우저 개발자 도구(Console)**: 즉시 실행, 문법 연습·값 확인·에러 확인용
   ```js
   console.log(1 + 2);
   ```
2. **`<script>` 태그**: HTML 안에서 직접 작성
   ```html
   <script>
     console.log("Hello");
   </script>
   ```
3. **JS 파일 분리**
   ```html
   <script src="app.js"></script>
   ```
4. **Node.js**: 브라우저 없이 터미널에서 실행
   ```bash
   node app.js
   ```
   - 설치 확인: `node -v`, `npm -v` (npm은 Node.js용 패키지 관리자)

---

## 3. 변수와 자료형

### 변수: 값을 저장하는 공간
```js
let age = 20;          // 값 변경 가능
const username = "Alex"; // 값 변경 불가 (기본 권장)
```

### 자료형
| 자료형 | 설명 | 예시 |
|--------|------|------|
| number | 정수/실수 구분 없이 모두 number | `10`, `3.14` |
| string | 따옴표로 감싼 문자열 | `"Alex"`, `'Hello'` |
| boolean | 참/거짓 | `true`, `false` |
| null | 의도적으로 비어 있음 (개발자가 직접 설정) | `let a = null;` |
| undefined | 아직 값이 할당되지 않음 (자동 설정) | `let b;` |

- `typeof`로 자료형 확인: `typeof 10` → `"number"`
- `typeof null`은 `"object"` (JS의 오래된 특징)
- `null == undefined`는 `true`, `null === undefined`는 `false`

---

## 4. 연산자

```js
// 산술
10 + 3; 10 - 3; 10 * 3; 10 / 3;

// 비교 (결과는 boolean)
10 > 5; 10 <= 9;

// 동등 / 일치
10 == "10";   // true  (값만 비교, 타입 변환 발생)
10 === "10";  // false (값 + 타입 비교, 권장)

// 논리
age >= 19 && hasId;  // AND
age < 19 || hasId;   // OR
!hasId;              // NOT

// 문자열 연결
"Alex" + " " + "Kim";
```

### JavaScript vs. Python (주의)
- `"10" + 1` → JS는 자동 문자열 변환으로 `"101"`, Python은 에러
- 그래서 비교할 때는 `===`를 쓰는 것이 안전하다.

---

## 5. 조건문 (if / else)

```js
let age = 20;
if (age >= 19) {
  console.log("성인");
} else {
  console.log("미성년자");
}
```

- 조건식 결과는 boolean으로 평가되며, 값 자체도 조건식에 쓸 수 있다 (truthy / falsy).
- **falsy 값 (6개)**: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- falsy 외에는 모두 **truthy** (빈 배열 `[]`, 빈 객체 `{}`, 문자열 `"0"`도 truthy)
- `{}` 블록 단위로 실행 범위가 결정되고, `else`는 선택 사항이다.

### 실습: 최종 합격 판정
```js
let score = 88;
let attendance = 75;
let submitted = true;
if (submitted && ((score >= 70 && attendance >= 80) || score >= 90)) {
  console.log("최종 합격");
} else {
  console.log("불합격");
}
```

---

## 6. 반복문

### for
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### while
```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

- 조건이 false가 되면 종료되고, 무한 루프를 주의해야 한다.
- 반복 횟수가 정해져 있으면 `for`를 권장한다.

---

## 7. 배열 (Array)

여러 값을 하나로 묶은 자료형. 순서(index)가 있고, 서로 다른 타입을 담을 수 있다.

```js
let numbers = [10, 20, 30];
console.log(numbers[0]);     // 10
console.log(numbers.at(-1)); // 30 (마지막 요소)
console.log(numbers[3]);     // undefined
```

### 배열 순회 방법
```js
// for...of
for (const score of scores) { console.log(score); }

// entries (인덱스 + 값)
for (const [i, score] of scores.entries()) { console.log(i, score); }

// for + index
for (let i = 0; i < scores.length; i++) { console.log(scores[i]); }

// forEach (break / continue 불가)
scores.forEach(score => { console.log(score); });
```

---

## 8. 객체 (Object)와 맵 (Map)

### 객체: 이름(key)으로 값을 묶음
```js
let user = { name: "Alex", age: 20 };
console.log(user.name);
console.log(user["age"]);

for (const key in user) {
  console.log(key, user[key]);
}
```

### 맵(Map)
```js
const map = new Map();
map.set("name", "Alex");
console.log(map.get("name"));
console.log(map.size);

for (const [key, value] of map) { console.log(key, value); }
```

| 구분 | 설명 |
|------|------|
| 배열 | 순서가 중요한 데이터 |
| 객체 | 의미 있는 이름이 중요한 데이터 |
| Map | 모든 타입을 key로 쓸 수 있고, 반복 처리에 유리 |

---

## 9. 함수 (Function)

코드를 묶어서 재사용한다. (입력 → 처리 → 출력)

```js
function add(a, b) {
  return a + b;
}
console.log(add(3, 5));
```

- 함수는 **호출해야** 실행된다.
- `return`은 결과를 반환하고 함수를 종료한다.
- 매개변수는 함수 내부에서만 사용한다.

### 함수를 값처럼 다루기
```js
const f = sayHello;  // 변수에 할당
f();

function run(fn) { fn(); }
run(sayHello);       // 함수를 인자로 전달
```

- `run(sayHi)`는 함수 **전달**, `run(sayHi())`는 함수 **실행 결과** 전달이므로 다르다. (후자는 `fn`이 `undefined`가 되어 에러)

### 화살표 함수
```js
const add = (a, b) => a + b;

button.addEventListener("click", () => console.log("클릭됨"));
```
- `function` 대신 `=>`를 쓰며, 콜백 함수와 이벤트 리스너에 주로 사용한다.

### 호이스팅 (Hoisting)
코드 실행 전에 선언(변수·함수)을 먼저 처리하는 동작. 함수가 호출보다 아래에 선언되어 있어도 실행되는 이유이다.

---

## 10. DOM과 이벤트

### DOM이란?
Document Object Model. HTML 문서를 JavaScript가 다룰 수 있게 만든 객체(트리) 구조이다. JS는 HTML을 직접 수정하는 것이 아니라 **DOM 객체를 조작**해서 화면을 바꾼다.

### DOM 선택
```js
document.getElementById("text");
document.querySelector(".item");        // 첫 번째 1개 (없으면 null)
document.querySelectorAll(".item");     // 여러 개 (NodeList)
```

### 내용 / 스타일 / 속성 변경
```js
el.textContent = "Hello JavaScript";   // 텍스트만 변경 (innerHTML은 HTML 포함)
el.style.color = "red";
el.style.fontSize = "20px";
link.href = "https://google.com";
```

### 요소 만들기
```js
const p = document.createElement("p");
p.textContent = "새 문단";
document.body.appendChild(p);
```

### 이벤트와 이벤트 리스너
이벤트는 웹 페이지에서 발생하는 모든 동작이나 상태 변화이다.

- 사용자 행동: `click`, `input`, `keydown`, `keyup`, `scroll`, `mouseover`, `mouseout`
- 브라우저 동작: `load`, `DOMContentLoaded`, `resize`

```js
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log("버튼 클릭됨");
});
```
- 사용자의 행동을 감지해 상호작용을 만들고, 정적인 페이지를 동적인 웹으로 바꾼다.

### 입력값 처리 + 조건문
```js
button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("이름을 입력하세요");
    return;
  }
  result.textContent = "환영합니다, " + input.value + " 님";
});
```

### 실습: 종합 (합격 판정)
```js
button.addEventListener("click", function () {
  const score = Number(scoreInput.value);
  result.textContent = score >= 60 ? "합격" : "불합격";
});
```

---

## 11. Web API

브라우저가 JavaScript에 제공하는 기능 모음이다. (JS 언어 자체가 아니라 브라우저 환경의 API)

| 종류 | 예시 |
|------|------|
| DOM API | `querySelector`, `textContent` |
| Event API | `addEventListener` |
| Timer API | `setTimeout`, `setInterval` |
| Storage API | `localStorage`, `sessionStorage` |
| Fetch API | 서버와 통신 (`fetch`) |

### Timer API
```js
setTimeout(function () { console.log("3초 후 실행"); }, 3000);   // 한 번 실행

const timerId = setInterval(function () { console.log("1초마다"); }, 1000); // 반복
clearInterval(timerId);  // timerId로 타이머 멈추기
```
- `timerId`는 타이머를 구분하는 번호로, 타이머를 멈추거나 버튼을 여러 번 눌러도 하나만 실행되게 할 때 쓴다.

### Storage API
브라우저에 key-value(문자열)로 저장하고, 새로고침해도 유지된다.

| 구분 | localStorage | sessionStorage |
|------|--------------|----------------|
| 유지 | 영구 (브라우저를 껐다 켜도) | 탭/브라우저 닫으면 삭제 |
| 용도 | 로그인 정보, 설정값 | 임시 데이터 |

```js
localStorage.setItem("name", "Alex");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();

// 객체는 문자열로 바꿔서 저장
localStorage.setItem("user", JSON.stringify({ name: "Alex", age: 20 }));
const savedUser = JSON.parse(localStorage.getItem("user"));
```

### Fetch API
서버에 HTTP 요청을 보내고 응답을 받는다. **비동기**로 동작하므로, 오래 걸리는 작업을 기다리지 않고 다음 코드를 먼저 실행하고 응답이 오면 그때 처리한다.

```js
// GET
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: input.value }),
})
  .then(res => res.json())
  .then(data => { result.textContent = JSON.stringify(data, null, 2); });
```
1. `fetch(url)`: 요청 보냄 → 2. `response`: 서버 응답 → 3. `response.json()`: JSON 파싱 → 4. `data`: 실제 데이터

---

## 12. 이력서에 적용한 JS (resume.js)

| 기능 | 사용한 개념 |
|------|-------------|
| 방문자 이름 저장 후 인사 | `querySelector`, `addEventListener`, 조건문, `localStorage` |
| 프로젝트 칸 클릭 시 설명 표시 | `querySelectorAll`, `forEach`, 배열, 화살표 함수 |
| 내용 글자 수 실시간 확인 | `input` 이벤트, `style` 변경 |
| 푸터 현재 시각 | `setInterval` (Timer API) |
