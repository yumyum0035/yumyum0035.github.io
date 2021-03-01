/* La promesa és un objecte que té una funció a dins.
    en cas d'èxit executara una cosa i en cas de error farà una altra.
*/

(() => {
    const retirarDinero = (cantidadDinero:number):Promise<number> =>{ 
        //aqui especificamos que la Promise será de tipo number (solo especificamos para el resolve), si por lo que sea no devuelve un numero dara error
        let saldo = 1000; //primer hauria de mirar els diners que hi ha al compte

        /**
            aquesta funció el que ha de fer es comprobar si tenim prou diners o no.
            com no sabem quan trigara aquesta operació, fem servir promeses per que això es faci en segon pla, mentre que fem altres coses en comptes de parar el programa.
            en cas de èxit, treure diners
            en cas d'error, informar que no hi ha prou diners per retirar.
            a partir d'això podem plantejar el promise.
        */

        //promesa: et promet que et tornarà la informació en algun moment, no sap quan, pero ho farà. cute name. 
        return new Promise ((resolve, reject)=>{
            //la promesa sempre té aquesta estructura
            if (cantidadDinero > saldo) {
                reject("No hay suficiente saldo.")
            } else {
                saldo -= cantidadDinero; //resto la quantitat que vull treure al saldo i assigno nou valor
                resolve(saldo);
                //el resolve no és obligatori
            }
        }); //fins aqui la promesa

    }

    retirarDinero(300)
        .then((saldo)=>console.log(`Operación completada con éxito. El saldo actual es de: ${saldo}`))
        //then se usa en caso de éxito (resolve).
        .catch((err)=>console.error(err)); //catch se usa en caso de error
        //si no se pone ; despues de then se puede resumir asi ^ 
        //console.error o console.warn cambia el color del mensaje
    
    /**
        èxit. mostrar per pantalla un missatge que sigui (`Operación completada con éxito. Has sacado xxx El saldo actual es de: ${saldo}`)
        fracàs: no hi ha saldo, printar error.
    */
})();

/* btw:
    en caso de que Promise y resolve, reject den error por definición de tipo de variable, hay que ir al config.JAAAAAASON y cambiar el target de "es5" a "es2015" 
*/

(()=>{
    /* ejercicio -> Promise
        aplicación que ejecute una promesa y evalue dos casos, resolve y reject. Una promesa que ejecute un temporizador (time out), lo unico que tiene que hacer es comprobar si la conexión ha sido exitosa o no
        si exito = resolve, si no reject. 
    */

    console.log('Inici');
  
    const promesa = new Promise((resolve, reject) => {
        setTimeout (()=>{
            const exito = true;
            if(exito) { 
                //si solo se pone el nombre de la variable es lo mismo que poner exito == true, pero mas vago heeho
                resolve ('Se terminó el Timeout');
            } else {
                reject('error');
            }
        }, 2000)
    });
 
    promesa
        .then (missatge => console.log(missatge))
        .catch (err => console.log(err));

    console.log('Final');
})();

//https://anexsoft.com/ejemplo-practico-de-promise-con-javascript <- ejemplo de Promise con js

(()=>{ //coge datos externos :O

    const promesa = new Promise( (resolve, reject)=> {
        const connection = new XMLHttpRequest(); //esta en desús i ara es comença el fetch
        const URL = 'https://jsonplaceholder.typicode.com/posts';

        connection.open('GET', URL);//fetch

        connection.onload = () => {
            if (connection.status == 200) {
                resolve(JSON.parse(connection.response));
            } else {
                reject('Error con la conexión a los datos');
            }
        };

        connection.send();
    });
    
    promesa
        .then( missatge => console.log(missatge))
        .catch (err => alert(err));
    })();