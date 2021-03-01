var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var acabar= new Date(2021,0,22,11,30);

/* exercisi: Mostrar la hora bé amb una funció

posar un zero davant de les hores, minuts i segons en cas de que siguin de una xifra

*/
function showZeros(param) { //afegeix un zero abans els nombres amb una xifra
    if (param < 10) {
        param = "0"+param;
    }
    return param;
}
/* extra:
   recuperar hora actual y compare con las 11 y media (cuanto falta para acabar la clase)
*/
function endClass() { //versión de Zdravko !! :)
    var diffMs = (acabar-date);  //milisegundos
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); //pasa milisegundos (que hay en un dia) a horas
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); //pasa milisegundos a minutos
    var diffSecs = Math.floor((diffMs%60000)/1000); //pasa milisegundos a segundos
    document.getElementById("classEnd").innerHTML='Tiempo para acabar la clase: '+ showZeros(diffHrs) + ":" + showZeros(diffMins) + ":"+ showZeros(diffSecs);
}
//endClass();

var interval = setInterval(endClass(acabar, date),1000);

//setTimeout es un temporizador! -> ejectua algo pasado X segundos
//setInterval ejecuta algo durante x tiempo -> parecido a un eventTick() en unreal?

/* exercisi 3: fer que el temps es vagi fent update en viu!*/
function updateTime() {
    document.getElementById("currentTime").innerHTML=hour+":"+minutes+":"+seconds;
}

document.getElementById("currentDate").innerHTML="La fecha actual es "+date;
document.getElementById("currentTime").innerHTML="La hora actual es "+showZeros(hour)+":"+showZeros(minutes)+":"+showZeros(seconds);