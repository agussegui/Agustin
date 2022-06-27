const producto = {
    nombre: "monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//congela el producto osea no se puede modificar Frozen
//al usuario no le permite modificar ni agregar nuevas propiedades
Object.freeze(producto);
console.log(producto);
console.log(Object.isFrozen(producto));

//Seal te permite modificarlas pero no borrarlas y agregar nuevas

//Objeat.seal(producto);