const lastOperation = document.querySelector('#last-operation');
const currentOperation = document.querySelector('#current-operation');
const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');

const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const dotButton = document.querySelector('#dot-button');

function appendNum(newNum) {
  if (currentOperation.textContent === '0' || currentOperation.textContent !== null) {
    currentOperation.textContent = newNum;
  } else {
    currentOperation.textContent += newNum;
  }
}

function appendDot() {
  if (currentOperation.textContent.includes('.')) return;
  currentOperation.textContent += '.';
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function setLastOperation(operator) {
  let firstOperand = currentOperation.textContent;
  let currentOperator = operator;
  lastOperation.textContent = `${firstOperand} ${currentOperator}`;
}

nums.forEach((num) => {
  num.addEventListener('click', () => appendNum(num.textContent));
});

operators.forEach((operator) => {
  operator.addEventListener('click', () =>
    setLastOperation(operator.textContent)
  );
});

dotButton.addEventListener('click', appendDot);
