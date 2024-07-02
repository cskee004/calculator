function operate(x, y, operator) {

    switch (operator) {
        case '+':
            add(x, y);
            break;
        case '-':
            subtract(x, y);
            break;
        case '*': 
            multiply(x, y);
            break;
        case '/':
            divide(x, y);
            break;
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

console.log(add(2, 2));
console.log(subtract(3, 2));
console.log(multiply(2, 2));
console.log(divide(10, 2));