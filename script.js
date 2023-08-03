let number1, number2, operator;

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
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}