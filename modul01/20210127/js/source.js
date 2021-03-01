/* EXERCICI 1
    Crear un array y llenarla con un bucle con los números del 1 al 10
*/
var arr = [];

for (var i=0; i<10 ;i++) {
    arr.push(i+1);
}

console.log("ex 1: "+arr);

/* EXERCICI 2
    Crear un array y llenarla con un bucle con los números del 1 al 10 PERO sólo los pares
    Recordatorio: utilizar método push
*/
var arr2 = [];

for (var i=0; i<10; i+=2) {
    arr2.push(i+2);
}

/* método con while
    var i = 0;
    while (i<10) {
    arr2.push(i+2);
    i+=2;
    }   
*/

console.log("ex 2: "+ arr2);

/* 
 ex 3: fer un h1 que en clicar canvii el color i un paragraf que en clicar desaparegui 
*/

/*
    ex 4: hacer un boton que oculte el p, pero si ya esta oculto, que lo muestre
*/
var show = true;
function showMe() {
    if (show==true) {
        document.getElementById("gone").style.display="none";
        show = false;
        document.getElementById("ShowHide").innerHTML="Show the text!";
    } else if (show==false) {
        show = true;
        document.getElementById("gone").style.display="block";
        document.getElementById("ShowHide").innerHTML="Hide the text!";
    }
}