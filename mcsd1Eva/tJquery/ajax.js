var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno/";

$(document).ready(function () {

    $("#lnkGet").click(conGet);
    $("#lnkGetJson").click(conGetJson);
    $("#lnkPost").click(conPost);
    $("#lnkAjax").click(conAjax);
    $("#lnkLoad").click(conLoad);
});

function procesarJson(res) {

    var r = "";

    for (var i = 0; i < res.length; i++) {

        r += res[i].nombre + "<br />";
    }

    $("#resultado").html(r);
}

function conGet(e) {

    e.preventDefault();
    $.get(url, procesarJson);
}

function conGetJson(e) {

    e.preventDefault();
    $.getJSON(url, procesarJson);
}
//Va dar error...
function conPost(e) {

    e.preventDefault();
    var o = {
        nombre: "Luis",
        apellidos: "yo",
        edad: 22,
        nota: 7
    };
    $.post(url, JSON.stringify(o), function(res) {
        console.log(res);
    });
}

function conAjax(e) {
    e.preventDefault();
    var o = {
        nombre: "Luis",
        apellidos: "yo",
        edad: 22,
        nota: 7
    };
    $.ajax({
        //Metodo que voy a emplear (post,get...)
        method: "post",
        url: url,
        //Aqui le decimos que hacer despues de acabar
        success: function(res) {
            console.log(res);
        },
        //Funcion o que hacer si hay error
        error: function(err) {
            console.log(err);
        },
        data: JSON.stringify(o),
        //Tipo de datos que voy a enviar
        datatype: "json",
        //Nombre de las cabeceras que voy a enviar
        headers: {"Content-Type":"application/json"
        }
    });
}

function conLoad(e) {

    e.preventDefault();
    $("#resultado").load(url);
}