"use strict";
//avui hem acabat l'exercici de cotxe i forms !!
//FOR EACH
var array1 = ['Albert', 3, 'Marc'];
//forEach fa una funcio sobre cada element del array que se li ha passat
array1.forEach(function (element, index) {
    //element es el primer element del array (duh)
    console.log(element, index);
});
var sumaArr = [10, 12, 21];
sumaArr.forEach(function (item) {
    //item es el primer element del array!
    console.log(item + 10);
});
//MAP
//map fa servir una matriu (three) per emplenar una de nova (doble)
var three = [1, 2, 3];
var doble = three.map(function (item) { return item * 2; });
//com tenim nomes una linea una funcio fletxa aixi ^ ja esta bé.
console.log(doble);
//la diference entre el forEach es que fa un recorregut i mostra la informacio y el map fa el recorregut i permet guardar el que ha fet en una nova variable
var preus = [1.25, 3.5, 4.5, 5, 1.22];
var preusIVA = preus.map(function (item) { return (item += item * 0.21).toFixed(2); }); //calcula el IVA (.21) el suma a item i redueix els decimals a 2 !!
console.log(preusIVA);
//FILTERS!!!
var numbers = [1, 2, 3, 8, 12, 13, 5];
var even = numbers.filter(function (item) { return item % 2 === 0; });
var menorquetres = numbers.filter(function (item) { return item < 3; });
console.log(even);
console.log(menorquetres);
//repasar !! https://www.w3schools.com/js/js_array_iteration.asp
//arr.reduce()
//arr.every() (si tots els elements compleixen la condicio, retorna true), mentre que array.some() retorna true si algun dels elements compleix la condicio
//arr.find ()
