
// for (let i = 1; i <= 20; i++) {
// if (i % 2 === 0) {
// console.log("El numero ${i} es PAR");
// } else {
// console.log("el numero ${i} es IMPAR");
// }



// }
const carrito = [
    { nombre: "monitor de 28 pulgadas", precio: 32000 },
    { nombre: "Televisor", precio: 32000 },
    { nombre: "Computadora", precio: 80000 },
    { nombre: "Notebook", precio: 150000 },
    { nombre: "Microondas", precio: 12000 },
    { nombre: "Lavarropas", precio: 25000 },
]
console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}