/* ex 1: Crear un fitxer anomenat ciber.html i mostrar per consola un 'Hola Mundo'*/
console.log('Hola Mundo!');

/* ex 2: Crear un alert que mostri el teu nom*/
alert('¡Me llamo Coni!');

/* ex 3: Crear una variable que contingui el teu nom i una altra que tingui el teu nom */
var name = 'Coni';
var surname = 'Herrera';
console.log(name+" "+surname);

/* ex 4: Crea dos variables amb dos numeros i fes una suma entre ells */
var num1 = 34;
var num2 = 56;
var result = num1 + num2;
console.log("La suma entre "+num1+" i "+num2+" és "+result);

/* ex 5: Crea una variable anomenada "nota_examen" juntament amb un alert que ens digui si l'examen ha estat aprovat o no juntament amb la nota (caldrà utilitzar un condicional IF)*/
var nota_examen = 4.8;

if (nota_examen>=5) {
    alert('Has aprovado el examen!');
} else {
    alert('Ohh has suspendido el examen con un '+nota_examen);
}

//extra: conditional operator
var nota_examenTernaria = nota_examen>=5 ? 'Has aprovado el examen!' : 'Ohh has suspendido el examen con un '+nota_examen;

console.log(nota_examenTernaria);

/* ex 6: Reemplaça la paraula blau per la paraula verd del següent text: "Tinc un cotxe de color blau". Després intenta fer-ho reemplaçant les o per les u */
var cotxe = 'Tinc un cotxe de color verd';
var cotxeBlau = cotxe.replace("verd","blau");
var cotxeDumb = cotxe.replace(/o/g,"u" );

console.log(cotxe);
console.log(cotxeBlau);
console.log(cotxeDumb);


/* ex 7: Donat el seguit llistat d'objectes 'taula', 'cadira', 'ordinador', 'llibreta', per un bucle que mostri per paraula cada objecte i la seva posicio al llistat */
var objectes = ['taula', 'cadira', 'ordinador', 'llibreta'];

for (var i=0; i < objectes.length; i++) {
    console.log("L'objecte "+objectes[i]+" està a la posició "+i+".");
}