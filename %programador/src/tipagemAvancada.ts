// Tipos Genéricos
// Tipos genéricos permitem criar componentes que funcionam com vários tipos, em vez de um único. Eles oferecem uma maneira de criar funções e classes reutilizáveis.

// Exemplo de Tipo Genérico:

function obterArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numerosArray = obterArray<number>([1, 2, 3]);
let stringsArray = obterArray<string>(["a", "b", "c"]);

console.log(numerosArray); // [1, 2, 3]
console.log(stringsArray); // ["a", "b", "c"]

// Aqui, <T> é um placeholder para o tipo que será fornecido quando a função for chamada. Isso torna a função obterArray flexível e reutilizável para diferentes tipos.


// Tipos Union e Intersection
// Union e Intersection são maneiras de combinar tipos.

// Union (|): Permite que um valor seja um de vários tipos.

type NumeroOuString = number | string;

function exibirId(id: NumeroOuString) {
    console.log(`O ID é: ${id}`);
}

exibirId(101); // O ID é: 101
exibirId("202"); // O ID é: 202


// Intersection (&): Combina múltiplos tipos em um.

interface Nome {
    nome: string;
}

interface Sobrenome {
    sobrenome: string;
}

type NomeCompleto = Nome & Sobrenome;

let pessoa: NomeCompleto = { nome: "Ana", sobrenome: "Silva" };
console.log(pessoa); // { nome: "Ana", sobrenome: "Silva" }


// Tipos Literal e Type Guards
// Literal types permitem você especificar um valor exato que um tipo deve ter. Type Guards são técnicas que você usa para informar ao TypeScript sobre o tipo específico de uma variável.

// Exemplo de Tipo Literal e Type Guard:

type Botao = "submit" | "reset";

function clicarBotao(botao: Botao) {
    if (botao === "submit") {
        console.log("Enviar formulário");
    } else if (botao === "reset") {
        console.log("Resetar formulário");
    }
}

clicarBotao("submit"); // Enviar formulário
clicarBotao("reset"); // Resetar formulário


// Aqui, Botao é um tipo literal que pode ser apenas "submit" ou "reset". Usamos Type Guards no if para verificar o valor exato de botao.