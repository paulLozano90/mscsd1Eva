
if (localStorage.getItem("nombre")) {
    location.replace("inicio.html");
}

function login() {

    var nombre = document.getElementById("txtNombre").value;

    if (nombre === "") {
        alert("Rellena el nombre, por favor.");
        return;
    }
    localStorage.setItem("nombre", nombre);
    location.replace("inicio.html");
}

document.getElementById("btnEntrar").addEventListener("click", login);