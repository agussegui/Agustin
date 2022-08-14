const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Every todos deben cumplir la condicion que uno le pone tiene que ser menor a 1000
//cumple la funcion del NAND
const resultado = carrito.every(producto => producto.precio < 200);
console.log(resultado)


//cumple la funcion  del OR
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2)