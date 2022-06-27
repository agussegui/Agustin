const producto = {
    nombre: "monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
//te dice cuantas variables hay escritas (del lado izquierdo)
console.log(Object.keys(producto));


//te devuelve los valores que le pusiste a las variables (del lado derecho)
console.log(Object.values(producto));

//te devuelve todo
console.log(Object.entries(producto));