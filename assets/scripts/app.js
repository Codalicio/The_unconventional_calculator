const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

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
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  const logs = {
    operation: "ADD",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logs);
  console.log(logEntries);
};

const subtract = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  const logs = {
    operation: "SUBTRACT",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logs);
  console.log(logEntries);
};

const multiply = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  const logs = {
    operation: "MULTIPLY",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logs);
  console.log(logEntries);
};

const divide = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = parseFloat(currentResult / enteredNumber).toFixed(2);
  createAndWriteOutput("/", initialResult, enteredNumber);
  const logs = {
    operation: "DIVIDE",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logs);
  console.log(logEntries);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
