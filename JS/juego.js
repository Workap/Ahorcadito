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
  const letras = document.querySelector(".letras");
  const div = document.createElement("div");
  if (write[i] == " ") {
    // letras.appendChild(div).className = "space";
    letras.appendChild(div).className = "letras_chart".innerText = "-";
  } else {
    letras.appendChild(div).className = "letras_chart";
  }
}
