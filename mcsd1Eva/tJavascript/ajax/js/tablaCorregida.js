
var url = "https://alumnoscurso.azure-mobile.net/Tables/Curso/";

function datosAdd() {

    var datos = {
        nombre: document.getElementById("txtNombre").value,
        duracion: parseInt(document.getElementById("txtDuracion").value)
    };
    return datos;
}

function createTable(data) {

    var tabla = document.getElementById("lista");
    var resultado = "<table>"

    for (var i = 0; i < data.length; i++) {
        resultado += "<tr>";
        resultado += "<td>" + data[i].nombre + "</td>";
        resultado += "<td>" + data[i].duracion + "</td>";
        resultado += "<td><button type='button' class='borrar' "
                  + " onclick='borrar(\""+ data[i].id +"\")' "
                  + ">Borrar</button></td>";
        resultado += "</tr>";
    }
    resultado += "</table>";
    tabla.innerHTML = resultado;
}

function update() {

    var ajax = new XMLHttpRequest();

    ajax.open("get", url);
    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300) {

                var data = JSON.parse(ajax.responseText);
                createTable(data);

            } else {
                alert("Error al actualizar");
                console.log(ajax.error);
            }
        }
    };
    ajax.send(null);
}

function borrar(id) {

    var ajax = new XMLHttpRequest();

    ajax.open("delete", url+"/"+id);
    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300) {

                update();

            } else {
                alert("Error de borrado");
            }
        }
    };
    ajax.send(null);
}

function add() {

    var ajax = new XMLHttpRequest();

    ajax.open("post", url);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300) {

                update();
            } else {
                alert("Error de peticion");
            }
        } 
    };
    ajax.send(JSON.stringify(datosAdd()));
}

update();
document.getElementById("btnEnviar").onclick = add;
document.getElementById("btnRefrescar").onclick = update;