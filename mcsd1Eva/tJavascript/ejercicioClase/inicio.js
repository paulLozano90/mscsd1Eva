
var url = "https://alumnoscurso.azure-mobile.net/Tables/Clase19/";

if (!localStorage.getItem("nombre"))
    location.replace("registro.html");

function borrarSesion() {
    
    localStorage.clear();
    location.replace("registro.html");
}

function datosSitio() {
    
    var datos = {
        nombre: localStorage.getItem("nombre"),
        x: parseInt($("#txtX").val()),
        y: parseInt($("#txtY").val()),
        ancho: parseInt($("#txtAncho").val()),
        alto: parseInt($("#txtAlto").val()),
        color: $("#txtColor").val()
    };
    return datos;
}

function guardarSitio(e) {

    e.preventDefault();

    $.ajax({
        method: "post",
        url: url,
        success: function () {
            console.log("Datos guardados");
            mostrarSitio();
        },
        error: function (err) {
            console.log(err);
        },
        data: JSON.stringify(datosSitio()),
        datatype: "json",
        headers: {"Content-Type": "application/json"}
    });
}

function mostrarSitio() {

    var x = parseInt($("#txtX").val());
    var y = parseInt($("#txtY").val());
    var ancho = parseInt($("#txtAncho").val());
    var alto = parseInt($("#txtAlto").val());
    var color = $("#txtColor").val();

    var canvas = document.getElementById("clase");
    var contexto = canvas.getContext("2d");
    
    contexto.fillStyle = color;
    //Posicion eje x,y, ancho y alto
    contexto.fillRect(x, y, ancho, alto);
}

document.getElementById("usuario").innerHTML = "Hola, "+localStorage.getItem("nombre") + ":";
document.getElementById("btnBorrar").addEventListener("click", borrarSesion);
document.getElementById("btnEnviar").addEventListener("click", guardarSitio);