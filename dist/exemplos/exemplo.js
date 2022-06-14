"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumeros(numero1, numero2, printar, frase) {
    if (printar) {
        console.log(numero1 + numero2);
    }
    return numero1 + numero2;
}
let printar = true;
let frase;
frase = 'a soma desta operação é ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value), printar, frase));
        }
    });
}
