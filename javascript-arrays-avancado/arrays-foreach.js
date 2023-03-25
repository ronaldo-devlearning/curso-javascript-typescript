// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp

// A função forEach executa um callback em cada elemento de um array. Diferentemente de map() ou reduce(), ele sempre retorna o valor undefined e não é encadeável. O caso de uso típico é alterar o array no final do loop.

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

/*  for(let valor of a1){
        console.log(valor);
    }
*/

a1.forEach((valor, indice, array) => {
    console.log(valor, indice, array);
})