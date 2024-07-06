const container = document.querySelector("#container");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelectorAll(".clear");
const display = document.querySelector("#display");
const equal = document.querySelectorAll(".equal")

let calcArr = [];

//----------------------------------------------------------------------------->
clear.forEach(element => element.addEventListener('click', event => { 
    // console.log(event.target.getAttribute("data-element"));
    window.location.reload();
}));
//----------------------------------------------------------------------------->
equal.forEach(element => element.addEventListener('click', event => { 
    // console.log(event.target.getAttribute("data-element"));
    operate(calcArr);
}));
//----------------------------------------------------------------------------->
operator.forEach(element => element.addEventListener('click', event => {
    // console.log(event.target.getAttribute("data-element"));
    let input = event.target.getAttribute("data-element");
    calcArr.push(input);
}));
//----------------------------------------------------------------------------->
operand.forEach(element => element.addEventListener('click', event => {
    // console.log(Number(event.target.getAttribute("data-element")));
    let input = Number(event.target.getAttribute("data-element"));
    calcArr.push(input);
    
}));
//----------------------------------------------------------------------------->
//calcArr[i] == "+" || calcArr[i] == "-" || calcArr[i] == "*" || calcArr[i] == "/"


function operate(calcArr) {

        let op = '';
        let op0 = 0;
        for (let i = 0; i < calcArr.length; ++i) {
            if (calcArr[i] == "+" || calcArr[i] == "-" || calcArr[i] == "*" || calcArr[i] == "/") {
                op = calcArr[i];
            }
            else {
                op0 += calcArr[i];
            }
        }

        console.log(op);
        console.log(op0);
}
//----------------------------------------------------------------------------->


function add(arr) {
    let c = arr.op1 + arr.op2;
    arr.result = c;
    display.innerHTML = c;
    return c;
}
//----------------------------------------------------------------------------->

function subtract(arr) {
    let c = arr.op1 - arr.op2;
    arr.result = c;
    display.innerHTML = c;
    return c;
}
//----------------------------------------------------------------------------->

function multiply(arr) {
    let c = arr.op1 * arr.op2;
    arr.result = c;
    display.innerHTML = c;
    return c;
}
//----------------------------------------------------------------------------->

function divide(arr) {
    let c = arr.op1 / arr.op2;
    arr.result = c;
    display.innerHTML = c;
    return c;
}
//----------------------------------------------------------------------------->

