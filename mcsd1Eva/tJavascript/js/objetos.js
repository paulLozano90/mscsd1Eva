
//Maneras de crear objetos
var alumnos1 = new Object();

alumnos1.nombre = "Luis";
alumnos1.apellidos = "Gil";
alumnos1.edad = 25;
alumnos1.nota = 8;

var alumno2 = {
    nombre: "Alvaro",
    apellidos: "Garcia",
    edad: 25,
    nota: 6
};

//Manera mas eficiente, creando una clase (contructor)
function alumno(nombre, apellidos, edad, nota) {

    this.nombre = nombre || "";
    this.apellidos = apellidos || "";
    this.edad = edad || 0;
    this.nota = nota || 0;

    this.getNotaTexto = function () {
        if (this.nota < 5)
            return "Suspenso"
        else 
            return "Aprobado"
    }
}

//Para llamar a esta clase:
//Si no defino algun valor sera vacio o 0
var alumno3 = new alumno("Antonio", "Lopez", 30, 10);
var alumno4 = new alumno("Alberto", "Lopez", 21);

//Se le pueden añadir propiedades nuevas al objeto
alumno4.curso = 2015;

//alert(alumno3.getNotaTexto());

//Para modificar datos de esas clases:
alumno.prototype.saludar = function () {
    alert("Hola " + this.nombre + ". Bienvenido!");
}
//alumno3.saludar();

//Se pueden modificar(o dejar sin uso) clases ya definidas
//Cuando se use el toUpperCase realizara esto:
String.prototype.toUpperCase = function () {
    return "Hola!";
}
alert(alumno3.nombre.toUpperCase());

//Herencia

function Persona(nombre, apellidos, edad) {

    this.nombre = nombre || "";
    this.apellidos = apellidos || "";
    this.edad = edad || 0;
}

Alumno = function (nota) {
    this.nota = nota || 0;
    this.getNotaTexto = function () {
        if (this.nota < 5)
            return "Suspenso"
        else
            return "Aprobado"
    }
}

Alumno.prototype = new Persona;
Alumno.prototype.constructor = Alumno;