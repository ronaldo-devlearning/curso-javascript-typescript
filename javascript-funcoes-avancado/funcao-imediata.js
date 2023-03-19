/* IIFE - Imediately Invoked Function Expression - é uma função em
JavaScript que é executada assim que definida */
// https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE
// https://www.w3schools.com/js/js_function_definition.asp

(function(idade, peso, altura){
    const sobrenome = "Miranda";
    function criaNome(nome){
        return nome + " " + sobrenome;
    }

    function falaNome(){
        console.log(criaNome("Luiz"));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);