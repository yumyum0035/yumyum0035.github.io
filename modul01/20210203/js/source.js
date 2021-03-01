//la funcion de ayer, hoy la cambiamos a funcion de tipo flecha =>
const ALUMNOS = ['Coni', 'Alex1', 'Alex2', 'Alex3', 'Zdravko', 'Marc', 'Jordi', 'Javi', 'Marina', 'Victoria', 'Marta', 'Diego', 'Guillem', 'Lucas'];

//let numeroCaracteres = ALUMNOS.map(function (nombre) { console.log(`${nombre} tiene ${nombre.length} letras en su nombre.`);} );


//conversión de function a => (arrow)
/* como quedaría la funcion:
(nombre) => {
    console.log(`${nombre} tiene ${nombre.length} letras en su nombre.`);
}
*/

//ejemplo practico:
/*
let numeroCaracteres = ALUMNOS.map(
    (nombre) => { 
        return `${nombre} tiene ${nombre.length} letras en su nombre.`;
    } 
);
*/

/* explicación:
    aqui (^) tienes un parametro que vas a ejecutarle una function. es una funcion anonima, como la de arriba, no tiene nombre.

    el paramretro (nombre) lo enviamos por mensajeria => a ejecutar
*/

/* para hacer un return en arrowF:
    se hace igual. lol.
    al hacer un return ahora devuelve el array nuevo creada por el map.
*/

/* para optimizarla mas:
    al ser una funcion que solo tiene UNA (1) linea de codigo se puede hacer así:
    extra: si solo va a recibir un parametro, no hace falta que vaya entre parentesis
*/
let numeroCaracteres = ALUMNOS.map(nombre=>`${nombre} tiene ${nombre.length} letras en su nombre.`);
//aqui hemos usado el array ALUMNOS para crear una matriz nueva con un trabajo especifico hecho en cada uno de sus valores

//console.log(numeroCaracteres);

/* en palabras de Diego, explicación de .map()
    "El map es como si usáramos un for y le digamos que aplique la función a cada valor de la matriz"
*/

/* EJERCICIO 1:
hacer una aplicación que calcule el IMC (ya tardabamos..) hacerla como programación clasica primero y luego pasarla a arrowF :^)

peso en kg y altura en cm
formula btw: imc = peso/(altura^2)
*/
/*
let height;
let weight;
let imc;
*/

function getHeight() {
    return height = (document.getElementById("userHeight").value)/100; //pasa de cm a metros
}

function getWeight() {
    return weight = document.getElementById("userWeight").value;
}

//document.getElementById("userHeight").addEventListener("input", getHeight);
//document.getElementById("userWeight").addEventListener("input", getWeight);

function imcCalculator() {
    imc = weight/(height*height);
    document.getElementById("result").innerHTML = `El IMC es ${imc}`;
    return imc;
}

//document.getElementById("calcButton").addEventListener("click", imcCalculator, false);

//ahora en arrowF, pero sensillito
let altura = 1.70; //pasa de cm a metros
let peso = 54;
let masaCorporal = (altura, peso) => peso/(altura*altura);
//console.log(masaCorporal(altura, peso));

let height;
let weight;
let imc;
imcCalc = (weight, height) => {
    height = (document.getElementById("userHeight").value)/100;
    weight = document.getElementById("userWeight").value;
    imc = weight/(height*height);
    document.getElementById("result").innerHTML = `El IMC es igual a ${imc.toFixed(1)}`;
    return imc;
};

document.getElementById("userHeight").addEventListener("input", getHeight);
document.getElementById("userWeight").addEventListener("input", getWeight);

function imcResult(imc) {
    if(imc >= 40) {
        document.getElementById("imcResult").innerHTML = "Tu IMC indica obesidad mórbida.";
    } else if (imc >= 30 && imc <= 39.9) {
        document.getElementById("imcResult").innerHTML = "Tu IMC indica obesidad severa.";
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("imcResult").innerHTML = "Tu IMC indica sobrepeso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("imcResult").innerHTML = "Tu IMC indica peso saludable.";
        console.log("hola, he entrado en el if")
    } else if (imc >= 16 && imc <= 18.4) {
        document.getElementById("imcResult").innerHTML = "Tu IMC indica delgadez.";
        console.log("hola, he entrado en el if")
    } else if (imc >= 15 && imc <= 15.9) {
        document.getElementById("imcResult").innerHTML = "Tu IMC indica delgadez severa.";
    } else if (imc >= 14.9) {
        document.getElementById("imcResult").innerHTML = "Tu IMC indica delgadez muy severa.";
    } 
}

document.getElementById("calcButton2").addEventListener("click", (imc) => {
    imcCalc(height, weight);
    imcResult(imc);
}, false);

