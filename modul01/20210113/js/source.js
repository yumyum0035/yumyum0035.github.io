var celsius = parseInt(prompt('¿Qué temperatura en Celsius (ºC) deseas convertir?'));
var faren = parseInt(celsius*(9/5)+32); //(0°C × 9/5) + 32 = 32°F

document.getElementById("result").innerHTML= '<p>La temperatura que no entiende nadie excepto en USA es de '+faren+'ºF.</p> <p class="small-text">La temperatura original (y la buena) es de '+celsius+'ºC.</p>';

function update(){
    faren = parseInt(celsius*(9/5)+32);
    document.getElementById("result").innerHTML= '<p>La temperatura que no entiende nadie excepto en USA es de '+faren+'ºF.</p> <p class="small-text">La temperatura original (y la buena) es de '+celsius+'ºC.</p>'; //esto seguro que se puede hacer de forma más limpia que hacer todo el p de nuevo :thonk:
}

function sumarGraus() {
    celsius++;
    update();
}

function restarGraus() {
    celsius--;
    update();
}
