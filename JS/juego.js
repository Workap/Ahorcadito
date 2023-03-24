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

for (let i = 0; i < write.length; i++) {
  let letra = write[i];
  const letras = document.querySelector(".letras");
  const div = document.createElement("div");
  if (write[i] == " ") {
    letras.appendChild(div).className = "space";
  } else {
    letras.appendChild(div).className = "letras_chart";
  }
}

// console.log(letras);
// console.log(write);

// for (let i = 0; i < write.length; i++) {
//   console.log(write[i]);
//   let letra = write[i];
//   para.innerText = letra;
//   let para = document.createElement("div");
// }
