//interface
/*
    una interface es una especie de clase, pero no tiene métodos, solo tiene propiedades. define las reglas que tendrá un tipo de dato determinado. Es como un :any personalizado y acotado
*/

(()=>{
    interface Xmen { //es escalable!
        //la interface separa con ;
        nombre: string;
        edad: number;
        poderes: string;
        aspecto: string;
        nacionalidad?: string; //con ? es opcional
        //no se pueden poner valores default.
        otros?: string;
    }

    const enviarMision = (xmen:Xmen) =>{
        //le pasamos los parametros del objeto para evitar añadir parametros que no existen
        console.log(`Enviamos a ${xmen.nombre} a la misión`);
        if (xmen.otros != undefined) {
            console.log(`Otra información sobre el X-men en cuestión: ${xmen.poderes}, ${xmen.aspecto}, ${xmen.otros}`);
        } else {
            console.log(`Otra información sobre el X-men en cuestión: ${xmen.poderes}, ${xmen.aspecto}.`);
        }
    }

    const lobezno: Xmen = {
        nombre: 'Logan',
        edad: 60,
        poderes: 'regeneración',
        aspecto: 'desarreglado',
        nacionalidad: 'Canada'
    }

    const deadpool: Xmen = {
        nombre: 'Wade',
        edad: 20,
        poderes: 'regeneración, pero mejor que Lobezno',
        aspecto: 'parece Spiderman',
        nacionalidad: 'Canada',
        otros: 'No es realmente un X-men'
    }

    enviarMision(lobezno);
    enviarMision(deadpool);
})();

//classe

(()=>{

    class Avenger {
        /*
            nombre: string;
            nombreReal: string;
            equipo: string;
            edad: number;
            combate: boolean;
            peleasGanadas: number;
            casado: boolean;
        */

        constructor(public nombre:string, 
                    public nombreReal:string, 
                    public equipo: string, 
                    public edad: number, 
                    public combate: boolean, 
                    public peleasGanadas: number = 0, 
                    public casado: boolean){
            //amb public ara podem afegir coses directament a dalt i ens estalviem el que tenim comentat
            this.nombre = nombre,
            this.nombreReal = nombreReal,
            this.equipo = equipo,
            this.edad = edad,
            this.combate = combate,
            this.peleasGanadas = peleasGanadas,
            this.casado = casado
        }

        
    }
    
    let antman = new Avenger ('Antman','Scott Lang', 'Avenger', 50, true, 5, true);
    let spiderman = new Avenger ('Spiderman', 'Peter Parker', 'ninguno', 15, true, 3, false);
    let deadpool = new Avenger ('Deadpool', 'Wade Wilson', 'ninguno, jaja creías que los Disney permitiría esto?', 50, true,100, true);

})();