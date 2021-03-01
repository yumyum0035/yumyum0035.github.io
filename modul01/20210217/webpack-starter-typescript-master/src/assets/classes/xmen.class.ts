export class Xmen {//hay que poner export si queremos que funcione!!

    constructor(public name:string, public clau:string) {
        // this.name = name;
        // this.clau = clau;
    }

    imprimir (){
        console.log(`${this.name} - ${this.clau}`);
    }
}