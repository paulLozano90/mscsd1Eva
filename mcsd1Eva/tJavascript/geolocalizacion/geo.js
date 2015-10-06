
function posicion(pos) {

    document.getElementById("latitud").innerHTML = pos.coords.latitude;
    document.getElementById("longitud").innerHTML = pos.coords.longitude;

    var posMapa = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + posMapa +
              "&zoom=16&size=400x400&sensor=true";

    document.getElementById("mapa").src = url;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion, function(error) {
        alert("No se puede acceder a la posicion");
    });
}

