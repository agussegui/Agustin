const numero3 = 30;
const numero4 = 55;



var resultado;

resultado = numero3 + numero4;

resultado = numero3 - numero4;

resultado = numero3 * numero4;

resultado = numero3 % numero4;


console.log(resultado);

// Math PI

resultado = Math.PI;
console.log(resultado);

//Redondear, de 2.5 redondea para arriba
// de 2.5 para abajo redondea para abajo 

resultado = Math.round(2.8);

console.log(resultado);


//Absolute

resultado = Math.abs(-123);

console.log(resultado);

//minimo y maximo

resultado = Math.min(4, 123, 345, -1243);
resultado = Math.max(12, 29437, -12, 24);

console.log(resultado);

//El orden de las operaciones es como en las matematicas
//primero multiplicacion y division luego suma y resta

let puntaje = 10;


puntaje++;//11
puntaje++;//12

--puntaje;// 9
--puntaje;// 8

console.log(puntaje);

var nivel = 1;

nivel += 12;
nivel += 21;

console.log(nivel);

const numero7 = "20";
const numero8 = "12.5";
const numero9 = "uno";
const numero10 = 20;

console.log(Number.parseInt(numero8));
console.log(Number.parseInt(numero10));
console.log(Number.parseInt(numero9));

//revisar si un numero es entero o no
console.log(Number.isInteger(numero9));
console.log(Number.isInteger(numero9));
