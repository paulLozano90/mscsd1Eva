
function reloj() {

    var date = new Date();

    var horas = date.getHours();
    var minutos = date.getMinutes();
    var segundos = date.getSeconds();

    postMessage(horas + ":" + minutos + ":" + segundos);
    setTimeout("reloj()", 1000);
}

self.onmessage = function (evt) {

    if (evt.data == "reiniciar") {
        reloj();
    }
}

reloj();