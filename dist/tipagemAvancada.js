"use strict";
// Tipos Genéricos
// Tipos genéricos permitem criar componentes que funcionam com vários tipos, em vez de um único. Eles oferecem uma maneira de criar funções e classes reutilizáveis.
// Exemplo de Tipo Genérico:
function obterArray(items) {
    return new Array().concat(items);
}
let numerosArray = obterArray([1, 2, 3]);
let stringsArray = obterArray(["a", "b", "c"]);
console.log(numerosArray); // [1, 2, 3]
console.log(stringsArray); // ["a", "b", "c"]
function exibirId(id) {
    console.log(`O ID é: ${id}`);
}
exibirId(101); // O ID é: 101
exibirId("202"); // O ID é: 202
let pessoa = { nome: "Ana", sobrenome: "Silva" };
console.log(pessoa); // { nome: "Ana", sobrenome: "Silva" }
function clicarBotao(botao) {
    if (botao === "submit") {
        console.log("Enviar formulário");
    }
    else if (botao === "reset") {
        console.log("Resetar formulário");
    }
}
clicarBotao("submit"); // Enviar formulário
clicarBotao("reset"); // Resetar formulário
// Aqui, Botao é um tipo literal que pode ser apenas "submit" ou "reset". Usamos Type Guards no if para verificar o valor exato de botao.
