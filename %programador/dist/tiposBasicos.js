"use strict";
let mensagem = 'Olá, TypeScript!';
console.log(mensagem);
// Arrays e Tuplas
// Arrays e tuplas permitem armazenar uma coleção de valores.
// Arrays: Podem ser de qualquer tipo e todos os elementos devem ser do mesmo tipo.
let hobbies = ["Cozinhar", "Esportes"];
console.log(hobbies[0]); // Cozinhar
// Tuplas: Um array com tipos e quantidade de elementos fixos.
let endereco = ["Av. Principal", 99];
console.log(endereco); // ['Av. Principal', 99]
// Enums e Any
// Enums e Any são tipos super úteis em TypeScript.
// Enums: Permite definir um conjunto de constantes nomeadas.
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; // 2
})(Cor || (Cor = {}));
let minhaCor = Cor.Cinza;
console.log(minhaCor); // 100
let carro = "BMW";
console.log(carro); // BMW
carro = { marca: "BMW", ano: 2019 };
console.log(carro); // { marca: 'BMW', ano: 2019 }
