//REST
/*
    const mostrarDatos = (...datos) => console.log(datos); 
    mostrarDatos('Albert', 46, 'albert@al.es');
    mostrarDatos('Alex', 29);
*/

/* TEORIA TIME!
    el parametro que le pasamos (datos) es un array y los elementos que recibe se añaden dentro de la matriz
    al ser un parametro que le pasamos a la function no podemos usar (datos) fuera de dicha function 

    para poder pasar los parametros que queramos ponemos (...parametro), los puntos ... van delante del nombre del parametro
*/

//SPREAD
const mostrarDatos = (...datos) => console.log(datos); 
const arrDatos = ['Albert', 46, 'albert@al.es'];

mostrarDatos(...arrDatos); //quan no saps quantes dades enviaras es fica dins de un array o un objecte

/*
function saludar(nom) {
    console.log('Hola '+nom);
}

const JUGADOR = {
    nom: 'Leo'
}

saludar(); //javascript permite ejecutar esto, mientras que typescript evitaría esto.
*/
