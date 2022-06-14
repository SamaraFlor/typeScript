
// any aceita qualquer tipo
let anyNovamente:any;
anyNovamente = 3,
anyNovamente ='tres',
anyNovamente = true;

let stringTeste = 'verificar';
stringTeste = anyNovamente;

let unknownValor:unknown;
unknownValor = 3;
unknownValor ='tres';
unknownValor = true

let outroString = 'verificar';

// diferente do any quando não sei a propriedade que tem dentro o unknown faz uma verificação
// temos que fazer um tratamento diferente do any

if (typeof unknownValor === 'string') {
    outroString = unknownValor;
}

function jogarErro(erro:string, codigo: number) : void{
    //throw rodou parou a função
    throw {error: erro,code: codigo}
}
jogarErro ('deu erro',500);

//tipo never referente a um codigo que nunca é finalizado
function jogarErro1(erro:string, codigo: number) : never{
    //throw rodou parou a função
    throw {error: erro,code: codigo}
}
jogarErro1 ('deu erro',500);