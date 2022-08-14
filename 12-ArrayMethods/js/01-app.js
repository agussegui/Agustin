const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// en un arreglo de objetos se utiliza .some
const existe = carrito.some(producto => producto.nombre === "Monitor Curvo");
console.log(existe);

//En un arreglo tradicional con .some
const existe2 = meses.some(mes => mes === "febrero");
console.log(existe2);

