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

button.addEventListener("click", (e, section)=>{
    e.preventDefault();
})

nameInput.addEventListener('change', (e) => { 
    e.preventDefault();
    nameCard.textContent = e.target.value ;
});
numberInput.addEventListener('change', (e) => {
    e.preventDefault();
    numberCard.textContent = e.target.value
});
dateYInput.addEventListener('change', (e) => {
        date.textContent = ( dateMInput.value+ " / " + e.target.value);
});
cvcInput.addEventListener('change', (e) => {
    cvc.textContent = e.target.value;
});

