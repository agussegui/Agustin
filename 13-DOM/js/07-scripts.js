const encabezado = document.querySelector("h1");

encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";


const card = document.querySelector(".card");
card.classList.add("nueva-clase");
card.classList.remove("nueva-clase");
console.log(card.classList);