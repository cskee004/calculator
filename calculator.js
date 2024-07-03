const container = document.querySelector("#container");
const display = document.querySelector("#display");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelector(".operator");

operand.forEach(element => element.addEventListener('click', event => {
    console.log(event.target.getAttribute("data-el"));
  }));













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