//JS Objects

/* quan tenim elements que poden tenir característiques pròpies és millor treballar amb objectes.
els objectes poden tenir propietats (vars?) i mètodes interns (functions?)
*/

//create object
var car = {
    type: "Fiat",
    model: "500",
    color: "white" //la ultima propiedad no necesita una coma porque no hay nada detrás
};

console.log(car.model); //accedemos a la propiedad model del objeto car

/*
OBJECTE:
objecte Persona (firstName, lastName, birthYear, family[],job, isMarried)
console mostreu el primer nom de la persona
*/

var person = {
    firstName: 'Coni',
    lastName: 'Herrera',
    birthYear: 1993,
    family: ["Mama", "Pol","Mixu"],
    job: 'Aventurer in Eorzea',
    isMarried: false,
    nombreCompleto: function() {
                    //esta function me devolverá el nombre de este objeto + el apellido
                    return this.firstName + " " + this.lastName;
                    },
    calcularEdad: function() {
                    return 2021 - this.birthYear;
                    },
    familyCount: function() {//conta i retorna quants familiars te la person
                    return this.family.length;
    }
};

console.log(person.job);

person.job = 'Machinist';
console.log(person.job);

/*  .this se usa para acceder a algo que está dentro de una instancia sin necesidad de saber el nombre de dicha instancia, es más genérico. 
*/

console.log(person.nombreCompleto()+", "+person.calcularEdad()+" años. Tiene "+person.familyCount()+" familiares.");