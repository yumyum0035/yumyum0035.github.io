const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var timer = [0,0,0,0];
var interval;
var timerRunning = false;

function addZero(time) {// Añadir 0 a los números inferiores a 9
    if (time<=9) {
        time = "0"+time;
        console.log(time);
    }

    return time;
}


function runTimer() { // Ejecutar standard minuto/segundo/centésimas temporales:
    let currentTime = addZero(timer[0])+":"+addZero(timer[1])+":"+addZero(timer[2]);
    theTimer.innerHTML = currentTime;
    
    //[0] = horas, [1] = minutos, [2] = segundos, [3] = milisegundos
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100)/60); //horas
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function spellCheck() { //comprueba el texto escrito con el original
    textEntered = testArea.value; // variable para texto picado
    originTextMatch = originText.substring(0,textEntered.length); //variable para controlar si el texto original coincide con el picado

    //condición de comparación entre el escrito y el original
    if (textEntered === originText) { //si se ha completado con éxito
        clearInterval(interval);
        testWrapper.style.borderColor = '#429890';
        //Si son iguales: se borra el intervalo, se cambia el color del borde de la caja de texto

    }  else { //Si NO son iguales: se comprueba que a medida que picamos 
        //comprobar a medida que tecleamos
        if (textEntered === originTextMatch) { 
            //comparar el texto que llevo picado con el texto original originTextMatch
            testWrapper.style.borderColor = '#65ccf3';
            //Si es exacto, mostrar borde azul
        } else {
            testWrapper.style.borderColor = '#e95d0f';
            //Si detecta fallo mientras picamos, poner borde en rojo.
        }
    }
}

function start() { // Función Empezar temporizador:
    if(!timerRunning) { //controla que haya solo un (1) intervalo a la vez comprobando si es tru4 o false
        interval = setInterval(runTimer, 10);
        timerRunning = true;
    }
}

function reset() {// función Reset todo:
   //Borrar intervalo, iniciar temporizador, borrar testArea, color gris de la zona de texto
    
}

// listeners para el teclado y el botón reset:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);

/* leer esto sobre los querySelectors:
    https://www.w3schools.com/jsref/met_document_queryselector.asp

    busca los diferentes elementos de la página con los que vamos a trabajar en js y los convierte en constantes. En angular se suele poner la variable CONST en mayusculas, pero aqui no lo coge. por ej: CONST testWrapper.
*/

/* LET:
    let crea una variable dentro del bloque de programación en el que estás, es como una variable local
*/  