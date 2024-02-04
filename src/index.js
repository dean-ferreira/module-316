import { Calculator } from './Calculator.js';

// Constants and Variables
const firstRow = document.getElementById('first-row');
const numButtons = document.querySelectorAll('[data-num');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-del]');
const allClearButton = document.querySelector('[data-ac]');
const prevOperandTextElement = document.querySelector('[data-prev-op]');
const currOperandTextElement = document.querySelector('[data-curr-op]');

const calculator = new Calculator(
    prevOperandTextElement,
    currOperandTextElement
);

const changeColorButton = document.createElement('button');
changeColorButton.innerText = 'Color';

firstRow.insertBefore(changeColorButton, firstRow.firstChild);

// Event Listeners
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.selectOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', (button) => {
    calculator.performCalculation();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', (button) => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', (button) => {
    calculator.delete();
    calculator.updateDisplay();
});

changeColorButton.addEventListener('click', (button) => {
    changeColor();
});

// Functions
function changeColor() {
    const display = document.getElementById('display');
    const styles = ['display-light', 'display-dark'];
    var currentClass = display.className;
    var newIndex = (styles.indexOf(currentClass) + 1) % styles.length;
    display.setAttribute('class', styles[newIndex]);
}
