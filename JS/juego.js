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

let write = palabras[random];

// for (let i = 0; i < write.length; i++) {
//   const letras = document.querySelector(".letras");
//   const div = document.createElement("div");
//   if (write[i] == " ") {
//     letras.appendChild(div).className = "space";
//   } else {
//     letras.appendChild(div).className = "letras_chart";
//   }
// }

// const btnMenu = document.querySelector(".btn__menu");

// btnMenu.addEventListener("click", () => {
//   alert("Se a clickeado el menu");
// });

const form = document.querySelector(".form");
const formText = document.querySelector(".mobil__text");
const letras = document.querySelector(".letras");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputLetra = formText.value.toLowerCase();
  if (write.includes(inputLetra)) {
    // alert("Si es una letra que esta");
    for (let i = 0; i < letras.childNodes.length; i++) {
      // console.log(inputLetra, write[i]);
      if (inputLetra === write[i]) {
        console.log("Si");
        // letras.childNodes[i];
        console.log((letras.childNodes[i].innerText = inputLetra));
      } else {
        console.log("No");
      }
    }
  }
});

for (let i = 0; i < write.length; i++) {
  const div = document.createElement("div");
  if (write[i] == " ") {
    letras.appendChild(div).className = "space";
  } else {
    letras.appendChild(div).className = "letras_chart";
  }
}
