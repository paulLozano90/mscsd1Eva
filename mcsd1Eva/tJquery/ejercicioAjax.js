var url = "https://alumnoscurso.azure-mobile.net/Tables/Curso/";

$(document).ready(function () {

    crearTabla();
    $("#nuevoRegistro").hide();
    $("#btnCrear").click(mostrarRegistro);
    $("#btnAnadir").click(crearCurso);
    $("#btnRefrescar").click(crearTabla);
});

function crearTabla() {

    $.getJSON(url, function (curso) {
        $("#datosTabla tbody").html("");
        $.each(curso, function (i, curso) {

            var fila = "<tr>"
                    + "<td>" + curso.nombre + "</td>"
                    + "<td>" + curso.duracion + "</td>"
                    + "<td><button class='btn btn-default btn-curso'>Borrar</button></td>"
                    + "<td><button class='btn btn-default btn-curso'>Modificar</button></td>"
                    + "</tr>";

            $(fila).appendTo("#datosTabla tbody");
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
