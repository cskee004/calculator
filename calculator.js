const container = document.querySelector("#container");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelectorAll(".clear");
const display = document.querySelector("#display");
const equal = document.querySelectorAll(".equal")

let calcArr = [];

//----------------------------------------------------------------------------->
clear.forEach(element => element.addEventListener('click', event => { 
    window.location.reload();
}));
//----------------------------------------------------------------------------->
equal.forEach(element => element.addEventListener('click', event => { 
    operate(calcArr);
}));
//----------------------------------------------------------------------------->
operator.forEach(element => element.addEventListener('click', event => {
    let input = event.target.getAttribute("data-element");
    display.innerHTML = input;
    calcArr.push(input);
}));
//----------------------------------------------------------------------------->
operand.forEach(element => element.addEventListener('click', event => {
    let input = Number(event.target.getAttribute("data-element"));
    display.innerHTML = input;
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
                op0 = tempValue;
                tempValue = 0;
            }
            else {
                
                tempValue += calcArr[i];
            }
        
            op1 = tempValue;
        }
        
        solve(op0, op, op1);
}
//----------------------------------------------------------------------------->
function solve(op0, op, op1) {
    if (op == '/' && op1 == 0){
        display.innerHTML = "LOL"
        return;
    }
    else {
        switch (op) {
            case '+':
                console.log(add(op0, op1));
                display.innerHTML = add(op0, op1);
                break;
            case '-':
                console.log(subtract(op0, op1));
                display.innerHTML = subtract(op0, op1);
                break;
            case '*':
                console.log(multiply(op0, op1));
                display.innerHTML = multiply(op0, op1);
                break;
            case "/": 
                console.log(divide(op0, op1));
                display.innerHTML = divide(op0, op1);
                break;
        }
    }
}
//----------------------------------------------------------------------------->
function add(op0, op1) {
    let c = op0 + op1;
    return c;
}
//----------------------------------------------------------------------------->
function subtract(op0, op1) {
    let c = op0 - op1;
    return c;
}
//----------------------------------------------------------------------------->
function multiply(op0, op1) {
    let c = op0 * op1;
    return c;
}
//----------------------------------------------------------------------------->
function divide(op0, op1) {
    let c = op0 / op1;
    return c;
}
//----------------------------------------------------------------------------->

