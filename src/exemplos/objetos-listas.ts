const pessoa = {
    nome:'Luiza',
    Idade: 21,
    profissao:'atriz',
}

pessoa.Idade = 29;

const Luiz:{nome:string,idade:number,profissao:string}= {
    nome:'Luiz Andre',
    idade: 32,
    profissao:'medico'
}


const Martina:{nome:string,idade:number,profissao:string}= {
    nome:'Martina',
    idade: 22,
    profissao:'enfermeira'
}

enum profissao{
    'professora',
    'atriz',
    'desenvolvedora',
    'pintor'
}

interface Pessoa{
    nome: string,
    idade:number,
    profissao?: profissao;
}

interface  Estudante extends Pessoa{
    materias:string[]
}

const vanessa:  Pessoa = {
   nome: 'Vanessa',
   idade: 34,
   profissao: profissao.desenvolvedora
}

const Maria:  Pessoa = {
    nome: 'Maria',
    idade: 31,
    profissao: profissao.professora
 }


 const Jessica: Estudante = {
    nome : 'Jessica',
    idade: 22,
    profissao: profissao.atriz,
    materias:['matematica', 'portugues', 'biologia', 'programação']

 }

 function listar(lista:string[]) {
    for (const item of lista){
        console.log('-', item);
    }
 }

 listar (Jessica.materias);