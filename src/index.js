import { Calculator } from './Calculator.js';

// Constants and Variables
const calcBody = document.getElementById('calculator');
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

changeColorButton.innerText = 'Change Color';
calcBody.appendChild(changeColorButton);

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
