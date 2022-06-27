const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"];



console.log(meses);
console.log(meses[0]);
//Cuanto mide un arreglo
console.log(meses.length);



//la i es de donde inicia
//la i < meses.lenght es para que corra la cantidad de veces que hay elementos en el arreglo
//la i++ para que vaya sumando la cantidad de veces
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

// sin la i en cerrada pone las posiciones
//con el nombre de la variable y la i en cerrada pone los