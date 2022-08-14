//querySelector solo va a tomar el primer elemento, maximo un elemento o ninguno
//solo toma el primer card

const card = document.querySelector(".card");
console.log(card);

//podemos tener selectores especificos con css

const info = document.querySelector(".premium .info");
console.log(info);

//seleccionar el segundo card de hospedaje

const segundoCard = document.querySelector("section.hospedaje .card:nth-child(2)");
console.log(segundoCard);

//seleccionar formulario

const formulario = document.querySelector("#formulario");
console.log(formulario);

//seleccionar elementos HTML

const navegacion = document.querySelector("nav");
console.log("navegacion");