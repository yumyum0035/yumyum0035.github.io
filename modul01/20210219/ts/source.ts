
/* //EXERCICI OBJECTES:
    1.- Crea una aplicació que mostri les dades, per pantalla d'un cotxe: matricula, marca, color. Aquest cotxe ha de ser un objecte.

    2.- Ara fes un formulari perquè l'usuari pugui omplir les dades del cotxe a crear. Un cop acceptat han d'aparèixer per patnalla. El formulari ha de validar que la matrícula sigui del format 4444XXX, és a dir, 4 números i 3 lletras majúscules.

    3.- Ara farem que al crear un cotxe, amagui el formulari i mostri un altre a on es demana les dades de les 4 rodes del cotxe:marca roda 1, diamétre roda 1,..... fins les 4 rodes.

    4.- Millora l'aplicació fent que el formulari de les rodes controli que cada roda té un diàmetre entre 0.4 i 2. No es podrà afegir cap roda al coche si prèviament no han estat validades les 4 rodes

*/

class Car {
    constructor(public matricula:string, public marca:string, public color:string, public ruedas?:Wheels) {
        this.matricula = matricula;
        this.marca = marca;
        this.color = color;
        this.ruedas = ruedas;
    }

    addWheels() {
        let wheelBrand = (document.getElementById("marcaRueda") as HTMLInputElement);
        let wheelDiameter = (document.getElementById("diametroRueda") as HTMLInputElement);

        if(parseFloat(wheelDiameter.value) >= 0.4 && parseFloat(wheelDiameter.value)<=2) {
            this.ruedas = new Wheels(wheelBrand.value, parseFloat(wheelDiameter.value));
        } else {
            alert("El diámetro de las ruedas debe ser entre 0.4 y 2");
        }
    }
}

class Wheels{
    constructor(public wheelBrand:string, public diameter:number) {
        this.wheelBrand = wheelBrand;
        this.diameter = diameter;
    }
}

document.getElementById("wheels")!.style.display = "none";

let cotxe:Car;

function createCar() {
    let getPlate = (document.getElementById("plate") as HTMLInputElement);
    let getBrand = (document.getElementById("brand") as HTMLInputElement);
    let getColor = (document.getElementById("color") as HTMLInputElement);
    let error = 0;

    //validar por js
    let plateValidation = /^[0-9]{4}[A-Z]{3}$/;
    if(!plateValidation.test(getPlate.value)) {
        alert("No es una matrícula válida. 4 números y 3 letras mayúsculas.");
        error++;
    }

    if (getBrand.value == '') {
        alert("La marca no es válida.")
        error++;
    }

    if (getColor.value == '') {
        alert("El color no es válida.")
        error++;
    }

    if (error == 0) {
        cotxe = new Car(getPlate.value, getBrand.value, getColor.value);
    }
}

function displayData(showCarData: boolean) {
    if (showCarData == true) {
        document.getElementById("carPlateResult")!.innerHTML = `Car plate: ${cotxe.matricula}`;
        document.getElementById("carBrandResult")!.innerHTML = `Car brand: ${cotxe.marca}`;
        document.getElementById("carColorResult")!.innerHTML = `Car color: ${cotxe.color}`;

        document.getElementById("carInfo")!.style.display = "none";
        document.getElementById("wheels")!.style.display = "block";
    } else {
        document.getElementById("wheelBrandRes")!.innerHTML = `The wheels data in the car with plate ${cotxe.matricula} are: <p>Wheel brand: ${cotxe.ruedas?.wheelBrand}</p>`;
        document.getElementById("wheelDiameterRes")!.innerHTML = `Wheel diameter: ${cotxe.ruedas?.diameter}`;
        document.getElementById("wheels")!.style.display = "none";
    }
}

document.getElementById("carGenerate")!.addEventListener("click",()=>{
        createCar();
        displayData(true);
});

document.getElementById("addWheels")!.addEventListener("click",()=>{
        cotxe.addWheels();
        displayData(false);
});