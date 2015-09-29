
//function calculo(e) {

//    var num1 = document.getElementById("txtNum1").value;
//    var num2 = document.getElementById("txtNum2").value;
//    var operando = e.target.value;
//    var operacion = num1 + operando + num2;
//    var resultado = eval(operacion);

//    document.getElementById("operando").value = operando;
//    document.getElementById("resultado").value = resultado;
//}

//window.onload = function () {
//    document.getElementById("textNum1").focus();
//};

var calculo = function(e){
    
    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    var operando = e.target.value;
    var operacion = num1 + operando + num2;
    var resultado = eval(operacion);

    document.getElementById("operando").value = operando;
    document.getElementById("resultado").value = resultado;
}

document.getElementById("btnSuma").onclick = calculo;
document.getElementById("btnResta").onclick = calculo;
document.getElementById("btnMulti").onclick = calculo;
document.getElementById("btnDiv").onclick = calculo;