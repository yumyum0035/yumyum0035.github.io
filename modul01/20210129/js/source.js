
/* Ejercicio 1
    Quitar los elementos de onmouseover y onmouseout del html y ponerlo todo directamente con un addEventListener()
*/
function resalta(elemento) {
    switch(elemento.style.borderColor) {
        case 'silver':
        case 'silver silver silver silver':
        case '#c0c0c0':
            elemento.style.borderColor = 'black';
        break;
        case 'black':
        case 'black black black black':
        case '#000000':
            elemento.style.borderColor = 'silver';
        break;
    }
}

document.getElementById("box1").addEventListener("mouseover", function() {resalta(this)});
document.getElementById("box1").addEventListener("mouseout", function() {resalta(this)});
/* addEventListener() funciona tal que así: 
    1. los eventos van sin "on", es decir onmouseover sería mouseover y siempre van entre comillas 
    2. para añadir una función que recibe parametros hay que poner function(){ funcion nombre1(p1) } tambien conocido como una función anonima
    2.5 las funciones que no reciben parámetros van tal cual
*/

/* Ejercicio 2
    convertir en addEventListener()
    -cuenta los caracteres totales
    -cuenta el número de vocales

*/

function limita(maxCaracteres) { //no funciona al meterla en addEventListener, pero si en HTML
    //identifica el elemento HTML con el que vas a trabajar
    var elemento = document.getElementById("elTexto");

    if(elemento.value.length >= maxCaracteres ) {
        console.log("ha entrado en el if!!");
        return false;
    } else {
        console.log(maxCaracteres);
        console.log(elemento.value.length);
        return true;
    }
}

//maximo de caracteres dentro del textarea
function limita2(maxCaracteres) {//Z ha encontrado la forma de que esto funcione woooo!!
    var elemento = document.getElementById("elTexto");
    if(elemento.value.length>maxCaracteres) {
        elemento.value=elemento.value.slice(0,maxCaracteres);
    }
}

document.getElementById("elTexto").addEventListener("keypress", function() {return limita2(25)});

//cuenta los caracteres dentro del textarea
function charCount (){
    var elemento = document.getElementById("elTexto");
    var contador = document.getElementById("caracteres");
    contador.innerHTML = 'contador'+(elemento.value.length)
}

document.getElementById("elTexto").addEventListener("click", charCount());