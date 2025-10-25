const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
const getUserNumberInput = () => parseInt(userInput.value);

// A helper function that generates and write calculation log
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor.js
};

const add = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
};

const subtract = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
};

const multiply = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
};

const divide = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = parseInt(currentResult / enteredNumber);
  createAndWriteOutput("/", initialResult, enteredNumber);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
