var cesta = ["pan","leche","huevos","azúcar","harina"];
var precios = [1.25, 3.20, 2.50, 2, 1.20];
var nuevoItem;
var nuevoPrecio;
var sumatori = 0;

function updateParagraf () {
    ultimoElemento = cesta[cesta.length-1];
    sumatori = precios.reduce(function(a, b){return a+b},0);
    sumatori = sumatori.toFixed(2);

    document.getElementById("total").innerHTML="El total de artículos en la cesta es de "+cesta.length+".";
    document.getElementById("suma").innerHTML=sumatori+"€";

    refreshList();
}

updateParagraf();

/*function sumarPrecios(){
    for (var i=0; i<precios.length;i++) {
        sumatori += precios[i];
        console.log(sumatori);
    }
    sumatori = sumatori.toFixed(2); //reduce decimales a dos
    updateParagraf();
}
*/

function nuevoElemento() {
    nuevoItem = prompt("Añade un nuevo elemento a la lista de la compra.");
    nuevoPrecio = parseFloat(prompt("Indica el precio del producto."));
    cesta.push(nuevoItem);
    precios.push(nuevoPrecio);
    updateParagraf();
}

function eliminarElemento() {
    if(cesta.length>0&&precios.length>0){
        cesta.pop();
        precios.pop();
    } else {
        alert("La cesta está vacía :^)");
    }

    updateParagraf();
}

var lista = document.getElementById("listaCompra");
function makeList() {
    for (var i=0; i<cesta.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = cesta[i];
        document.getElementById("listaCompra").appendChild(newLi);
    }
}

function refreshList(){
    document.getElementById("listaCompra").remove();
    document.getElementById("listaParent").innerHTML='<ul id="listaCompra"></ul>';

    makeList();
}