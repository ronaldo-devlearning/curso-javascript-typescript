// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://www.w3schools.com/jsref/jsref_splice.asp

const nomes = ["Maria", "José", "Francisco"];

// nomes.splice(indice, delete, elem1, elem2, elem3)

/* Na função abaixo os valores passados como parâmetros, 2 e 1 são
respectivamente o indice do elemento e a quantidade elementos que serão 
removidos */
// const removidos = nomes.splice(2, 1);

const removidos = nomes.splice(3, 0, "Ronaldo");
console.log(nomes, removidos);