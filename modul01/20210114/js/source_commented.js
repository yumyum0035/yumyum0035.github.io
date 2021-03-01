var cesta = ["pan","leche","huevos","azúcar","harina"];
var precios = [1.25, 3.20, 2.50, 2, 1.20];
var numeros = [1, 50, 22, 4, 83, 8];
var ultimoElemento;
var nuevoValor;

/* el mateix que hi ha a la function updateParagraf() estava aqui, pero si ho fiquem a la function i la criden ens estalviem les linies
document.getElementById("articulos").innerHTML="<p>La cesta de la compra contiene: "+cesta+"</p>";
document.getElementById("total").innerHTML="<p>El total de artículos es de "+cesta.length+".</p>";
document.getElementById("posicion").innerHTML="<p>El último elemento de la lista es: "+cesta[cesta.length-1]+".</p>"; //siempre cogerá el último elemento del array aunque se agreguen elementos.
*/

/* explicación !!
document.getElementById("posicion").innerHTML="<p>El último elemento de la lista es: "+cesta[4]+".</p>"; //version simple sabiendo cual es el tamaño del array, pero no es óptima porque si cambia el array se cambia la posición.
*/

var sum = precios.reduce(sumReduce);

function sumReduce(total, value, index, array){
return total + value;
}

function updateParagraf () {
    //declaramos valor de ultimoElemento, y al llamar la function de nuevo lo actualizamos
    ultimoElemento = cesta[cesta.length-1]; 

    //añadimos todo lo que va en el html en su p#id correspondiente
    document.getElementById("articulos").innerHTML="<p>La cesta de la compra contiene: "+cesta+"</p>";
    document.getElementById("total").innerHTML="<p>El total de artículos es de "+cesta.length+".</p>";
    document.getElementById("posicion").innerHTML="<p>El último elemento de la lista es: "+ultimoElemento+".</p>";

    sum = precios.reduce(sumReduce);
    sum = sum.toFixed(2); //reduce los decimales (truncate) a 2 (porque usamos 2 decimales en euros)

    document.getElementById("suma").innerHTML="<p>El precio total de los artículos es de "+sum+"</p>";
    console.log(sum);
}

updateParagraf(); //cridem per posar el contingut del array al html.

function masLimon() {
    cesta.push("limón"); //añade elemento al array
    precios.push(0.75); //precio de un limón
    updateParagraf();

    if (cesta.length>=10) { //if de tonterías extras. :^)
        document.getElementById("limon").innerHTML = "<p>Si la vida te da limones... :^)</p>";
    }
}

//ejercicio: como podemos hacer para que a la hora de añadir un botón no sea siempre el mismo? que pregunte qué elemento quiero añadir y lo introduzca.
function nuevoElemento() {
    nuevoValor = prompt("Añade un nuevo elemento a la lista de la compra.");
    cesta.push(nuevoValor);
    updateParagraf();

    //cesta.unshift("limón"); //añade delante del primer elemento del array. FYI
}

//eliminar el ultimo valor del array
function eliminarElemento() {
    cesta.pop();
    updateParagraf();

    //cesta.shift(); //borra el primer elemento del array. FYI
}

function ordena() { //alfabeticamente
    cesta.sort();
    updateParagraf();
}

function ordenaNums() { //ordena numeros de forma bien.
    numeros.sort(function(a, b){return a-b}); 
    //function que compara la primera y segunda posicion del array y continua y luego ordena
}

/* reduce attempt#1 (no m'agrada)
var sum = precios.reduce(sumReduce);
function sumReduce(total, value, index, array){
    return total + value;
}
sum = precios.reduce(sumReduce);
sum = sum.toFixed(2);
*/


/*como hemos llegado a la solución de reduce() LIMPIO.
precios.sort(function(a, b){return a-b});  //partiendo del sort para ordenar los numeros de antes
sum = precios.reduce(function(a, b){return a+b},0); //hacemos un reduce y le decimos que sume los valores hasta el final del array y por ultimo indicamos el índice donde queremos que lo ponga (de cara ahora no hace falta, pero más adelante igual queremos hacer mierdas mas complejas winkwonk.)
console.log(precios);
console.log(sum);
*/
