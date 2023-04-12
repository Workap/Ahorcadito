const palabras = [
  "habilidad",
  "solteria",
  "tornillo",
  "proposito",
  "caracter",
  "instante",
  "mercado",
  "constitucion",
  "condicion",
  "sentimiento",
  "ocurrencia",
  "disposicion",
  "creencia",
  "informacion",
  "sentido",
  "discusion",
  "operacion",
  "especialidad",
  "investigacion",
  "cultura",
  "recurso",
  "capacidad",
  "procedimiento",
  "principio",
  "preparacion",
  "tratamiento",
  "conocimiento",
  "resolucion",
  "enfermedad",
  "profesion",
  "construccion",
  "creatividad",
  "obligacion",
  "ejercicio",
  "dificultad",
  "formacion",
  "eleccion",
  "experiencia",
  "administracion",
  "herramienta",
  "actividad",
  "presentacion",
  "proteccion",
  "produccion",
  "evidencia",
  "organizacion",
  "naturaleza",
  "comunicacion",
  "realidad",
  "resultado",
  "observacion",
  "generacion",
  "inversion",
  "explicacion",
  "participacion",
  "decision",
  "situacion",
  "importancia",
  "identidad",
  "seguridad",
  "desarrollo",
  "ejemplo",
  "consideracion",
  "estudio",
  "activismo",
  "independencia",
  "juventud",
  "libertad",
  "morosidad",
  "pereza",
  "recompensa",
  "tolerancia",
  "violencia",
  "sabiduria",
  "madurez",
  "sinceridad",
  "empatia",
  "equilibrio",
  "respeto",
  "compromiso",
  "integridad",
  "paciencia",
  "solidaridad",
  "trascendencia",
  "amistad",
  "cooperacion",
  "felicidad",
  "fraternidad",
  "esperanza",
  "justicia",
  "verdad",
  "amor",
  "pasion",
  "ternura",
  "entusiasmo",
  "optimismo",
  "compasion",
  "gratitud",
  "humildad",
  "generosidad",
  "perseverancia",
  "prudencia",
  "honestidad",
  "amabilidad",
  "afecto",
  "alegria",
  "serenidad",
  "tranquilidad",
  "creencia",
  "fe",
  "mistica",
  "religion",
  "ritual",
  "adoracion",
  "sacrificio",
  "santidad",
  "devocion",
  "oracion",
  "bondad",
  "caridad",
  "comprension",
  "tendencia",
  "neces",
  "huevo",
  "fiable",
  "trigo",
  "danza",
  "cumbre",
  "codigo",
  "pulgar",
  "libro",
  "puesto",
  "ejemplo",
  "morder",
  "carnaval",
  "cadena",
  "obtener",
  "furgon",
  "tecnologia",
  "remover",
  "tactica",
  "ampliar",
  "tobillo",
  "comedia",
  "pedir",
  "campana",
  "lucir",
  "adorno",
  "unir",
  "varilla",
  "raton",
  "terapia",
  "luz",
  "taller",
  "vestido",
  "fosforo",
  "segundo",
  "chicle",
  "crecer",
  "neutro",
  "banco",
  "nacion",
  "lluvia",
  "abrazo",
  "fumar",
  "clima",
  "bendito",
  "triunfo",
  "caliente",
  "melon",
  "cosecha",
  "obrero",
  "azul",
  "pantalla",
  "corte",
  "lagrima",
  "misterio",
  "maximo",
  "bruja",
  "rastro",
  "mesa",
  "calma",
  "anillo",
  "robo",
  "entrada",
  "cruzar",
  "soñar",
  "frio",
  "leyenda",
  "estudio",
  "muralla",
  "venta",
  "clase",
  "cubrir",
  "pimiento",
  "enlace",
  "deporte",
  "actriz",
  "boton",
  "recoger",
  "nieve",
  "regalo",
  "herida",
  "sello",
  "premio",
  "pared",
  "bruto",
  "defensa",
  "marino",
  "solucion",
  "pulmon",
  "marco",
  "cuerpo",
  "consejo",
  "mochila",
  "grado",
  "resto",
  "pintura",
  "paredon",
  "cumplir",
  "espuma",
  "caro",
  "arena",
  "palido",
  "probar",
  "cierre",
  "recreo",
  "publicar",
  "logro",
  "trompo",
  "mina",
  "duque",
  "algodon",
  "pasion",
  "pacifico",
  "sabado",
  "cubito",
  "cadena",
  "parecer",
  "bocado",
  "vaca",
  "cerca",
  "maquina",
  "calvo",
  "vida",
  "ejercito",
  "carne",
  "zapatilla",
  "descansar",
  "poeta",
  "banquete",
  "pulsera",
  "madera",
  "cansado",
  "limon",
  "clave",
  "forma",
  "rayo",
  "filtro",
  "situado",
  "css",
  "javascript",
  "hola mundo",
  "comer",
  "dormir",
  "tranquilo",
  "amor",
  "trabajo",
];
// let palabras = ["css", "javascrip"];
let palabra = palabras[Math.round(Math.random() * palabras.length)];
let vidas = 6;

// console.log(localStorage.getItem("Palabra").length !== 0);

if (localStorage.getItem("Palabra") === null) {
  palabra = palabras[Math.round(Math.random() * palabras.length)];
} else if (localStorage.getItem("Palabra").length !== 0) {
  palabra = localStorage.getItem("Palabra");
  console.log("Entro");
  localStorage.removeItem("Palabra");
}

const form = document.querySelector(".form");
const formText = document.querySelector(".mobil__text");
const letras = document.querySelector(".letras");
const letrasUsadas = document.querySelector(".letras_pulsadas");
const munheco = document.querySelectorAll(".perder");
const vida = document.querySelector(".vidas");
const contLetras = document.querySelector(".pistas__letras");
const contPalabras = document.querySelector(".pistas__palabras");
const message = document.querySelector(".modal__msg");
const btnMenu = document.querySelector(".btn__menu");

formText.value = "";
vida.innerText = `Vidas: ${vidas}`;

let i = 0;
let cont = 0;
let vic = 0;
let contSpace = 1;
let perder = 0;
let letrasUse = [];

contLetras.innerText = `Letras: ${palabra.length}`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputLetra = formText.value.toLowerCase();
  const div = document.createElement("div");

  if (inputLetra === " " || inputLetra === "") {
    // alert("Tienes que escribir una letra no se puede enviar espacios vacios");
    return;
  }

  if (letrasUse.join("").includes(inputLetra)) {
    alert("No se puede repetir las letras que ya se usaron");
    formText.value = "";
    return;
  }

  letrasUse.push(inputLetra);

  if (palabra.includes(inputLetra)) {
    for (let i = 0; i < letras.childNodes.length; i++) {
      if (inputLetra === palabra[i]) {
        letras.childNodes[i].innerText = inputLetra;
        vic++;
      }
    }
  } else {
    vida.innerText = `Vidas: ${(vidas = vidas - 1)}`;
    munheco[perder].classList.remove("hidden");
    perder++;
  }
  letrasUsadas.appendChild(div).classList = "letras__pulsadas-style";
  letrasUsadas.childNodes[i].innerText = inputLetra;
  i++;
  formText.value = "";
  if (vic === cont) {
    message.innerText = `Has ganado`;
    formText.setAttribute("disabled", "");
    location.replace("#openModal");
    return;
  }

  if (vidas === 0) {
    message.innerText = `Has perdido la palabra era: ${palabra}`;
    formText.setAttribute("disabled", "");
    formText.value = "";
    location.replace("#openModal");
    return;
  }
});

if (palabra === undefined) {
  palabra = "error";
}

document.addEventListener("click", () => {
  formText.focus();
});

for (let i = 0; i < palabra.length; i++) {
  const div = document.createElement("div");
  if (palabra[i] == " ") {
    letras.appendChild(div).className = "space";
    contSpace++;
    contPalabras.innerText = `Palabras:${contSpace}`;
  } else {
    letras.appendChild(div).className = "letras_chart";
    cont++;
  }
}

btnMenu.addEventListener("click", () => {
  message.innerText = `Menu`;
});
