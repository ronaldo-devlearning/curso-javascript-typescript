/* O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. 
OBS.: Retorna o mesmo número de elementos do array original */

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://www.w3schools.com/jsref/jsref_map.asp

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeroEmDobro = numeros.map(valor => valor * 2);
// console.log(numeroEmDobro);

// Para cada elemento:
// Retornar apenas uma string com o nome da pessoa
// Remover apenas a chave "nome" do objeto
// Adicionar uma chave id em cada objeto

const pessoas = [
    {nome: "Maria", idade: 64},
    {nome: "José", idade: 67},
    {nome: "Francisco", idade: 36},
    {nome: "Ronaldo", idade: 32}
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
// console.log(nomes);
// console.log(idades);

const comIds = pessoas.map((obj, indice) => {
    /* Fazendo dessa forma o array original seria modificado, pois estaria
    trabalhando com a referência do objeto
    obj.id = (indice + 1) * 1000;
    return obj;
    */
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(pessoas);
console.log(comIds);