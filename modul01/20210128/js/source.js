
/* 
    Reto1:
    Siguiendo con el ejercicio de mostrar/ocultar texto, amplíalo a 3 textos diferentes.
*/
var show = true;
function showMe(id, buttonID) {
    if (show===true) {
        document.getElementById(id).style.display="none";
        show = false;
        document.getElementById(buttonID).innerHTML="Show the text!";
    } else if (show===false) {
        show = true;
        document.getElementById(id).style.display="block";
        document.getElementById(buttonID).innerHTML="Hide the text!";
    }
}

/* 
    Reto2:
    ¿Eres capaz de hacer un campo INPUT para introducir texto, y que este se convierta en mayúsculas automáticamente? PISTA: onchange, toUpperCase();
*/
var text;
function checkUserText() {
    text = document.getElementById("userText").value;
    document.getElementById("yelledResult").innerHTML = "↪︎ "+text.toUpperCase();
}

/*  Reto3:
    Muestra el texto: "hoy es...." y un botón para mostrar la fecha actual. AL pulsarlo, debe aparecer en pantalla.
*/
var date;
function showDate() {
    date = new Date();
    document.getElementById("dateToday").innerHTML = "<p id='dateFormat'>"+date+"</p>";
}

/* 
    Event Listener -> escucha si algo recibe un evento y ejecuta una acción !! la estructura es:
    addEventListener(tipo de evento a escuchar, funcion a ejecutar);
*/

/* 
    Reto 4: Botón que al clicarlo muestre un texto en la página 
*/
//document.getElementById("textButton").addEventListener(onclick, addText());
function addText(){
    document.getElementById("newTextFromButton").innerText="Hello this is Dog";
}