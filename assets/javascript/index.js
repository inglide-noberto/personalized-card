const numberInput = document.querySelector("#number");
const nameInput = document.querySelector("#name");
const cvcInput = document.querySelector("#cvc");
const dateMInput = document.querySelector("#dateM");
const dateYInput = document.querySelector("#dateY");
const confirm = document.querySelector(".button-confirm");

const numberCard = document.querySelector(".numberCard");
const nameCard = document.querySelector(".nameCard");
const date = document.querySelector(".dateCard");
const cvc = document.querySelector(".cvcCard");

const button = document.querySelector(".button-confirm");
const section = document.querySelector(".section-form");

let contador = 0;

// button.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (contador == 4) {
//         console.log(contador);
//         section.style.display = "none";
//     } else {
//         console.log("Nananinanão!")
//     }

// });
nameInput.addEventListener('change', (e) => {
    e.preventDefault();
    nameCard.textContent = e.target.value;
    contador++;
});
numberInput.addEventListener('change', (e) => {
    e.preventDefault();
    numberCard.textContent = e.target.value;
    contador++;
});
dateYInput.addEventListener('change', (e) => {
    date.textContent = (dateMInput.value + " / " + e.target.value);
    contador++;
});
cvcInput.addEventListener('change', (e) => {
    cvc.textContent = e.target.value;
    contador++;
});
