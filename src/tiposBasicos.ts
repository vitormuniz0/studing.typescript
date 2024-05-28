let mensagem: string = 'Olá, TypeScript!';
console.log(mensagem);


// Arrays e Tuplas
// Arrays e tuplas permitem armazenar uma coleção de valores.
// Arrays: Podem ser de qualquer tipo e todos os elementos devem ser do mesmo tipo.

let hobbies: string[] = ["Cozinhar", "Esportes"];
console.log(hobbies[0]); // Cozinhar


// Tuplas: Um array com tipos e quantidade de elementos fixos.

let endereco: [string, number] = ["Av. Principal", 99];
console.log(endereco); // ['Av. Principal', 99]

// Enums e Any
// Enums e Any são tipos super úteis em TypeScript.
// Enums: Permite definir um conjunto de constantes nomeadas.

enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 2 // 2
}
let minhaCor: Cor = Cor.Cinza;
console.log(minhaCor); // 100

let carro: any = "BMW";
console.log(carro); // BMW
carro = { marca: "BMW", ano: 2019 };
console.log(carro); // { marca: 'BMW', ano: 2019 }

