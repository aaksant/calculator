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
const equalsButton = document.querySelector('#equals-button');

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

function appendNum(newNum) {
  if (currentOperation.textContent === '0') {
    currentOperation.textContent = '';
    currentOperation.textContent += newNum;
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
  if (b === 0) {
    return null;
  } else {
    return a / b;
  }
}

function setLastOperation(operator) {
  firstOperand = currentOperation.textContent;
  currentOperator = operator;
  if (currentOperator === '.') {
    return;
  } else {
    lastOperation.textContent = `${firstOperand} ${currentOperator}`;
    currentOperation.textContent = '';
  }
}

function getResult(a, b, operator) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
    default:
      return null;
  }
}

function evaluate() {
  secondOperand = currentOperation.textContent;
  lastOperation.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
  currentOperation.textContent = getResult(firstOperand, secondOperand, currentOperator);
  currentOperator = null;
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

equalsButton.addEventListener('click', evaluate);