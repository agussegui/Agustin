const dinero = 100;
const totalApagar = 500;
const tarjeta = true;

if (dinero >= totalApagar) {
    console.log("si podemos pagar");
} else if (tarjeta) {
    console.log("si puedo pagar porque tengo la tarjeta");
} else if (dinero) {
    console.log("si puedo pagar con dinero");
} else {
    console.log("Fondos Insuficientes");
}
