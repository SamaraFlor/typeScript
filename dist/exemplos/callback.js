"use strict";
// colocando o tipo na função evitamos que erros aconteçam, ex tipo :number{, exemplo de erro adicionar um ToString no  numero
/* function somarValoresNumericos(numero1:number,numero2:number):number{
    return numero1+ numero2;
}*/
//console.log(somarValoresNumericos(2,4));
// quando a função não precisa retornar nada falamos que ela é do tipo void
function printaValorNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
// callback e praticamente uma funçãoque passamos como parametro
// no callback falamos o parametro que ela vai receber (numero: number)
// paramentros que vai retornar => number):number
// callback:(numero: number) => number):number
function somarValoresNumericos(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividir(numero) {
    return numero / numero;
}
// retorna 16, pois função ao quadrado tem parametro solicitado pelo callback,numero:number
// vai somaar o 2 + 2  e elevar ao quadrado
console.log(somarValoresNumericos(2, 2, aoQuadrado));
console.log(somarValoresNumericos(0, 1, dividir));
