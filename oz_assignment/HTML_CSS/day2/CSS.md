# Day 2 - CSS 정리

## 1. CSS란?

**CSS(Cascading Style Sheets)** 는 HTML 요소의 **모양과 배치**를 정하는 언어다.

- HTML = 구조(뼈대), CSS = 디자인(꾸미기)
- 할 수 있는 일
  - 글자 색, 크기, 폰트
  - 여백, 정렬, 위치
  - 레이아웃 (Flex, Grid)
  - 반응형 디자인 (화면 크기에 따라 레이아웃이 자동으로 바뀌는 디자인)

기본 문법: `selector { property: value; }`

```css
p {
  color: red;
}
```

---

## 2. CSS 적용 방식 3가지

### (1) Inline CSS (인라인 스타일)
태그의 `style` 속성에 직접 작성한다.

```html
<p style="font-size: x-large; font-weight: bold;">Hello</p>
```

- 장점: 빠르게 한 요소에만 적용 가능
- 단점: 코드가 지저분해지고 재사용이 어려움

### (2) Internal CSS (내부 스타일 시트)
`<head>` 안의 `<style>` 태그에 작성한다.

```html
<head>
  <style>
    p { color: red; }
    header { font-size: x-large; font-weight: bold; }
  </style>
</head>
```

- 장점: 한 문서 안에서 여러 요소에 공통 스타일 적용 가능
- 단점: 다른 HTML 파일에서는 재사용 불가

### (3) External CSS (외부 스타일 시트)
별도의 `.css` 파일을 만들어 `<link>`로 연결한다.

```html
<link rel="stylesheet" href="style.css">
```

- 장점: HTML과 CSS 분리, 여러 페이지에서 재사용, 관리가 쉬움
- 단점: 파일이 하나 더 필요함
- 실무에서 가장 많이 사용하는 방식

| 구분 | 위치 | 적용 범위 | 재사용 |
|------|------|-----------|--------|
| Inline | 태그의 `style` 속성 | 해당 요소 1개 | X |
| Internal | `<head>`의 `<style>` | 해당 HTML 문서 | 문서 내 O |
| External | 별도 `.css` 파일 | 연결한 모든 문서 | O |

---

## 3. CSS Selector (선택자)

어떤 HTML 요소에 스타일을 적용할지 지정하는 규칙이다.

### 기본 선택자
| 선택자 | 예시 | 설명 |
|--------|------|------|
| 전체 | `*` | 모든 요소 |
| 태그 | `div` | 해당 태그 전부 |
| 클래스 | `.box` | `class="box"`인 요소 |
| ID | `#header` | `id="header"`인 요소 (1개) |

### 결합자 (관계) 선택자
| 선택자 | 설명 |
|--------|------|
| `div p` | div 안의 **모든** p (자손, 깊이 상관없음) |
| `div > p` | div의 **바로 아래 자식** p만 |
| `div + p` | div **바로 다음** p 하나 (인접 형제) |
| `div ~ p` | div **뒤에 오는 모든** 형제 p (일반 형제) |

### 속성 선택자
- `a[href]`: href 속성을 가진 a 태그
- `input[type="text"]`: type이 "text"인 input 태그

### 가상 클래스 선택자 (요소의 상태 기준)
- `:hover` 마우스를 올렸을 때
- `:focus` 포커스를 가졌을 때
- `:active` 클릭하고 있는 순간
- `:nth-child(n)` 부모 기준 n번째 자식

### 선택자 우선순위
```
!important > inline style > id(#) > class/속성/가상클래스(.) > 태그 > *
```
- 우선순위가 같으면 **나중에 작성한 코드**가 적용된다.

---

## 4. style 속성

### (1) 텍스트 관련

| 속성 | 설명 | 예시 |
|------|------|------|
| `font-size` | 글자 크기 | `x-large`, `medium`, `16px`, `1.2rem` |
| `font-weight` | 글자 굵기 | `bold`, `normal`, `700` |
| `text-align` | 텍스트 정렬 | `left`, `center`, `right` |
| `font-family` | 글꼴 | `'Times New Roman', serif` |
| `color` | 글자 색 | `red`, `#333` |
| `text-decoration` | 밑줄 등 | `none`, `underline` |

```css
header {
  font-size: x-large;
  font-weight: bold;
  text-align: center;
}
```

`font` 축약형: `font: bold x-large 'Times New Roman', serif;` (순서: weight → size → family, size와 family는 필수)

### (2) 박스 모델 (Box Model)

모든 HTML 요소를 **사각형 박스**로 보고 크기와 여백을 계산하는 규칙이다.

```
┌──────────── margin ────────────┐
│ ┌────────── border ──────────┐ │
│ │ ┌──────── padding ───────┐ │ │
│ │ │        content         │ │ │
│ │ └────────────────────────┘ │ │
│ └────────────────────────────┘ │
└────────────────────────────────┘
```

| 속성 | 설명 |
|------|------|
| `content` | 실제 내용이 들어가는 영역 (`width`, `height`가 가리키는 영역) |
| `padding` | 테두리 **안쪽** 여백 (content와 border 사이) |
| `border` | 테두리 (`2px solid blue`) |
| `margin` | 테두리 **바깥쪽** 여백 (다른 요소와의 간격) |
| `width` / `height` | 가로 / 세로 크기 |
| `box-sizing` | 크기를 계산하는 기준 |

```css
.box {
  margin: 20px;
  border: 5px solid black;
  padding: 50px;
  width: 100px;
  background-color: skyblue;
}
```

#### box-sizing
- `content-box` (기본값): `width`는 **content만의 크기**
  - 실제 가로 = 100(width) + 50×2(padding) + 5×2(border) = **210px**
- `border-box`: `width`에 **padding과 border를 포함**
  - 실제 가로 = 100px (기대한 크기 그대로)

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

---

## 5. 추가로 알아둔 개념

- **Inline vs Block**: Inline(`span`, `a`)은 내용만큼만 차지, Block(`div`, `p`, `h1`)은 한 줄 전체를 차지
- **Flexbox**: `display: flex`로 1차원 배치. `justify-content`(주축), `align-items`(교차축)
- **Grid**: `display: grid`로 2차원(행/열) 레이아웃
- **반응형 디자인**: 유연한 단위(`%`, `rem`) + Media Query

```css
@media (max-width: 600px) {
  .container { flex-direction: column; }
}
```
