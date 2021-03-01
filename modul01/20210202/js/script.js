const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var timer = [0,0,0,0];
var interval;
var timerRunning = false;

function addZero(time) {
    if (time<=9) {
        time = "0"+time;
        console.log(time);
    }

    return time;
}

function runTimer() {
    let currentTime = addZero(timer[0])+":"+addZero(timer[1])+":"+addZero(timer[2]);
    theTimer.innerHTML = currentTime;
    
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100)/60); //horas
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function spellCheck() { 
    textEntered = testArea.value;
    originTextMatch = originText.substring(0,textEntered.length); 

    
    if (textEntered === originText) { 
        clearInterval(interval);
        testWrapper.style.borderColor = '#429890';

    }  else {
        if (textEntered === originTextMatch) { 
            testWrapper.style.borderColor = '#65ccf3';
        } else {
            testWrapper.style.borderColor = '#e95d0f';
        }
    }
}

function start() {
    if(!timerRunning) {
        interval = setInterval(runTimer, 10);
        timerRunning = true;
    }
}

function reset() {
   //Borrar intervalo, iniciar temporizador, borrar testArea, color gris de la zona de texto
    interval = null;
    timerRunning = false;
    theTimer.innerHTML = '00:00:00';
    timer = [0,0,0,0];
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);