//aqui tenemos el código donde nos pregunta si queremos sumar o restar años :)

var nombre = prompt('Hola, ¿Cómo te llamas?');
var apellido = prompt('¿Y tu apellido?');
var edad = parseInt(prompt('¿Cuantos años tienes?'));
var sumarEdad = prompt('¿Quieres sumarte (+) o restarte (-) años?');
var edadOriginal = edad;

console.log(sumarEdad);

if (sumarEdad=='+'||sumarEdad=='sumar'){
var nuevaEdad = parseInt(prompt('¿Cuantos años querrías sumarte?'));
edad += nuevaEdad;
} else if(sumarEdad=='-'||sumarEdad=='restar') {
var nuevaEdad = parseInt(prompt('¿Cuantos años querrías quitarte?'));
edad -= nuevaEdad;
}

alert('Se te ve muy bien a pesar de tus ' + edad + ' años :^)');

document.getElementById("paragraf").innerHTML = "<p>Tu nombre es "+nombre+" "+apellido+" y quieres tener "+edad+" años, pero tienes "+edadOriginal+" años en realidad.</p>";

console.log("mostra el nom, cognom i edat original: ", nombre, apellido, edadOriginal);