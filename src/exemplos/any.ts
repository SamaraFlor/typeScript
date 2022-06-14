// pratica ruim ultilizar any


let valorAny: any;

let valorString: string = 'teste';
valorString = valorAny;

let valorString2: string = 'text';


function somarString(valorString:string,valorString2:string) {
    console.log(valorString + valorString2);
    
}

somarString(valorString,valorString2);
