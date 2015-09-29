
var saludo = function (texto) {
    alert("Hola " + texto.target.outerText);
}

function saludando(texto) {
    alert("Hola " + texto.target.outerText);
}

//El outerText recogera el texto del elemento(boton)

document.getElementById("btn1").onclick = saludo;
document.getElementById("btn2").onclick = saludando;

//Funcion anonima:

//document.getElementById("btn3").onclick = function (e) {
//    alert("Hola " + e.target.outerText);
//}

//Funcion autoinvocable

(function () {
    document.getElementById("btn4").onclick = function (evt) {
        alert("Hola " + evt.target.id);
    };
})();