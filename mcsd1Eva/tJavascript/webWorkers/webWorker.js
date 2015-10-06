
var worker;

function lanzarWorker() {

    worker = new Worker("temporizador.js");
    worker.onmessage = function (evt) {

        var reloj = evt.data.split(":");

        for (var i = 0; i < reloj.length; i++) {

            if (reloj[i] < 10)
                reloj[i] = "0" + reloj[i];
        }

        document.getElementById("segundos").innerHTML = reloj[0] + ":" + reloj[1] + ":" + reloj[2];

        //if (evt.data === 60) {

        //    location.reload();
        //}
    }
}
function parar() {
    worker.terminate();
    worker = undefined;
}
function reiniciar() {
    if (worker == undefined)
        lanzarWorker();
    else
    worker.postMessage("reiniciar");
}

lanzarWorker();
document.getElementById("btnReiniciar").addEventListener("click", reiniciar);
document.getElementById("btnParar").addEventListener("click", parar);