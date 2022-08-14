//Switch case

const metodoPago = "cheqque";

switch (metodoPago) {
    case "efectivo":
        console.log(`pagaste con ${metodoPago}`);
        break;
    default:
        console.log("Aun no has selecccionado un metodo de pago");
        break;
}