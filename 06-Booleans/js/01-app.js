const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1 === boolean1);
console.log(boolean3 === boolean3);

console.log(boolean1);

const autenticado = true;

if (autenticado) {
    console.log("si puedes ver netflix")
} else {
    console.log("no puedes ver netflix");
}

//Operador ternario

console.log(autenticado ? "si esta autenticado" : "no esta autenticado");