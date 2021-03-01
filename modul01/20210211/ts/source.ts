//typescript: empezamos

//treballarem amb typescript pero generara un .js que fara servir el navegador

(function (){
    function saludar(nom: string) {//aqui hay que decirle que tipo de variable quiere recibir. welcome back to c++ /cry
        console.log('Hola '+nom);
    }
    
    const JUGADOR = {
        nom: 'Leo'
    }

    const mensaje = (msg:string) => console.log(msg);
    
    saludar(JUGADOR.nom);
    mensaje(`ola k ase`);
})();

/* para compilar ts a js:
    desde la consola: tsc carpeta/nomarxiu.ts  y crea automaticamente el .js. boom. magia.
*/

/* OJO:
    Al poner todo el codigo de ts dentro de (function(){}) para que no de errores de function duplicada.

    en TS se puede trabajar con ECMA6 y luego él se encarga de convertirlo en js antiguo (si queremos)

    para generar un JAAASOOOOON hay que hacer tsc --init (es british). Si se hacen cambios en el JAAAAASOOON hay que reiniciar visual code.
*/

/* para compilar automaticamente:
    tsc -w
*/

