const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//foreach

let resultado = "";

carrito.forEach((producto, index) => {
    if (producto.nombre === "tablet") {
        resultado = carrito[index]
    }

});

console.log(resultado)


//con Find solo te retorna el primer elemento si tenes varios con el mismo precio
// tenes que usar filter
const resultado2 = carrito.find(producto => producto.nombre === "tablet");
console.log(resultado2);