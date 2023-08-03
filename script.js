let numDisplay = ''; 
let numStored = '';
let operator = '';

const calc = document.querySelector('.calculator');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

display.textContent = '';

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        let char = item.textContent;
        if(char >= '0' && char <= '9') {
            if (numDisplay !== '' || char !== '0') {
                numDisplay += char;
                display.textContent = numDisplay;
            }
        } else if (char === 'C') {
            display.textContent = '';
            numDisplay = '';
            numStored = '';
            operator = '';
        } else if (char === '=') {
            let justPressedOp = display.textContent[display.textContent.length - 1] === '+' ||
                display.textContent[display.textContent.length - 1] === '-' ||
                display.textContent[display.textContent.length - 1] === '*' ||
                display.textContent[display.textContent.length - 1] === '/';
            if(operator !== '' && !justPressedOp) {
                display.textContent = operate(operator, parseInt(numStored), parseInt(display.textContent));
                operator = '';
                numDisplay = '';
                numStored = '';
            }
        } else { 
            //Else is any regular operator
            if(numStored === '') {
                //If this is the first operand
                operator = char;
                numStored = display.textContent;
                numDisplay = '';
                display.textContent += char;
            } else {
                //If this isn't the first operand, as in chaining operations
                numStored = operate(operator, parseInt(numStored), parseInt(display.textContent));
                operator = char;
                numDisplay = '';
                display.textContent = numStored + char;
            }
        }
    });
})

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

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*': 
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}