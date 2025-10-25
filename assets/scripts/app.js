const defaultResult = 0;

const add = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

const additionResult = add(4, 3);
console.log(additionResult);

let currentResult = defaultResult;

currentResult = add(9, 7);

let calculationDescription = `(${defaultResult} + 10)

+ 20 / 2 - 10`;

outputResult(currentResult, calculationDescription);
