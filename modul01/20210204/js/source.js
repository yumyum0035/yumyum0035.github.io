//EXERCICIS AMB ARRAYS + ECMA6

/* Exercici 1
    - Crea un array amn el teu nom on a cada posición correspongui a una lletra.
    - Fes un bucle que recorri aquest array i el mostri per consola amb cada una de les lletres.
*/
const MYNAME = ['C','o','n','i'];

/* metodo con for, que seria antiguo
    for (let i= 0; i<MYNAME.length; i++) {
        console.log(MYNAME[i]);
    }
*/

// for in:
for (let i in MYNAME) {
    console.log(MYNAME[i]);
}

/*forEach de Victoria
MYNAME.forEach(deletrea);
function deletrea(i) {
    console.log(i);
}
*/

/* Exercici 2
    - Al bucle, si la lletra es una vocal imprimeix a la consola: "He trobat la VOCAL: _", si no, imprimeix a la consola: "he trobat la CONSONANT: _"
    - Si trobes un numero, imprimeix per consola: "Els noms de persona no contenen el numero:_"
*/

let x;

for (x in MYNAME) {
    if (typeof MYNAME[x] == "number") {
        console.log(`Els noms de persona no contenen el numero: ${MYNAME[x]}`);
    } else if (MYNAME[x].match(/[1234567890]/)) {
        console.log(`Els noms de persona no contenen el numero: ${MYNAME[x]}`);
    } else if (MYNAME[x].match(/[aeiou]/i)) { //checks if index is a vowel both uppercase and lowercase
        console.log(`he trobat la VOCAL: ${MYNAME[x]}`);
    } else {
        console.log(`he trobat la CONSONANT: ${MYNAME[x]}`);
    }
}

/* Exercici 3 
    Emmagatzemar en un map les lletres de l'array i el nombre de vegades que apareixen
*/

//version 1 (ternarias)
/*
const REPEATED = [];
MYNAME.map((letra) => {
    letra = letra.toUpperCase();
    REPEATED[letra] = ((REPEATED[letra] || 0)+1);
    console.log(`La lletra que estem treballant es ${letra}`);
    //asigna la letra en la matriz repetida y asigna la letra en si o un cero en caso de que no esté la letra
    //quiero que en la matriz de repeticion pongas esa letra o un cero, si la letra ya existe, sumara 1
});

console.log(REPEATED);
*/
let letterCount = {}; 


/*//version 2: objeto
    MYNAME.map((letter) => {
        letter = letter.toUpperCase();
        if (letterCount[letter] === undefined) { //miro en el objeto y si no hay nada dentro, entrará aquí
            letterCount[letter] = 1;
        } else {
            letterCount[letter] += 1;
        }
    });
*/

/* //version con for in
    for (let x in MYNAME) {
        if(letterCount[MYNAME[x]] != null){ //la etiqueta existe
            letterCount[MYNAME[x]] += 1;
        } else { //la etiqueta no existe
            letterCount[MYNAME[x]] = 1;
        }
    }
*/

//version for of
for (let x of MYNAME) {
    if(letterCount[x] != null){ //la etiqueta existe
        letterCount[x] += 1;
    } else { //la etiqueta no existe
        letterCount[x] = 1;
    }
}

console.log(letterCount);


/* Exercici 4
    - Crea una altra array amb el teu cognom on cada posició correspongui a una lletra
    - fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de l'array name i surname i acabar l'execucio nombres tindrem una que es dira fullName
*/
let MYSURNAME = ['H','e','r','r','e','r','a'];
let newName = {};



console.log(newName);
/* EL RETO:
    adaptarlo para que el usuario introduzca el nombre y convertilo en array para que funcione con cualquier nombre :OOOO
*/

//extra explicasion: funciones con parametros que no estén vacíos
function registrarUsuario(name = 'No especificado', country = 'No especificado', email='No especificado', tel='No especificado') {
    //los valores por default son los que hemos puesto arriba ^
    return `Nombre: ${name}, País: ${country}, e-mail: ${email}, teléfono: ${tel}`;
}

console.log(registrarUsuario('Coni Herrera',undefined,'info@miau.com'));
//aqui con el undefined me salto el valor de pais y relleno el de email, pero hay que especicarlo o si no lo rellenara en el slot de país

//funcion calcular num DNI para practicar. tiempo total: 7 mins KEK

let numDNI = 23922447;

function letraDNI(dni) {
    let letra;
    dni = dni%23;
    switch(dni) {
        case 0:
            letra = 'T';
            break;
        case 1:
            letra = 'R';
            break;
        case 2:
            letra = 'W';
            break;
        case 3:
            letra = 'A';
            break;
        case 4:
            letra = 'G';
            break;
        case 5:
            letra = 'M';
            break;
        case 6:
            letra = 'Y';
            break;
        case 7:
            letra = 'F';
            break;
        case 8:
            letra = 'P';
            break;
        case 9:
            letra = 'D';
            break;
        case 10:
            letra = 'X';
            break;
        case 11:
            letra = 'B';
            break;
        case 12:
            letra = 'N';
            break;
        case 13:
            letra = 'J';
            break;
        case 14:
            letra = 'Z';
            break;
        case 15:
            letra = 'S';
            break;
        case 16:
            letra = 'Q';
            break;
        case 17:
            letra = 'V';
            break;
        case 18:
            letra = 'H';
            break;
        case 19:
            letra = 'L';
            break;
        case 20:
            letra = 'C';
            break;
        case 21:
            letra = 'K';
            break;
        case 22:
            letra = 'E';
            break;
    }

    return letra
}

console.log(letraDNI(numDNI));

//lo de Diego, por motivos
const DNI = "Y0000000W";
let numeros = "";

for (let i = 0; i < DNI.length; i++) {
    let valor = DNI.charAt(i);

    if(valor==="W"||valor==="X"||valor==="Y"||valor==="Z") {
        console.log(`${valor} es una letra`);
    } else {
        numeros = numeros.concat(`${valor}`);
    }
};