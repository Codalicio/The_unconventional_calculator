const defaultResult = 0;

const add = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

let currentResult = defaultResult;

currentResult = add(9, 7);

outputResult(currentResult, "");
