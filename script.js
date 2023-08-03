let number1 = ''; 
let number2 = '';
let operator = '';

const calc = document.querySelector('.calculator');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

display.textContent = ''; //Initialize display

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        if(item.textContent >= '0' && item.textContent <= '9') {
            number1 += item.textContent;
            display.textContent = number1;
        } else if (item.textContent === 'C') {
            display.textContent = '';
            number1 = '';
            number2 = '';
            operator = '';
        } else if (item.textContent === '=') {
            
        } else { 
            //Else is any regular operator

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