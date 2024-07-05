// Goal: Add an event listener to the button types. DONE
// Goal: Create an object that holds two operands and one operator. DONE
// Goal: Create a function operate that takes the calculation object and then calls the function.
// Goal: Wrap event listeners into a function



const container = document.querySelector("#container");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelectorAll(".clear");
const display = document.querySelector("#display");

function calcObj(op1, op2, operator) {
    this.op1 = op1;
    this.op2 = op2;
    this.operator = operator;
    result = 0;
}

clear.forEach(element => element.addEventListener('click', event => { 
    console.log(event.target.getAttribute("data-element"));

    // Delete calcObj on clear button
}));

newFunction();

function newFunction() {
    operator.forEach(element => element.addEventListener('click', event => {
        console.log(event.target.getAttribute("data-element"));
    }));

    operand.forEach(element => element.addEventListener('click', event => {
        console.log(Number(event.target.getAttribute("data-element")));
    }));
}

function setUp() {
    let test = new calcObj(1, 2, '+');
    operate(test);
}

setUp();

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

