let palabras = [
  "css",
  "javascript",
  "hola mundo",
  "comer",
  "dormir",
  "tranquilo",
  "amor",
  "trabajo",
];

let random = Math.round(Math.random() * palabras.length);

let letra = palabras[random];

let vidas = 6;

const form = document.querySelector(".form");
const formText = document.querySelector(".mobil__text");
const letras = document.querySelector(".letras");
const letrasUsadas = document.querySelector(".letras_pulsadas");
const munheco = document.querySelectorAll("#munheco");
const vida = document.querySelector(".vidas");

// console.log(munheco);
formText.value = "";
vida.innerText = `Vidas: ${vidas}`;
let i = 0;
let cont = 0;
let vic = 0;

console.log(letras.childNodes);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(cont);
  let inputLetra = formText.value.toLowerCase();
  const div = document.createElement("div");
  if (inputLetra === " " || inputLetra === "") {
    alert("Tienes que escribir una letra o palabra");
    return;
  }

  if (vidas === 0) {
    alert("Has perdido");
    return;
  }

  if (letra.includes(inputLetra)) {
    for (let i = 0; i < letras.childNodes.length; i++) {
      if (inputLetra === letra[i]) {
        letras.childNodes[i].innerText = inputLetra;
        vic++;
      }
      if (vic === cont) {
        alert("has ganado");
      }
    }
  } else {
    vida.innerText = `Vidas: ${(vidas = vidas - 1)}`;
  }
  letrasUsadas.appendChild(div).classList = "letras__pulsadas-style";
  letrasUsadas.childNodes[i].innerText = inputLetra;
  i++;
  formText.value = "";
});

if (letra === undefined) {
  letra = "error";
}

for (let i = 0; i < letra.length; i++) {
  const div = document.createElement("div");
  if (letra[i] == " ") {
    letras.appendChild(div).className = "space";
  } else {
    letras.appendChild(div).className = "letras_chart";
    cont++;
  }

  if (letras.childNodes === 0) {
    alert("No se ha cargado ningina palabra");
  }
}

const btnMenu = document.querySelector(".btn__menu");

btnMenu.addEventListener("click", () => {
  alert("Se a clickeado el menu");
});
