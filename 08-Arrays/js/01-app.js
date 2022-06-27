//object y arrays son parecidos
//arrays sirve para agrupar elementos del mismo tipo y pueden ser iguales
// Con corchetes significa que es un arreglo
const numero = [10, 20, 30, [1, 2, 3, 4, 5]];

const meses = new Array("Enero", "Febrero", "Marzo");
console.log(numero);
console.log(meses);
console.table(numero);

const deTodo = ["Hola", 10, true, "si", null, {}];

//Acceseder a un array

console.log(numero[3][4]); 