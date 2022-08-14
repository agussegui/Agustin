const usuario = false;
const puedePagar = false;

if (usuario) {
    console.log("si eres usuario")
} else if (!puedePagar && !usuario) {
    console.log("No no puedes comprar, no estas registrado y no tienes dinero");
} else if (!usuario) {
    console.log("Inicia sesion o crea una cuenta");
} else if (!puedePagar) {
    console.log("Fondos Insuficientes");
}