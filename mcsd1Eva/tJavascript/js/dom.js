
var calculo = function (e) {

    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    var operando = e.target.value;
    var operacion = num1 + operando + num2;
    var resultado = eval(operacion);

    document.getElementById("operando").value = operando;
    document.getElementById("resultado").value = resultado.toFixed(2);
}

//El querySelector te mete en un array todos las 
//clases o tags (en plan css) que tu quieras

var botones = document.querySelectorAll("input[type=button]");

for (var i = 0; i < botones.length; i++) {

    botones[i].onclick = calculo;
}