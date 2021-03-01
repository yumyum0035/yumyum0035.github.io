let nombre = 'Hello, this is dog';
console.log(nombre);

/* 
    cool kids don't work with var anymore. Cool kids work with let. 
    LET no permite declarar la misma variable dos veces, al contrario que var. Hace que javascript sea menos guarro. A partir de ahora nos olvidamos del var.

*/

//const TEMPORADA = 'Verano';
let temporada = 'Verano'; //recordemos que las variables distinguen entre mayusculas y minusculas

/* 
    Las CONSTANTES se ponen en mayúculas para hacerlas mas facil de identificar. no van a cambiar, es un valor fijo.
*/

function saludo() {
    let nombre2 = 'Albert';
    return "Buenos días, "+nombre2;
}

console.log(saludo());

/* 
    si le pedimos que nos muestre el valor de la variable nombre2, no podemos acceder a ella porque está dentro de la funcion. Nada nuevo aqui.

    La diferencia principal es que let no te deja llamar a las variables fuera del scope, es decir, var te dejaria hacerlo pero daría error, pero let directamente te avisa que no puedes llamarla.
*/

const COLORES = ['Amarillo', 'Verde'];
COLORES.push('Rojo');
console.log(COLORES);

/* en caso de martices (arrays), te permite manipularlas y cambiarlas. */

//const PAIS = 'Españita';
//PAIS = 'Alemania';
//console.log(PAIS);

/* 
    esto dará error porque una constante no se modifica. (lo comentamos por si acaso). Un array se puede modificar porque está hecho para ser modificado, con matrices se utilizan constantes en lugar de let. 
*/

const NOMBRE = 'Coni Herrera';
const EDAD = 27;
const CIUDAD = 'Barcelona';

//formato antiguo:
//console.log('La persona se llama '+NOMBRE+', tiene '+EDAD+' años y es de '+CIUDAD);

//template string ECMA6:
console.log(`La persona se llama ${NOMBRE}, tiene ${EDAD} años y es de ${CIUDAD}`);
/* 
    para hacer un string con variables, las variables se ponen entre ${} !!
    se acabó ""+variable+"";!!
*/

//EL GRAN CAMBIO!! arrow functions:
const ALUMNOS = ['Coni', 'Alex1', 'Alex2', 'Alex3', 'Zdravko', 'Marc', 'Jordi', 'Javi', 'Marina', 'Victoria', 'Marta', 'Diego', 'Guillem', 'Lucas'];

/* EN RESUMEN: Sirve para hacer recorrido en una matriz y la medida que va haciendo el recorrido ejecuta funciones. 
    .map cuando recorre una matriz, pone dentro del mapeado el valor con el que quieres trabajar y permite ejecutar una funcion sobre este valor: 
*/
let numeroCaracteres = ALUMNOS.map(function (nombre) { console.log(`${nombre} tiene ${nombre.length} letras en su nombre.`);} );

/* explicacion larga sobre .map
    una de las grandes ventajas del map es que cuando recorres una matriz, no hace falta que esperes a que termine de recorrer la matriz para acceder al elemento, con map puedes acceder al elemento de la matriz y ejecutar funciones. No hace falta for. 
*/

