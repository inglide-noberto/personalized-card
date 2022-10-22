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

const buttonConfirm = document.querySelector(".button-confirm");
const section = document.querySelector(".section-form");
const buttonContinue = document.querySelector(".button-complete");
const complete = document.querySelector(".complete");

let contador = 0;

buttonConfirm.addEventListener("click", (e) => {
    e.preventDefault();
    if (contador == 4) {
        section.style.display = "none";
        complete.style.display = "flex";

    } else {
        console.log("Nananinanão!")
    }

});
buttonContinue.addEventListener('click', (e) => {
    complete.style.display = "none";
    section.style.display = "flex";
    window.location.reload(true);
    
});
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
    if (dateMInput.value <= 12 && dateYInput.value >= 22) {
        date.textContent = (dateMInput.value + " / " + e.target.value);
        console.log(dateMInput.value);
        contador++;
    }
    else {
        alert("Digite uma data válida");
    }
});
cvcInput.addEventListener('change', (e) => {
    cvc.textContent = e.target.value;
    console.log(cvc.value)
    contador++;
});
