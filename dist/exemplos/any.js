"use strict";
// pratica ruim ultilizar any
let valorAny;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'text';
function somarString(valorString, valorString2) {
    console.log(valorString + valorString2);
}
somarString(valorString, valorString2);
