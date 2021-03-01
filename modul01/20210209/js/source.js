//repas
class Usuari {
    constructor(nom, edat, pais, genere) {
        this.nom = nom,
        this.edat = edat,
        this.pais = pais,
        this.masculi = genere
    }

    mostrarSaludo(msg) {
        return `${msg}. Bienvenido, ${this.nom}`;
    }
}

class Estudiant extends Usuari {
    super(nom, edat, pais, carrera) {
        this.carrera = carrera;
    }
}

const alumne1 = new Usuari('Javier', 26, 'Alemanya', true);
const alumne2 = new Usuari('Albert', 26, 'Alemanya', true);
const alumne3 = new Usuari('Alex', 26, 'Alemanya', true);
const estudiant1 = new Estudiant ('Marina', 20, 'Brasil', 'Ing.Mecànica');


//reto. ay ay ay...
/*
  En tu empresa te han pedido un software que de soporte al departamento de marketing.
  Se necesita lleva un seguimiento de las redes sociales.
  
  1. Crear un constructor de objetos socialNetwork, que contengan los siguientes campos: name, arrayLikes, importance (de 0 a 1), numberOfUsers

  2. Usar el constructor para instanciar tres redes sociales:
    - Facebook con likes [201, 245, 500, 650, 1103, 347], importancia 0.8 y 14530 usuarios.
    - Instagram con likes [303, 21, 124, 150, 23, 31], importancia 0.6 y 230 usuarios.
    - Twiter con likes [205, 518, 1123, 4350, 233, 3431], importancia 0.4 y 3230 usuarios.
  
    3. Añadir 2 métodos en el constructor para calcular el total de likes y la media de cada red social
  */

class socialNetwork {
    constructor(name, arrayLikes, importance, numberOfUsers) {
        this.name = name,
        this.arrayLikes = arrayLikes,
        this.importance = importance,
        this.numberOfUsers = numberOfUsers;
    }

    sumLikes(arr){
        return arr.reduce((total, num) => total + num, 0);
    }

    averageLikes(arr) {
        return Math.round(this.sumLikes(arr)/arr.length);
    }
    
    showData() {
        console.log(`${this.name} has ${this.sumLikes(this.arrayLikes)} likes.`);
        console.log(`${this.name} has an average of ${this.averageLikes(this.arrayLikes)} likes`);
    }
}

const fb = new socialNetwork ('Facebook', fb_likes = [201, 245, 500, 650, 1103, 347],0.8,14530);
const ig = new socialNetwork('Instagram', ig_likes = [303, 21, 124, 150, 23, 31],0.6,230);
const tw = new socialNetwork('Twitter', tw_likes = [205, 518, 1123, 4350, 233, 3431], 0.6,3230);

fb.showData();
tw.showData();
ig.showData();

/* version for of de Lucas
    let acu
    for (let i of this.arrayLikes) {
    acu += i;
    }

    return acu;
*/