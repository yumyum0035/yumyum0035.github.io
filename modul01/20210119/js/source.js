/* Para entender las funciones con parámetros de fuera:
1) Hoy haremos una función que se llama encontrar mayor y que hará una comparación: si numero 1 es mayor que numero 2, me mostrará un alert/consolelog que diga "el primer numero es mayor"
*/

/* 
2) hacer que esta funcion haga su trabajo y luego nos devuelva el fruto de su trabajo.
*/

function isGreater (num1, num2) { //1
    var result;
    if(num1>num2) {
        result = "The first number ("+num1+") is greater";
        // alert(resultado);
    } else {
        result = "The second number ("+num2+") is greater";
        // alert(resultado); 
    }
    
    return result; //2 -> devuelve algo
}

precio = parseFloat(prompt("Tell me which price you'd like to know"));
precioIVA = IVA(precio);
alert("el precio sin IVA es de "+precio+" y su IVA es de "+precioIVA+", por tanto el precio final queda en "+(precio+precioIVA)+".");

function IVA (num1) {
    var nuevoPrecioIVA = (num1*0.21);

    return nuevoPrecioIVA
}

//propuesta de ejercicio: calculadora en la cual te pida dos numeros y segun pongas + - * / haga el cálculo