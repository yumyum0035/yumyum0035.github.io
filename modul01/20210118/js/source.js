var carValue = 60000;

/* condicionales++
    triple igual (===) fuerza a que la compración sea exactamente igual (como ==) pero además compara el tipo de variables!

    Friendly reminder!
    if (cond1)&&(cond2) -> AND: solo entra si se cumplen las dos condiciones
    if (cond1)||(cond2) -> OR: entra si se cumple una o otra condición
    if (cond != algo) -> NOT: entra solo si la condicion NO es igual a algo.

*/

function canIBuyCar() {
    var savings = parseInt(prompt("Perdona my falta de indiscreción pero, ¿cuántos ahorros tienes?"));
    var age = parseInt(prompt("¿Cuántos años tienes?"));
    
    if(age<18) {
        alert("No tienes edad suficiente para comprar un coche."); 
    } else if ((savings > carValue) && (age>=18)) {
        alert("Puedes comprar el coche.");
    } else if ((savings < carValue) && (age>=18)){
        alert("Te faltan "+(carValue-savings)+" para comprar el coche.");
    } else if((savings===carValue) &&  (age>=18)) {
        alert("Tienes lo justo para el coche, pero no para la gasolina.");
    } else {
        alert("No tienes edad suficiente para comprar un coche.")
    }
}

var hours;
var minutes;
var seconds;

function clockCalc() {
    hours = parseInt(prompt("Indica la hora"));
    minutes = parseInt(prompt("Indica los minutos"));
    seconds = parseInt(prompt("Indica los segundos"));

    if (seconds >= 60) {
        seconds=seconds%60;
        minutes++;
    } 

    if (minutes >= 60) {
        minutes = minutes%60;
        hours++;
    }

    if (hours >=24){
        hours = hours%23;
    }

    document.getElementById("hourResult").innerHTML="Son las "+hours+" <span id='daytime'>AM</span> "+minutes+" minutos y "+seconds+" segundos.";

    if (hours>12) {
        document.getElementById("daytime").innerHTML="PM";
    } 

    console.log(seconds);
}

var secretNumber = 8;
//var secretNumber = Math.floor(Math.random()*10); // returns a random integer from 0 to 9
var attempts = 0;
var userAnswer;

function guessMyNumber () {
    userAnswer = parseInt(prompt("Adivina el número que estoy pensando :^)"));

    if (userAnswer===secretNumber&&attempts==0) {
       alert("Has acertado! Y además a la primera!");
       attemps = 0;
       secretNumber = Math.floor(Math.random()*10); // returns a random integer from 0 to 9
       console.log(secretNumber);

    } else if (userAnswer===secretNumber) {
        alert("Correcto! lo conseguido despues de "+attempts+" intentos.");
        attempts=0;
        secretNumber = Math.floor(Math.random()*10); // returns a random integer from 0 to 9
    } else if (userAnswer<=secretNumber) {
        attempts++;
        alert("No es correcto! El número es mayor que el que has dicho.");
    } else if (userAnswer>=secretNumber) {
        attempts++;
        alert("No es correcto! El número es menor que el que has dicho.");
    }
}

var currentSlot = 0;
//secret Numbers:
var num$1 = 5; 
var num$2 = 2;
var num$3 = 8;

//guessed number
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;

function plus() {;
    numero1++;
    if (numero1>=10) {
        numero1=0;
    }
    document.getElementById("slot1").innerHTML = numero1;
}

function minus(num) {
    num--;
    if (num<=0) {
        num=9;
    }
    document.getElementById("slot1").innerHTML = num;
}

function selectSlot(num) {
    switch (num) {
        case 0:
            currentSlot = 0;
            break;
        case 1:
            currentSlot = 1;
            console.log(currentSlot);
            break;
        case 2:
            currentSlot = 2;
            console.log(currentSlot);
            break;
        case 3:
            currentSlot = 3;
            console.log(currentSlot);
            break;
    }
}

/*
currentSlot = 1;
if userAnswer1 = correct, currentSlot = 2
if userAnswer2 = correct, currentSlot = 3;
*/
this.document.getElementById("slot1").addEventListener("click", this.selectSlot(1))