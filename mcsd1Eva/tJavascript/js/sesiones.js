
if (sessionStorage.getItem("nombre")) {
    location.replace("dragAndDrop.html");
}

function login() {

    var nombre = document.getElementById("txtNombre").value;
    
    if (nombre === "") {
        alert("Nombre vacio");
        return;
    }
    sessionStorage.setItem("nombre",nombre);
    location.replace("dragAndDrop.html");

}

document.getElementById("btnOk").addEventListener("click",login);