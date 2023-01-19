const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btn-calcular');
const res = document.querySelector('#resultado');

boton.addEventListener('click', calcular);

function calcular() {
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    res.innerText = 'Resultado: ' + (num1 + num2);

}


