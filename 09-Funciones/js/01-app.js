//Las funciones son instrucciones que van a realizar una accion
//Ventaja permiten tener un codigo mas limpio, facil de leer y son
//reutilizables

//Declaracion de sumar ( funcion declaration)
function sumar() {
    console.log(2 + 2);
}

sumar();

//Expresion de funcion (function expression)

const sumar2 = function () {
    console.log("El resultado es", 10 + 3 * 8 % 25);
}
sumar2();
