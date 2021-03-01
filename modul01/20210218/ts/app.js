"use strict";
(function () {
    var nombre = 'Ricardo Tapia';
    var edad = 23;
    var PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    var batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    console.log(batman);
    var resultadoDoble = function (a, b) { return (a + b) * 2; };
    console.log(resultadoDoble(4, 6));
    var getAvenger = function (alias, nombre, poder, arma) {
        var mensaje;
        if (arma != undefined) {
            mensaje = nombre + " (" + alias + ") tiene el poder de " + poder + " y un arma: " + arma + ".";
        }
        else {
            mensaje = nombre + " (" + alias + ") tiene el poder de " + poder + ".";
        }
        return console.log(mensaje);
    };
    getAvenger('Antman', 'Scott Lang', 'reducir o aumentar su tamaño', undefined);
    var rectangulo = (function () {
        function rectangulo(base, altura) {
            this.base = base;
            this.altura = altura;
            this.base = base,
                this.altura = altura;
        }
        rectangulo.prototype.areaRect = function () {
            return this.base * this.altura;
        };
        return rectangulo;
    }());
})();
