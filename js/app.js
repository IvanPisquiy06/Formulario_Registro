import { validar } from "./validaciones";

const inputs = document.querySelectorAll("input");

inputs.forEach( input => {
    input.addEventListener('blur', (input) =>{
        validar(input.target)
    })
})