"use strict";
var Car = (function () {
    function Car(matricula, marca, color, ruedas) {
        this.matricula = matricula;
        this.marca = marca;
        this.color = color;
        this.ruedas = ruedas;
        this.matricula = matricula;
        this.marca = marca;
        this.color = color;
        this.ruedas = ruedas;
    }
    Car.prototype.addWheels = function () {
        var wheelBrand = document.getElementById("marcaRueda");
        var wheelDiameter = document.getElementById("diametroRueda");
        if (parseFloat(wheelDiameter.value) >= 0.4 && parseFloat(wheelDiameter.value) <= 2) {
            this.ruedas = new Wheels(wheelBrand.value, parseFloat(wheelDiameter.value));
        }
        else {
            alert("El diámetro de las ruedas debe ser entre 0.4 y 2");
        }
    };
    return Car;
}());
var Wheels = (function () {
    function Wheels(wheelBrand, diameter) {
        this.wheelBrand = wheelBrand;
        this.diameter = diameter;
        this.wheelBrand = wheelBrand;
        this.diameter = diameter;
    }
    return Wheels;
}());
document.getElementById("wheels").style.display = "none";
var cotxe;
function createCar() {
    var getPlate = document.getElementById("plate");
    var getBrand = document.getElementById("brand");
    var getColor = document.getElementById("color");
    var error = 0;
    var plateValidation = /^[0-9]{4}[A-Z]{3}$/;
    if (!plateValidation.test(getPlate.value)) {
        alert("No es una matrícula válida. 4 números y 3 letras mayúsculas.");
        error++;
    }
    if (getBrand.value == '') {
        alert("La marca no es válida.");
        error++;
    }
    if (getColor.value == '') {
        alert("El color no es válida.");
        error++;
    }
    if (error == 0) {
        cotxe = new Car(getPlate.value, getBrand.value, getColor.value);
    }
}
function displayData(showCarData) {
    var _a, _b;
    if (showCarData == true) {
        document.getElementById("carPlateResult").innerHTML = "Car plate: " + cotxe.matricula;
        document.getElementById("carBrandResult").innerHTML = "Car brand: " + cotxe.marca;
        document.getElementById("carColorResult").innerHTML = "Car color: " + cotxe.color;
        document.getElementById("carInfo").style.display = "none";
        document.getElementById("wheels").style.display = "block";
    }
    else {
        document.getElementById("wheelBrandRes").innerHTML = "The wheels data in the car with plate " + cotxe.matricula + " are: <p>Wheel brand: " + ((_a = cotxe.ruedas) === null || _a === void 0 ? void 0 : _a.wheelBrand) + "</p>";
        document.getElementById("wheelDiameterRes").innerHTML = "Wheel diameter: " + ((_b = cotxe.ruedas) === null || _b === void 0 ? void 0 : _b.diameter);
        document.getElementById("wheels").style.display = "none";
    }
}
document.getElementById("carGenerate").addEventListener("click", function () {
    createCar();
    displayData(true);
});
document.getElementById("addWheels").addEventListener("click", function () {
    cotxe.addWheels();
    displayData(false);
});
