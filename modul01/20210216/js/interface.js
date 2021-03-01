"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviamos a ${xmen.nombre} a la misión`);
        if (xmen.otros != undefined) {
            console.log(`Otra información sobre el X-men en cuestión: ${xmen.poderes}, ${xmen.aspecto}, ${xmen.otros}`);
        }
        else {
            console.log(`Otra información sobre el X-men en cuestión: ${xmen.poderes}, ${xmen.aspecto}.`);
        }
    };
    const lobezno = {
        nombre: 'Logan',
        edad: 60,
        poderes: 'regeneración',
        aspecto: 'desarreglado',
        nacionalidad: 'Canada'
    };
    const deadpool = {
        nombre: 'Wade',
        edad: 20,
        poderes: 'regeneración, pero mejor que Lobezno',
        aspecto: 'parece Spiderman',
        nacionalidad: 'Canada',
        otros: 'No es realmente un X-men'
    };
    enviarMision(lobezno);
    enviarMision(deadpool);
})();
(() => {
    class Avenger {
        constructor(nombre, nombreReal, equipo, edad, combate, peleasGanadas = 0, casado) {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            this.equipo = equipo;
            this.edad = edad;
            this.combate = combate;
            this.peleasGanadas = peleasGanadas;
            this.casado = casado;
            this.nombre = nombre,
                this.nombreReal = nombreReal,
                this.equipo = equipo,
                this.edad = edad,
                this.combate = combate,
                this.peleasGanadas = peleasGanadas,
                this.casado = casado;
        }
    }
    let antman = new Avenger('Antman', 'Scott Lang', 'Avenger', 50, true, 5, true);
    let spiderman = new Avenger('Spiderman', 'Peter Parker', 'ninguno', 15, true, 3, false);
    let deadpool = new Avenger('Deadpool', 'Wade Wilson', 'ninguno, jaja creías que los Disney permitiría esto?', 50, true, 100, true);
})();
