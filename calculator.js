const container = document.querySelector("#container");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelectorAll(".clear");
const display = document.querySelector("#display");

clear.forEach(element => element.addEventListener('click', event => { 
    console.log(event.target.getAttribute("data-element"));

    // Delete calcObj on clear button
}));

operator.forEach(element => element.addEventListener('click', event => {
        console.log(event.target.getAttribute("data-element"));
}));

operand.forEach(element => element.addEventListener('click', event => {
        console.log(Number(event.target.getAttribute("data-element")));
}));


function operate(arr) {

    switch (arr.operator) {
        case '+':
            add(arr);
            break;
        case '-':
            subtract(arr);
            break;
        case '*': 
            multiply(arr);
            break;
        case '/':
            divide(arr);
            break;
    }
}


function add(arr) {
    let c = arr.op1 + arr.op2;
    arr.result = c;
    display.innerHTML = c;
    return c;
}

function subtract(arr) {
    let c = arr.op1 - arr.op2;
    arr.result = c;
    display.innerHTML = c;
    return c;
}

function multiply(arr) {
    let c = arr.op1 * arr.op2;
    arr.result = c;
    display.innerHTML = c;
    return c;
}

function divide(arr) {
    let c = arr.op1 / arr.op2;
    arr.result = c;
    display.innerHTML = c;
    return c;
}

