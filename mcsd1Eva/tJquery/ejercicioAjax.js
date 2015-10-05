var url = "https://alumnoscurso.azure-mobile.net/Tables/Curso/";

$(document).ready(function () {

    crearTabla();
    $("#nuevoRegistro").hide();
    $("#btnCrear").click(mostrarRegistro);
    $("#btnAnadir").click(crearCurso);
    $("#btnRefrescar").click(crearTabla);

    //Tambien podemos usar el .bind en vez de
    //usar el .click para cualquier otro tipo de evento.

    //$("...").bind("click",funcion);
});

function crearTabla() {

    $.getJSON(url, function (curso) {
        $("#datosTabla tbody").html("");
        $.each(curso, function (i, elemento) {

            var fila = "<tr>"
                    + "<td>" + elemento.nombre + "</td>"
                    + "<td>" + elemento.duracion + "</td>"
                    + "<td><button class='btn btn-default btn-curso'>Borrar</button></td>"
                    + "<td><button class='btn btn-default btn-curso'>Modificar</button></td>"
                    + "</tr>";

            if (curso === "") {
                fila = "<p>No hay elementos en la tabla...</p>";
                $(fila).appendTo("#datosTabla tbody");
            } else {
                $(fila).appendTo("#datosTabla tbody");
            }

            
        });
    });
}

function mostrarRegistro() {

    $("#nuevoRegistro").show();
}

function datosCurso() {

    var datos = {
        nombre: $("#txtNombre").val(),
        duracion: parseInt($("#txtDuracion").val())
    };
    return datos;
}

function crearCurso(e) {

    $("#nuevoRegistro").show();
    e.preventDefault();

    $.ajax({

        method: "post",
        url: url,
        success: function (res) {
            console.log(res);
            crearTabla();
            $("#nuevoRegistro").hide();
        },
        error: function (err) {
            console.log(err);
        },
        data: JSON.stringify(datosCurso()),
        datatype: "json",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function borrarCurso(id) {

    e.preventDefault();
    
    $.ajax({

        method: "delete",
        url: url + "/" + id,
        success: function (res) {
            console.log(res);
            crearTabla();
        },
        error: function (err) {
            console.log(err);
        }
    });
}
