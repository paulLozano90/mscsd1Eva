
function crearTabla() {

    var tabla = document.createElement("table");

    for (var i = 0; i < 5; i++) {

        var colNombre = document.createElement("tr");
        var filaNombre = document.createElement("td");
        var contNombre = document.createTextNode("ID: " + i);
        filaNombre.appendChild(contNombre);

        var colApellidos = document.createElement("tr");
        var filaApellidos = document.createElement("td");
        var contApellidos = document.createTextNode("ID: " + i)
        filaApellidos.appendChild(contApellidos);

        colNombre.appendChild(filaNombre);
        colApellidos.appendChild(filaApellidos);    

        tabla.appendChild(colNombre);
        tabla.appendChild(colApellidos);
    }
    document.body.appendChild(tabla);
}

crearTabla();

function cambiarImagen() {

    var img = document.getElementById("img").src
}

