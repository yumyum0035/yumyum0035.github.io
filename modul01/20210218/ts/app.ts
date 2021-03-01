(()=>{

  // Uso de Let y Const
  const nombre = 'Ricardo Tapia'; //si no tenemos claro que va a cambiar o no lo ponemos como let
  let edad = 23;

  const PERSONAJE = {
    nombre: nombre,
    edad: edad
  };
  
  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Hero {
    nombre: string;
    artesMarciales: string[];
  }

  const batman: Hero = {
    nombre: 'Bruno Díaz', 
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  };

  console.log(batman);

  // Convertir esta funcion a una funcion de flecha
  let resultadoDoble = (a:number, b:number)=>(a + b) * 2;
  console.log(resultadoDoble(4,6));

/* Función con parametros obligatorios, opcionales y por defecto
  donde NOMBRE = obligatorio 
        PODER  = opcional 
        ARMA = por defecto = 'arco'
*/
/* version fiel al ejercicio pero no correcta porque soy una nerd:
let getAvenger = (nombre:string, poder?:string, arma:string = 'arco') => {
    let mensaje:string = ``;
    if(poder != undefined){
      mensaje = `${nombre} tiene el poder de ${poder} y un arma: ${arma}`;
    } else{
      mensaje = `${nombre} tiene un poder: ${poder}`;
    }

    return console.log(mensaje);
  };
*/

let getAvenger = (alias:string, nombre:string, poder:string, arma?:string) => {
  let mensaje:string;
  if (arma != undefined) {
    mensaje = `${nombre} (${alias}) tiene el poder de ${poder} y un arma: ${arma}.`;
  } else{
    mensaje = `${nombre} (${alias}) tiene el poder de ${poder}.`;
  }

  return console.log(mensaje);
}

getAvenger('Antman','Scott Lang','reducir o aumentar su tamaño', undefined);

/* Cree una clase que permita manejar la siguiente estructura
  La clase se debe de llamar rectangulo,
  debe de tener dos propiedades:
    * base
    * altura
  También un método que calcule el área  =  base * altura,
  ese método debe de retornar un numero.
*/
  class rectangulo {
    constructor(public base:number, public altura:number){
      this.base = base,
      this.altura = altura
    }

    areaRect() {
      return this.base * this.altura;
    }
  }
})();