
var worker;

function lanzarWorker() {

    worker = new Worker("ejHora.js");
    worker.onmessage = function (evt) {

        var reloj = evt.data.split(":");

        for (var i = 0; i < reloj.length; i++) {

            if (reloj[i] < 10)
                reloj[i] = "0" + reloj[i];
        }
        
        document.getElementById("hora").style.color = generarCodigo(6);
        document.getElementById("hora").innerHTML = reloj[0] + ":" + reloj[1] + ":" + reloj[2];
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
function cambiarHora() {
    

}
function generarCodigo(longitud) {

    var codigo = "";

    for (var i = 0; i < longitud; i++) {
        codigo += Math.floor(Math.random() * longitud);
    }
    return "#"+codigo;
}

lanzarWorker();
document.getElementById("btnReiniciar").addEventListener("click", reiniciar);
document.getElementById("btnParar").addEventListener("click", parar);