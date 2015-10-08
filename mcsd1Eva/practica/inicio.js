
if (!localStorage.getItem("nombre")) {
    location.replace("login.html");
}

//$("#usuario")[0].innerHTML = "Bienvenido, " + localStorage.getItem("nombre");

function posiciomImg() {

    var divAncho = $(".mapas").width();
    var size = divAncho + "x" + 400;

    return size;
}

function posicionUsuario(pos) {

    var posUsuario = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + posUsuario +
              "&zoom=16&size=" + posiciomImg() + "&sensor=true&markers=" + posUsuario;

    document.getElementById("mapaUsuario").src = url;
}

function posicionCongreso() {
    
    var posCongreso = "40.417722,-3.800779";
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + posCongreso +
              "&zoom=16&size="+posiciomImg()+"&sensor=true&markers=" + posCongreso;

    document.getElementById("mapaCongreso").src = url;
}

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(posicionUsuario, function (error) {
        alert("No se puede mostrar la ubicacion del congreso.");
    });
    navigator.geolocation.getCurrentPosition(posicionCongreso, function (error) {
        alert("No se puede acceder a su ubicacion");
    });
}