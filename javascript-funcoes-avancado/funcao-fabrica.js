// Função fábrica
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
        },

        altura,
        peso,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Ronaldo", "Rocha", 1.66, 80);
// console.log(p1.imc);
// console.log(p1.fala("falando sobre JS"));
p1.nomeCompleto = "Ronaldo da Silva Rocha";
console.log(p1.nome);
console.log(p1.sobrenome)
