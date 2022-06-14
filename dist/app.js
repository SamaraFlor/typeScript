"use strict";
let buttonTeste = document.getElementById('button');
// interrogação serve opara falar se  existir roda o codigo se não existir não roda, não vai dar erro so verificar, ecma20
//js faz a modificação de uma maneira que entenda mesmo com ecma antigo
buttonTeste === null || buttonTeste === void 0 ? void 0 : buttonTeste.addEventListener('click', () => {
    console.log('funcionou');
});
