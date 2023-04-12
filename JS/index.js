const formAdd = document.querySelector(".form__add");
const btnJugar = document.querySelector(".btn__add-jugar");
const JugarBtn = document.querySelector(".btn__jugar");

let value;
let regex = /^[a-zA-ZÑñ ]+$/;
btnJugar.addEventListener("click", () => {
  value = formAdd.value.toLowerCase();
  if (value === "" || value === " " || !regex.test(value)) {
    alert("No");
    // location.replace("#openModal");
    return;
  }
  location.replace("./pages/juego.html");
  localStorage.setItem("Palabra", value);
});

JugarBtn.addEventListener("click", () => {
  localStorage.setItem("Palabra", "");
});
