// 웹 브라우저 Console 4칙연산 계산기
// 사용법: 콘솔에 이 코드를 붙여넣은 뒤 calculate("1 + 2 * 3") 처럼 호출하세요.

// 1단계: 문자열을 숫자/연산자 토큰 배열로 분리
function tokenize(expression) {
  const tokens = [];
  let numberBuffer = "";

  for (const ch of expression.replace(/\s+/g, "")) {
    if ((ch >= "0" && ch <= "9") || ch === ".") {
      numberBuffer += ch;
    } else if ("+-*/".includes(ch)) {
      if (numberBuffer !== "") {
        tokens.push(Number(numberBuffer));
        numberBuffer = "";
      }
      tokens.push(ch);
    } else {
      throw new Error(`허용되지 않는 문자입니다: "${ch}"`);
    }
  }
  if (numberBuffer !== "") tokens.push(Number(numberBuffer));

  return tokens;
}

// 2단계: 입력 형식 검사 (숫자, 연산자, 숫자, ... 순서여야 함)
function validate(tokens) {
  if (tokens.length === 0) throw new Error("계산식이 비어 있습니다.");
  if (tokens.length % 2 === 0) throw new Error("계산식이 올바르지 않습니다.");

  tokens.forEach((token, i) => {
    const shouldBeNumber = i % 2 === 0;
    if (shouldBeNumber && (typeof token !== "number" || Number.isNaN(token))) {
      throw new Error("숫자가 와야 할 자리가 올바르지 않습니다.");
    }
    if (!shouldBeNumber && typeof token !== "string") {
      throw new Error("연산자가 와야 할 자리가 올바르지 않습니다.");
    }
  });
}

// 3단계: *, / 를 먼저 계산 (우선순위 적용)
function calculateMulDiv(tokens) {
  const result = [tokens[0]];

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const next = tokens[i + 1];

    if (operator === "*") {
      result.push(result.pop() * next);
    } else if (operator === "/") {
      if (next === 0) throw new Error("0으로 나눌 수 없습니다.");
      result.push(result.pop() / next);
    } else {
      result.push(operator, next); // +, - 는 나중에 계산
    }
  }
  return result;
}

// 4단계: 남은 +, - 를 왼쪽부터 계산
function calculateAddSub(tokens) {
  let total = tokens[0];

  for (let i = 1; i < tokens.length; i += 2) {
    total = tokens[i] === "+" ? total + tokens[i + 1] : total - tokens[i + 1];
  }
  return total;
}

function calculate(expression) {
  try {
    const tokens = tokenize(expression);
    validate(tokens);
    const result = calculateAddSub(calculateMulDiv(tokens));
    // 0.1 + 0.2 같은 부동소수점 오차 보정
    const rounded = Number(result.toFixed(10));
    console.log(`${expression} = ${rounded}`);
    return rounded;
  } catch (error) {
    console.error(`오류: ${error.message}`);
  }
}

// 입력창(prompt)에 계산식을 넣으면 계속 계산해 주는 계산기
// 취소를 누르거나 빈 칸으로 확인하면 종료됩니다.
function startCalculator() {
  while (true) {
    const input = prompt("계산식을 입력하세요 (종료: 취소 또는 빈 칸)\n예) 1 + 2 * 3");
    if (input === null || input.trim() === "") {
      console.log("계산기를 종료합니다. 다시 시작하려면 startCalculator() 를 입력하세요.");
      break;
    }
    calculate(input);
  }
}

// 테스트 예시 (Node.js에서 실행할 때 확인용)
function runTests() {
  calculate("1 + 2 * 3");                 // 7
  calculate("10 - 4 / 2 + 3 * 5");        // 23
  calculate("100 / 4 / 5 * 2 - 1 + 8");   // 17
  calculate("2 * 3 * 4 + 5 * 6 - 7 / 7"); // 53
  calculate("0.1 + 0.2");                 // 0.3
  calculate("5 / 0");                     // 오류
}

// 브라우저 콘솔에서는 입력창이 뜨고, Node.js에서는 테스트가 실행됩니다.
if (typeof prompt === "function") {
  startCalculator();
} else {
  runTests();
}