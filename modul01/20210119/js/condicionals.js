var secretNumber = Math.floor(Math.random()*10); // returns a random integer from 0 to 9
var attempts = 0;
var userAnswer;
var wins = 0;

function guessMyNumber () {
    userAnswer = parseInt(document.getElementById("answer").value);

    if (userAnswer===secretNumber&&attempts==0) {
        document.getElementById("result1").innerHTML = "Has Acertado! Y ademas a la primera!";
        attemps = 0;
        secretNumber = Math.floor(Math.random()*10);
        wins++;
    } else if (userAnswer===secretNumber) {
        document.getElementById("result1").innerHTML = "Correcto! lo conseguido despues de "+attempts+" intentos.";
        attempts=0;
        secretNumber = Math.floor(Math.random()*10);
        wins++;
    } else if (userAnswer<=secretNumber) {
        attempts++;
        document.getElementById("result1").innerHTML = "No es correcto! El número es mayor que el que has dicho.";
    } else if (userAnswer>=secretNumber) {
        attempts++;
        document.getElementById("result1").innerHTML = "No es correcto! El número es menor que el que has dicho.";
    }
    
    document.getElementById("winsTotal").innerHTML = "Victorias conseguidas: "+wins;
}

//GUESS MY NUMBER: EXTRA HARD !!

var currentSlot = 1;
//secret Numbers:
var num$1 = 5; 
var num$2 = 2;
var num$3 = 8;

//guessed number
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;

var attemptsHarder = 0;
var winsHarder = 0;

function selectSlot(num) {
    switch (num) {
        case 0:
            currentSlot = 0;
            break;
        case 1:
            currentSlot = 1;
            break;
        case 2:
            currentSlot = 2;
            break;
        case 3:
            currentSlot = 3;
            break;
    }
}
//document.getElementById("slot1").addEventListener("click", selectSlot(1)); //al hacer click en el div slot 1 hace que llame a la funcion selectSlot();

function plus() {;
    switch (currentSlot) {
        case 0:
            break;
        case 1:
            numero1++;
            if (numero1>=10) {
                numero1=0;
            }
            document.getElementById("slot1").innerHTML = numero1;
            break;
        case 2:
            numero2++;
            if (numero2>=10) {
                numero2=0;
            }
            document.getElementById("slot2").innerHTML = numero2;
            break;
        case 3:
            numero3++;
            if (numero3>=10) {
                numero3=0;
            }
            document.getElementById("slot3").innerHTML = numero3;
            break;
    }
}

function minus() {
    switch (currentSlot) {
        case 0:
            break;
        case 1:
            numero1--;
            if (numero1<=0) {
                numero1=9;
            }
            document.getElementById("slot1").innerHTML = numero1;
            break;
        case 2:
            numero2--;
            if (numero2<=0) {
                numero2=9;
            }
            document.getElementById("slot2").innerHTML = numero2;
            break;
        case 3:
            numero3--;
            if (numero3<=0) {
                numero3=9;
            }
            document.getElementById("slot3").innerHTML = numero3;
            break;
    }
}

function guessMyNumber2 (num1, num2, num3) {
    
    if (num1===num$1&&num2===num$2&&num3===num$3&&attemptsHarder===0) {
        document.getElementById("result2").innerHTML="Has acertado! Y además a la primera, wow";
        attemptsHarder = 0;
        num$1 = Math.floor(Math.random()*10);
        num$2 = Math.floor(Math.random()*10);
        num$3 = Math.floor(Math.random()*10);
        winsHarder++;
    } else if (num1===num$1&&num2===num$2&&num3===num$3) {
        document.getElementById("result2").innerHTML="Has acertado! El número de intentos han sido: "+attemptsHarder;
        attemptsHarder = 0;
        winsHarder++;
    } else if (num1!=num$1||num2!=num$2||num3!=num$3) {
        attemptsHarder++;
        document.getElementById("result2").innerHTML="Incorrecto! Intenta otra vez.";
    }    else {
        console.log("holi, la funcion ha ejecutado pero ha ido directamente al ultimo if :^)");
    }
}