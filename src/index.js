import { Calculator } from './Calculator.js';

// Constants and Variables
const firstRow = window.document.getElementById('first-row');
const numButtons = document.querySelectorAll('[data-num');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-del]');
const allClearButton = document.querySelector('[data-ac]');
const prevOperandTextElement = document.querySelector('[data-prev-op]');
const currOperandTextElement = document.querySelector('[data-curr-op]');

const fileNameInput = document.getElementById('file-name');
const exportForm = document.getElementById('export');
const resetHistoryButton = document.getElementById('reset');

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

exportForm.addEventListener('submit', function (event) {
    const fileName = fileNameInput.value;
    if (fileName.length < 4) {
        event.preventDefault();
        window.alert('Filename must be more than 4 characters');
    } else if (calculator.history.length === 0) {
        event.preventDefault();
        window.alert('History is empty');
    } else {
        event.preventDefault();
        exportFile();
    }
});

resetHistoryButton.addEventListener('click', (button) => {
    calculator.clearHistory();
});

// Functions
function changeColor() {
    const display = document.getElementById('display');
    const styles = ['display-light', 'display-dark'];
    var currentClass = display.className;
    var newIndex = (styles.indexOf(currentClass) + 1) % styles.length;
    display.setAttribute('class', styles[newIndex]);
}

function exportFile() {
    var fileName = document.getElementById('file-name').value.trim();
    fileName += '.txt';
    var content = calculator.exportHistory(); // Content of the file
    var blob = new Blob([content], { type: 'text/plain' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
