const carrito = [
    { nombre: "monitor de 28 pulgadas", precio: 32000 },
    { nombre: "Televisor", precio: 32000 },
    { nombre: "Computadora", precio: 80000 },
    { nombre: "Notebook", precio: 150000 },
    { nombre: "Microondas", precio: 12000 },
    { nombre: "Lavarropas", precio: 25000 },
]


//el forEach es lo mismo que el codigo escrito for
//.map crea un nuevo arreglo 
const nuevoArreglo = carrito.map(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})
//.forEach no lo crea
const nuevoArreglo2 = carrito.forEach(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);