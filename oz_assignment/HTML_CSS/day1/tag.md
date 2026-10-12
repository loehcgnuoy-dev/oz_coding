# Day 1 - HTML 태그 정리

> HTML(HyperText Markup Language): 웹 페이지의 **구조(뼈대)** 를 정의하는 언어

---

## 1. 태그(Tag)란?

- `<태그이름>` 형태로 작성하며, 각 태그는 요소의 의미와 역할을 가진다.
- 대부분 **여는 태그 + 닫는 태그**(`<p>...</p>`)로 구성된다.
- 태그 안에 다른 태그를 넣을 수 있고(중첩), 이 구조로 문서의 계층이 만들어진다.

```html
<body>
  <h1>제목</h1>
  <p>내용</p>
</body>
```

---

## 2. HTML 문서 기본 구조

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    Hello, HTML
  </body>
</html>
```

| 태그 | 설명 |
|------|------|
| `<!DOCTYPE html>` | 이 문서가 HTML5 문서임을 브라우저에 알리는 선언 |
| `<html>` | 문서의 최상위 태그. 모든 요소가 이 안에 포함됨 |
| `<head>` | 화면에 직접 보이지 않는 설정 영역 (제목, 문자 인코딩, CSS, 메타 정보 등) |
| `<title>` | 브라우저 탭에 표시되는 제목. 검색 결과 제목으로도 사용됨 |
| `<body>` | 브라우저 화면에 실제로 보이는 내용 영역 (텍스트, 이미지, 버튼 등) |

---

## 3. 텍스트 관련 태그

### `<p>` - 문단 (paragraph)
- 문단을 나타낸다. 줄바꿈만으로는 구분되지 않으므로 문단마다 `<p>`로 감싼다.

```html
<p>Hello, World!</p>
<p>Hello, World!</p>
```

### `<h1>` ~ `<h6>` - 제목 (heading)
- 숫자가 작을수록 큰 제목(중요도가 높음). `h1`이 가장 크고 `h6`이 가장 작다.

```html
<h1>One</h1>
<h2>Two</h2>
<h3>Three</h3>
```

### `<hr>` - 구분선
- 가로 줄을 그어 내용을 구분한다. 닫는 태그가 없다.

```html
<hr>
```

---

## 4. 목록 태그

### `<ul>` + `<li>` - 순서 없는 목록 (unordered list)
```html
<ul>
  <li>foo</li>
  <li>bar</li>
  <li>baz</li>
</ul>
```

### `<ol>` + `<li>` - 순서 있는 목록 (ordered list)
- 항목 앞에 1, 2, 3 … 번호가 자동으로 붙는다.

```html
<ol>
  <li>foo</li>
  <li>bar</li>
  <li>baz</li>
</ol>
```

- `<li>`: 목록의 각 항목 (list item). `ul`/`ol` 안에서 사용한다.

---

## 5. 표 태그

| 태그 | 설명 |
|------|------|
| `<table>` | 표 전체 |
| `<thead>` | 표의 머리글 영역 |
| `<tbody>` | 표의 본문 영역 |
| `<tr>` | 행 (table row) |
| `<th>` | 머리글 칸 (table header) |
| `<td>` | 데이터 칸 (table data) |

```html
<table border="1">
  <thead>
    <tr>
      <th>이름</th>
      <th>나이</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>alex</td>
      <td>20</td>
    </tr>
    <tr>
      <td>bob</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

---

## 6. 이미지 / 링크 태그

### `<img>` - 이미지
- 닫는 태그가 없다.
- `src`: 이미지 경로, `alt`: 이미지를 못 불러올 때 / 스크린리더용 대체 설명

```html
<img src="pizza.jpeg" alt="pizza">
<img src="hamburger.jpeg" alt="hamburger">
```

### `<a>` - 링크 (anchor)
- `href`: 이동할 주소

```html
Visit <a href="https://google.com">Google</a>
```

---

## 7. 입력 관련 태그 (form)

### `<form>` - 입력 양식
- 사용자가 입력한 데이터를 서버로 전송하는 영역.
- `action`: 데이터를 보낼 주소
- `method`: 전송 방식
  - `get`: 주소(URL)에 데이터를 붙여서 전송 (검색 등)
  - `post`: 본문(body)에 데이터를 담아 전송 (로그인, 회원가입 등)

```html
<!-- GET -->
<form action="https://google.com/search" method="get">
  <input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">
  <button>입력</button>
</form>

<!-- POST -->
<form action="https://httpbin.org/post" method="post">
  <input type="text" placeholder="Username" name="username" autofocus autocomplete="off">
  <button>전송</button>
</form>
```

### `<input>` - 입력 칸
- 닫는 태그가 없다. `type`에 따라 모양/동작이 달라진다.

| 속성 | 설명 |
|------|------|
| `type` | 입력 종류 (`text`, `email`, `search` 등) |
| `name` | 서버로 전송될 때의 이름 |
| `placeholder` | 입력 전에 흐리게 보이는 안내 문구 |
| `required` | 필수 입력 |
| `autofocus` | 페이지 로딩 시 자동 포커스 |
| `autocomplete="off"` | 자동완성 끄기 |
| `pattern` | 정규식으로 입력 형식 검사 |
| `title` | 형식이 틀렸을 때 보여줄 안내 문구 |

### `<label>` - 입력 칸의 이름표
- `for`에 `input`의 `id`를 적어 서로 연결한다. (라벨을 클릭하면 해당 입력 칸에 포커스)

### `<button>` - 버튼
- `type="submit"`이면 form을 전송한다.

### 회원가입 폼 예시 (정규식 적용)
```html
<form>
  <label for="email">Email</label>
  <input id="email" type="email" required placeholder="example@email.com">
  <br>
  <label for="phone">Phone</label>
  <input
    id="phone" type="text" required
    placeholder="010-1234-5678"
    pattern="010-[0-9]{4}-[0-9]{4}"
    title="010-1234-5678 형식으로 입력하세요"
  >
  <br>
  <button type="submit">Submit</button>
</form>
```

> **정규식(regex)** 기초: `.` 아무 문자 1개 / `*` 0번 이상 / `+` 1번 이상 / `?` 0 또는 1번 / `{n}` n번 반복 / `[]` 문자 집합 / `0-9` 0부터 9까지 / `^` 시작 / `$` 끝

---

## 8. 묶음 / 의미 태그

### `<div>` - 단순 묶음
- 의미 없이 요소를 묶는 블록 태그. 주로 `class`, `id`와 함께 스타일을 적용하기 위해 사용한다.

```html
<div class="intro">
  <h1>What is HTML?</h1>
  <p>HTML is Hypertext Markup Language</p>
</div>
```

### Semantic 태그 - 태그 자체에 '의미'를 담기
| 태그 | 의미 |
|------|------|
| `<header>` | 상단 영역 |
| `<main>` | 핵심 콘텐츠 |
| `<footer>` | 하단 정보 |
| `<div>` | 의미 없음 (단순 묶음) |
| `<p>` | 문단 |

---

## 9. HTML 속성(Attribute)

태그에 추가 정보나 동작을 지정한다. 형태: `<태그이름 속성="값">`

- **여는 태그에만** 작성한다.
- 태그마다 사용 가능한 속성이 다르다.
- 한 태그에 여러 속성을 쓸 수 있다.

```html
<a href="https://example.com">링크</a>
<img src="image.png" alt="이미지 설명">
<p class="text">문단</p>
```

### id vs class
| 구분 | id | class |
|------|----|-------|
| 의미 | 페이지에서 **유일한** 식별자 | 공통 특징을 가진 요소들을 **묶는** 이름 |
| 중복 | 한 페이지에서 한 요소에만 사용 | 여러 요소에 반복 사용 가능 |
| CSS | `#id` | `.class` |

```html
<div id="header"></div>   <!-- O -->
<p class="text">Hello</p>
<p class="text">World</p>
```

---

## 10. 브라우저가 HTML을 표시하는 과정 & DOM

1. 브라우저가 서버에 HTML 요청
2. 서버가 HTML 문서 응답
3. 브라우저가 HTML을 해석(parsing)
4. 화면 구조(DOM) 생성
5. CSS 적용 → 화면 표시

**DOM(Document Object Model)**: 브라우저가 HTML을 해석해 만든 트리 구조의 객체. (HTML = 설계도, DOM = 브라우저 안의 실제 구조)

```
document
 └─ html
     ├─ head
     │   └─ title
     │       └─ "My Page"
     └─ body
         └─ "Hello, HTML"
```

---

## 11. 한눈에 보는 태그 요약

| 태그 | 용도 | 닫는 태그 |
|------|------|-----------|
| `<html>` | 문서 최상위 | O |
| `<head>` | 설정 영역 | O |
| `<title>` | 탭 제목 | O |
| `<body>` | 화면 표시 영역 | O |
| `<p>` | 문단 | O |
| `<h1>`~`<h6>` | 제목 | O |
| `<hr>` | 구분선 | X |
| `<ul>` / `<ol>` | 순서 없는 / 있는 목록 | O |
| `<li>` | 목록 항목 | O |
| `<table>` `<thead>` `<tbody>` `<tr>` `<th>` `<td>` | 표 | O |
| `<img>` | 이미지 | X |
| `<a>` | 링크 | O |
| `<form>` | 입력 양식 | O |
| `<input>` | 입력 칸 | X |
| `<label>` | 입력 칸 이름표 | O |
| `<button>` | 버튼 | O |
| `<div>` | 단순 묶음 | O |
| `<header>` `<main>` `<footer>` | 의미 있는 영역 | O |
