//el OR es un mucho mas comun que el AND

const efectivo = 850;
const credito = 1200;
const disponible = efectivo + credito;
const totalApagar = 550;

if (efectivo > totalApagar || credito > totalApagar || disponible > totalApagar) {
    console.log("si podemos pagar")
} else {
    console.log("fondos insuficientes")
}