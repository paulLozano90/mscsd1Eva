
function drag(evt) {
    evt.dataTransfer.setData("objeto", evt.target.id);
}

function allowDrop(evt) {
    evt.preventDefault();
}

function drop(evt) {
    evt.preventDefault();
    var data = evt.dataTransfer.getData("objeto");

    if (evt.target.localName === "div") {
        evt.target.appendChild(document.getElementById(data));
    }
}

var tipos = document.querySelectorAll("p");
var destino = document.querySelector("#destino");
var origen = document.querySelector("#origen");

for (var i = 0; i < tipos.length; i++) {
    tipos[i].addEventListener("dragstart", drag);
}
destino.addEventListener("dragover", allowDrop);
destino.addEventListener("drop", drop);

origen.addEventListener("dragover", allowDrop);
origen.addEventListener("drop", drop);

