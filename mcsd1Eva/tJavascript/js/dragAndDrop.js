
if (!sessionStorage.getItem("nombre"))
    location.replace("sesiones.html");

function drag(evt) {
    evt.dataTransfer.setData("objeto", evt.target.id);
}

function allowDrop(evt) {
    evt.preventDefault();
}

function drop(evt) {
    evt.preventDefault();
    var data = evt.dataTransfer.getData("objeto");
    evt.target.appendChild(document.getElementById(data));
    //En este caso solo lo dejaria en destino
    //document.getElementById("#destino").appendChild(document.getElementById(data));
}

var imgs = document.querySelectorAll("img");
var destino = document.querySelector("#destino");
var origen = document.querySelector("#origen");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dragstart", drag);
}
destino.addEventListener("dragover", allowDrop);
destino.addEventListener("drop", drop);

origen.addEventListener("dragover", allowDrop);
origen.addEventListener("drop", drop);