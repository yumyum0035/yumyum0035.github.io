//var ciudades = ["Barcelona", "Tokyo", "London", "Paris", "New York"];
var ciudades = ["Zürich","Madrid","Tokyo","Caracas", "Granollers", "Girona", "Toledo", "Mérida", "Barcelona", "London", "Paris", "New York"];
var table = "<tr><th>Ciudades</th></tr>";

//versión con for
    for (var i=0; i<ciudades.length ; i++) {
        table += "<tr><td>"+ciudades[i]+"</td><td><img src='img/image_"+i+".jpg' alt='"+ciudades[i]+"'></td></tr>";
    }

var i = 0;

while (i < ciudades.length) {
    table += "<tr><td>"+ciudades[i]+"</td><td><img src='img/image_"+i+".jpg' alt='"+ciudades[i]+"'></td></tr>";
    i++;
}

document.getElementById("cityList").innerHTML = table;

var palabraSecreta = 'sesamo';

//ejecuta (do) el codigo al menos una vez y luego continua mientras la condicion no se cumpla
do {
    var respuesta = prompt("¿Cuál es la palabra secreta?");
} while (respuesta !== palabraSecreta);