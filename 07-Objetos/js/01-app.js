//un objeto agrupa todo en una sola variable
const producto = {
    nombre: "monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    altitud: 550,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1metro"
        },
        fabricacion: {
            pais: "China"
        }
    }
}
console.log(producto);
//la mas comun, acceseder al valor de la variable
console.log(producto.nombre);
console.log(producto["nombre"]);
//esto indica el object

//agregar nuevas propiedades afuera de objeto
producto.imagen = "imagen.jpg";

//eliminar lo que esta adentro de objeto
delete producto.disponible;

console.log(producto);

//destructuring

const { nombre, precio, disponible } = producto;
console.log(nombre, precio, disponible);

//Crear objetos dentro de otros objetos
console.log(producto.informacion.medida);
console.log(producto.informacion.peso);

//destructuring (desestructuracion)

const { altitud, informacion, informacion: { fabricacion } } = producto;

console.log(altitud);
console.log(informacion);
console.log(fabricacion);


//aunque este declarada una constante y esta adentro de un objeto se puede
//cambiar o eleminar sus propiedades