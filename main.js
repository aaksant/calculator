const lastCalculationScreen = document.querySelector('#last-operation');
const currentCalculationScreen = document.querySelector('#current-operation');
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
let currentOperator = '';

function appendNum(newNum) {
  if (currentCalculationScreen.textContent === '0') {
    currentCalculationScreen.textContent = '';
    currentCalculationScreen.textContent += newNum;
  } else {
    currentCalculationScreen.textContent += newNum;
  }
}

function appendDot() {
  if (currentCalculationScreen.textContent.includes('.')) {
    return;
  } else if (currentCalculationScreen.textContent === '') {
    currentCalculationScreen.textContent += '0.';
  } else {
    currentCalculationScreen.textContent += '.';
  }
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

function setlastCalculationScreen(operator) {
  if (currentOperator !== '=') displayResult();

  firstOperand = currentCalculationScreen.textContent;
  currentOperator = operator;
  if (currentOperator === '.') {
    return;
  } else {
    lastCalculationScreen.textContent = `${firstOperand} ${currentOperator}`;
    currentCalculationScreen.textContent = '';
  }
}

function getResult(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);

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

function round(result) {
  return Math.round(result * 10000) / 10000;
}

function displayResult() {
  if (currentOperator === '') return;
  if (currentCalculationScreen.textContent === '0' && currentOperator === '÷') {
    alert('Cannot divide by 0!');
    return;
  }
  if (currentCalculationScreen.textContent === '') return;

  secondOperand = currentCalculationScreen.textContent;
  lastCalculationScreen.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
  currentCalculationScreen.textContent = round(
    getResult(firstOperand, secondOperand, currentOperator)
  );
  currentOperator = '';
}

function clear() {
  currentCalculationScreen.textContent = '0';
  lastCalculationScreen.textContent = '';
}

function deleteNum() {
  currentCalculationScreen.textContent = currentCalculationScreen.textContent.slice(0, -1);
}

function handleKeyboard(keyboard) {
  if (keyboard.key >= 0 && keyboard.key <= 9) appendNum(keyboard.key);
  if (
    keyboard.key === '+' ||
    keyboard.key === '-' ||
    keyboard.key === 'x' ||
    keyboard.key === '÷'
  )
    setlastCalculationScreen(keyboard.key);
  if (keyboard.key === '.') appendDot();
  if (keyboard.key === '=' || keyboard.key === 'Enter') displayResult();
  if (keyboard.key === 'Backspace') deleteNum();
  if (keyboard.key === 'Escape') clear();
}

nums.forEach((num) => {
  num.addEventListener('click', () => appendNum(num.textContent));
});

operators.forEach((operator) => {
  operator.addEventListener('click', () =>
    setlastCalculationScreen(operator.textContent)
  );
});

dotButton.addEventListener('click', appendDot);

equalsButton.addEventListener('click', displayResult);

clearButton.addEventListener('click', clear);

deleteButton.addEventListener('click', deleteNum);

window.addEventListener('keydown', handleKeyboard);