const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo-1');
const input2 = document.querySelector('#calculo-2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');

form.addEventListener('submit', sumarInputVal);
form.addEventListener('error', errorSubmit);

function errorSubmit(event) {
    console.log("No uses calculadora");
}


function sumarInputVal(event){
    event.preventDefault();
    const sumaInputs = innerText = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "El resultado es: " + sumaInputs;
}

