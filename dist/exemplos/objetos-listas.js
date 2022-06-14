"use strict";
const pessoa = {
    nome: 'Luiza',
    Idade: 21,
    profissao: 'atriz',
};
pessoa.Idade = 29;
const Luiz = {
    nome: 'Luiz Andre',
    idade: 32,
    profissao: 'medico'
};
const Martina = {
    nome: 'Martina',
    idade: 22,
    profissao: 'enfermeira'
};
var profissao;
(function (profissao) {
    profissao[profissao["professora"] = 0] = "professora";
    profissao[profissao["atriz"] = 1] = "atriz";
    profissao[profissao["desenvolvedora"] = 2] = "desenvolvedora";
    profissao[profissao["pintor"] = 3] = "pintor";
})(profissao || (profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 34,
    profissao: profissao.desenvolvedora
};
const Maria = {
    nome: 'Maria',
    idade: 31,
    profissao: profissao.professora
};
const Jessica = {
    nome: 'Jessica',
    idade: 22,
    profissao: profissao.atriz,
    materias: ['matematica', 'portugues', 'biologia', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(Jessica.materias);
