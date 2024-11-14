// Definindo Interfaces
// Interfaces no TypeScript são como contratos para seus objetos ou classes. Elas definem a estrutura que um objeto deve seguir.

interface Usuario {
    nome: string;
    idade: number;
}

let usuario: Usuario = { nome: "Carlos", idade: 30 };
console.log(usuario);


// Extensão de Interfaces
// Uma das grandes vantagens das interfaces é a possibilidade de extensão, o que permite que você crie interfaces mais complexas a partir de interfaces mais simples.

interface Empregado extends Usuario {
    salario: number;
    cargo: string;
}

// let empregado: Empregado = { nome: "Ana", idade: 28, salario: 5000 , cargo: "programador"};
// console.log(empregado);


// Tipos vs Interfaces
// Embora muitas vezes você possa usar Tipos e Interfaces de forma intercambiável, existem algumas diferenças importantes entre eles.

// Tipos: São mais flexíveis e podem ser usados para uma variedade de construções de tipos, não apenas para objetos.

// type Ponto = {
//     x: number;
//     y: number;
// };

// let coordenada: Ponto = { x: 10, y: 20 };
// console.log(coordenada);

// Interfaces: São mais adequadas para declarar a forma de objetos e são mais extensíveis por meio da herança.

interface Ponto {
    x: number;
    y: number;
}

interface Ponto3D extends Ponto {
    z: number;
}

let ponto3D: Ponto3D = { x: 10, y: 20, z: 30 };
console.log(ponto3D);


