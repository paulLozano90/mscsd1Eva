﻿
var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno/";

function obtenerDatos() {

    var ajax = new XMLHttpRequest();

    ajax.open("get", url);
    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300) {

                var data = JSON.parse(ajax.responseText);
                var salida = "<table>";

                //Azure limita a 50 registros de salida
                for (var i = 0; i < data.length; i++) {
                    salida += "<tr>";
                    salida += "<td>" + data[i].nombre + "</td>";
                    salida += "<td>" + data[i].edad + "</td>";
                    salida += "</tr>";
                }
                salida += "</table>";
                document.getElementById("alumnos").innerHTML = salida;

            } else {
                alert("Error de peticion");
                console.log(ajax.error);
            }
        }
    };
    ajax.send(null);
}

function guardarDatos() {

    var obj = {
        nombre: document.getElementById("txtNombre").value,
        apellidos: document.getElementById("txtApellidos").value,
        edad: document.getElementById("txtEdad").value,
        nota: document.getElementById("txtNota").value
    };

    var ajax = new XMLHttpRequest();

    ajax.open("post", url);
    //Manda una cabecera adicional para que lo traduzca
    ajax.setRequestHeader("Content-Type", "application/json");

    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {

            if (ajax.status >= 200 && ajax.status < 300) {

                obtenerDatos();

            } else {
                alert("Error de envio");
            }
        }        
    };
    var data = JSON.stringify(obj);
    ajax.send(data);
}

obtenerDatos();
document.getElementById("btnEnviar").onclick = guardarDatos;