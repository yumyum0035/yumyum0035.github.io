// PREVIA A OBJETOS : deestructuración de arrays

let persona = ['Coni Herrera', 27, 'Catalunya', 'Machinist'];
//array con una serie de datos

const [arrayName, , country, job = 'No especificado'] = persona;
//esto sirve para etiquetar elementos de un array, pero es un poco inutil porque OBJETOS.
//'no especificado' añade el valor personalizado que evita que salga undefined

let mostrarInfo = (p) => console.log(p);

//mostrarInfo(country);
//basicamente aqui lo que hacemos es usar etiquetas para no tener que ir a la posicion del array, es decir en lugar de persona[0] hacemos name directamente.

//OBJETOS
const Usuari = { //se recomienda poner los nombres de los objetos con mayuscula inicial
    nom: 'Marc',
    email: 'marc@jahoentenc.cat',
    edat: 56,
    telefon: 9999
}
//destructuració: normalmente de hace asi para usar los parametros del objeto fuera
const {nom, edat, email} = Usuari; //quan utilitzi nom o email han de pertanyer al objecte Usuari

//destructurar dentro del parametro de la funcion, tiene que recibir parametros que coincidan con lo que hay en el objeto o su destructuración
let userInfo = ({nom, edat, email}) => console.log(`L'usuari es diu ${nom}, té ${edat} anys i el seu email es ${email}.`);

//userInfo(Usuari);

//constructor d'instancies
class UserType { //una class es para crear instancias de objetos
    constructor(nombre, edat, email) { //per crear instancias es necesita un metode constructor
        this.name = nombre, //si volem que les instancies heredin les caracteristiques han de tenir el this
        this.email = email,//coma per cada nou element
        this.age = edat; //la ultima propietat o va sense coma o va amb punt i coma
    }

    mostrarSaludo(msg) {//hacer un metodo que muestre en pantalla las caracteristicas del tecnico1
        console.log(`${msg}, que se llama ${this.name}`);
    }

    //lo importante es que si se quieren usar las propiedades del objeto se use .this
    showData() {//hacer un metodo que muestre en pantalla las caracteristicas del tecnico1
        return `<h3>${this.name}</h3>
        <ul>
            <li>Nombre: ${this.name}</li>
            <li>e-mail: ${this.email}</li>
            <li>edad: ${this.age}</li>
        </ul>`;
    }
}

//instancia
let tecnico1 = new UserType('Albert', 'albert@profe.com',47); //aquest objecte sera una instancia de clase UserType
let tecnico2 = new UserType('Marc','marc@jaentenc.com',23);

//tecnico1.mostrarSaludo('Este mensaje viene del técnico 1');
//tecnico2.mostrarSaludo('Este mensaje viene del técnico 2');

document.write(tecnico1.showData());
document.write(tecnico2.showData());


//herencias
class Estudiante extends UserType { //extends significa que Estudiante viene de UserType
    constructor (nom, edat, email, profesor) { //por mucho que herede de UserType, necesita nuevas propiedades, por tanto redefinimos el constructor
        super(nom, edat, email); //punto y comaaa
        this.profesor = profesor;
    }

    showData() {
        return `<h3>${this.name}</h3>
        <ul>
            <li>Nombre: ${this.name}</li>
            <li>e-mail: ${this.email}</li>
            <li>edad: ${this.age}</li>
            <li>profesor: ${this.profesor}</li>
        </ul>`;
    }
}

let alumno1 = new Estudiante('Coni', 27, 'info@miau.com','Albert');
let alumno2 = new Estudiante('Marina', 18, 'marina@m.com', 'Quique');

document.write(alumno1.showData());
document.write(alumno2.showData());

//Reto 1 OBJ
// 1. Crear objeto john con un método calculateAge, y campos name y yearOfBirth. Mostrar por consola el contenido de this.
// 2. Crear una función calculateAge y mostrar por consola el contenido de this dentro de la función.
// 3. Mostrar por consola el contenido de this fuera de la función y el método creado.
let john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
      // Mostramos por consola el this
      console.log("This dentro del objeto John", this);
      console.log("Edad de John es: ", 2019 - this.yearOfBirth);
    }
};

function calculateAge(year) {
console.log("La edad de John calculada por la función es: ", 2021 - year);
console.log("This dentro de la función: ", this);
}

john.calculateAge();
calculateAge(1943);

// class person {
//     constructor(name, surname, yearOfBirth){
//         this.name = name,
//         this.surname = surname,
//         this.yearOfBirth = yearOfBirth;
// }

//     calculAge(currentYear) {
//         console.log(`${this.name} ${surname} tiene ${currentYear-this.yearOfBirth} años`);
//     }
// }