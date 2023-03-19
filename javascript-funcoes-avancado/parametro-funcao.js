// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures

/* As funções declaradas com a palavra function e function expression tem uma variável local,
chamada arguments, que sustenta todos os argumentos enviados */
function funcao(a, b, c){
    let total = 0;

    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);
}

// funcao(1, 2, 3, 4, 5, 6, 7); // retorna 28 1 2 3

// Rest operator
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('*', 1, 20, 30, 40, 50);