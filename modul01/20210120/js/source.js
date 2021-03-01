var number1;
var number2;
var operation;

function setOperator(sign) {
    document.getElementById("calcOperator").innerHTML = sign;
    operation = sign;
    return operation;
}

function calc(num1, num2, operator) {
    var result;

    switch (operator) {
        case '+': //plus
            result = num1 + num2;
            break;
        case '-': //minus
            result = num1 - num2;
            break;
        case 'x': //multi
            result = num1 * num2;
            break;
        case '/': //div
            result = num1 / num2;
            break;
    }

    document.getElementById("showResult").innerHTML = "El resultado es "+result;
}

function getNumbers() {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    calc(number1, number2, operation);
}

function sumar() {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    var result = number1 + number2;
    
    document.getElementById("showResult").innerHTML = "El resultado es "+result;
}