const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"];


meses.push('Septiembre');
meses.push('Octubre');


console.table(meses);

const carrito = [];

const producto = {
    nombre: "Celular",
    precio: 450,
    lugar: "La Plata"
}

const producto2 = {
    nombre: "monitor 24 pulgadas",
    precio: 250,
    lugar: "Buenos Aires"
}
const producto3 = {
    nombre: "Tablet",
    precio: 150,
    lugar: "Mendoza"
}
// .push agrega ak final un arreglo
// .unshift al principio un arreglo

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);

console.table(carrito);