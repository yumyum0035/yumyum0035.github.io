var number1;
var number2;

function sumar() {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    var result = number1 + number2;
    
    document.getElementById("showResult").innerHTML = "El resultado es "+result;
}