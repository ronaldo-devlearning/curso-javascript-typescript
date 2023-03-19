/* Declaração de função (function hoisting) - apenas dessa forma a função é elevada ao topo */
// https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting
// https://www.w3schools.com/js/js_function_definition.asp

// falarOi() - retorna Oi;

function falarOi(){
    console.log('Oi');
}

// falarOi();

// Function Expression
const souUmDado = function(){
    console.log('Sou um dado.');
}

// souUmDado();

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
}

// funcaoArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
}

obj.falar();