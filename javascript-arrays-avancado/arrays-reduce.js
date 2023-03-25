// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://www.w3schools.com/jsref/jsref_reduce.asp#

/* Sintaxe
array.reduce(callback(acumulador, currentValue, currentIndex, arr), valorInicial)
*/

// A função reduce executa um callback para cada elemento do array (exceto no primeiro, se nenhum valor inicial for passado), resultando num único valor de retorno.

const pessoas = [
    {nome: "Maria", idade: 64},
    {nome: "José", idade: 67},
    {nome: "Francisco", idade: 36},
    {nome: "Ronaldo", idade: 32}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade >= valor.idade){
        return acumulador;
    }
    return valor;
});

console.log(maisVelha);