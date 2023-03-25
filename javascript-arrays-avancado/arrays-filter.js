// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://www.w3schools.com/jsref/jsref_filter.asp#

/* Filter -> Sempre retorna um array com a quantidade de elementos
igual ou menor que o array original.
OBS.: A função filter não altera o valor original*/

// Retornar os números maiores que 10

function callbackFilter(valor){
    return valor > 10;
}

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Passando callback
// const numerosFiltrados = numeros.filter(callbackFilter);

// Passando Arrow Function
const numerosFiltrados = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);

// Retornar as pessoas que tem nome com 5 letras ou mais
// Retornar as pessoas com mais de 50 anos
// Retornar as pessoas cujo nome termina com A

const pessoas = [
    {nome: "Maria", idade: 64},
    {nome: "José", idade: 67},
    {nome: "Francisco", idade: 36},
    {nome: "Ronaldo", idade: 32}
];
 
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasComMaisDeCinquentaAnos);

const nomeTerminaComA = pessoas.filter(obj => { 
    return obj.nome.toLowerCase().endsWith("a") 
});
console.log(nomeTerminaComA);