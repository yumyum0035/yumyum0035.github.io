"use strict";
/*
    TS 1:
    Crear jugador, nom, posició, número, goles.
    Mostrar per pantalla , titular: Hoy <jugador> con el número <numero>, y jugando de <posicion> ha marcado <goles>
    el missatge de goles és plural o singula segons el número de gols
    i si no ha marcat gol, el missatge canvia
    posicio: porter, defensa, centrecampista, davanter
*/
(() => {
    let jugador = {
        nom: 'Pedro',
        posicio: 'delantero',
        numero: 4,
        gols: 2
    };
    function numeroGols(goals) {
        if (goals === 0) {
            return `no ha marcado goles`;
        }
        else if (goals === 1) {
            return `ha marcado un gol`;
        }
        else {
            return `ha marcado ${goals} goles.`;
        }
    }
    let titular = document.getElementById("titular");
    //aqui el ! indica que el valor del id funciona. si en lugar de ! ponemos ? le decimos que puede existir o no (null)
    titular.innerHTML = `Hoy ${jugador.nom}, con el número ${jugador.numero}, y jugando de ${jugador.posicio},  ${numeroGols(jugador.gols)}`;
})();
(() => {
    function missatge(who, tool, when) {
        //en posar el ? amb el nom de la variable indica que no sempre la farem servir
        if (when != undefined) {
            console.log(`Aquesta funcio ha estat invocada ${who} amb l'ajuda ${tool} i ho ha fet ${when}`);
        }
        else {
            console.log(`Aquesta funcio ha estat invocada ${who} amb l'ajuda ${tool}`);
        }
    }
    missatge('pel Marc', "d'una pala", 'durant la nit.');
    console.log(`Diego le robó cosas del cofre a Alex, otra vez.`);
})();
