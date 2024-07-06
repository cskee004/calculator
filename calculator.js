const container = document.querySelector("#container");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelectorAll(".clear");
const display = document.querySelector("#display");
const equal = document.querySelectorAll(".equal")

let calcArr = [2, 2, 2, '+', 2, 2, 2];

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

function operate(calcArr) {

        let op = '';
        let op0 = 0;
        let op1 = 0;
        let tempValue = 0;
        for (let i = 0; i < calcArr.length; ++i) {
            if (typeof calcArr[i] !== 'number') {
                op = calcArr[i]; 
                // Encounted an operator, therefore the current value of op0 represents first operand.  
                // Reset tempvalue to 0 for the next operand value.
                op0 = tempValue;
                tempValue = 0;
            }
            else {
                tempValue += calcArr[i];
            }
        
            op1 = tempValue;
        }
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

