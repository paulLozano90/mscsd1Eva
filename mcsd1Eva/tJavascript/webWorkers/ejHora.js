
var reloj = new Date();

var horas = reloj.getHours();
var minutos = reloj.getMinutes();
var segundos = reloj.getSeconds();

function bajar() {

    segundos++;

    if (segundos == 60) {
        minutos++;
        segundos = 0;
        if (minutos == 60) {
            horas++;
            minutos = 0;
            segundos = 0;
        }
    }

    postMessage(horas + ":" + minutos + ":" + segundos);
    setTimeout("bajar()", 1000);
}

self.onmessage = function (evt) {
    if (evt.data == "reiniciar") {
        horas = 0;
        minutos = 0;
        segundos = 0;
    }
}

bajar();