"use strict";
(() => {
    const retirarDinero = (cantidadDinero) => {
        let saldo = 1000;
        return new Promise((resolve, reject) => {
            if (cantidadDinero > saldo) {
                reject("No hay suficiente saldo.");
            }
            else {
                saldo -= cantidadDinero;
                resolve(saldo);
            }
        });
    };
    retirarDinero(300)
        .then((saldo) => console.log(`Operación completada con éxito. El saldo actual es de: ${saldo}`))
        .catch((err) => console.error(err));
})();
(() => {
    console.log('Inici');
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve('Se terminó el Timeout');
            }
            else {
                reject('error');
            }
        }, 2000);
    });
    promesa
        .then(missatge => console.log(missatge))
        .catch(err => console.log(err));
    console.log('Final');
})();
(() => {
    const promesa = new Promise((resolve, reject) => {
        const connection = new XMLHttpRequest();
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        connection.open('GET', URL);
        connection.onload = () => {
            if (connection.status == 200) {
                resolve(JSON.parse(connection.response));
            }
            else {
                reject('Error con la conexión a los datos');
            }
        };
        connection.send();
    });
    promesa
        .then(missatge => console.log(missatge))
        .catch(err => alert(err));
})();
