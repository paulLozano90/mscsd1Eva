
//Herencia
function persona(nombre, apellidos, edad) {

    this.nombre = nombre || "";
    this.apellidos = apellidos || "";
    this.edad = edad || 0;
    this.crecer = function () {
        console.log("Estoy creciendo");
    }
}

//Aunque sea una herencia, hay que volver a poner
//todas las caracteristicas de persona en alumno
//lo unico que hereda son las funciones

alumno = function (nombre, apellidos, edad, nota) {

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

//Al poner prototype a alumno, el alumno obtiene
//los valores de persona, pero luego al añadirle
//el constructor obtendra los nuevos valores
//asi podremos usarlo como constructor propio
alumno.prototype = new persona;
alumno.prototype.constructor = alumno;

var alumno1 = new alumno("Eva", "Dominguez", 30, 9);
var alumno2 = new alumno("Maria", "Alvarez", 30);
