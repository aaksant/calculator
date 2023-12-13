const lastOperation = document.querySelector('#last-operation');
const currentOperation = document.querySelector('#current-operation');
const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');

const nums = document.querySelectorAll('.num');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const dotButton = document.querySelector('#dot-button');

function appendNum(newNum) {
  if (currentOperation.textContent === '0') {
    currentOperation.textContent = newNum;
  } else {
    currentOperation.textContent += newNum;
  }
}

function appendDot() {
  if (currentOperation.textContent.includes('.')) return;
  currentOperation.textContent += '.'
}

nums.forEach((num) => {
  num.addEventListener('click', () => appendNum(num.textContent));
});

dotButton.addEventListener('click', appendDot);