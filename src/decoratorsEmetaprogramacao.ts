// 🚀 Nessa aula vamos explorar um dos recursos mais elegantes e poderosos do TypeScript: os Decorators. Eles são uma forma de adicionar metaprogramação ao seu código, permitindo que você modifique ou aprimore a funcionalidade de classes, métodos, propriedades e parâmetros. Vamos entender como isso funciona e quais são suas aplicações práticas! 💻✨

function logDecorator(construtor: Function) {
    console.log("Decorador chamado!");
    console.log(construtor);
}

@logDecorator
class Pessoaa {
    constructor(public nome: string, public idade: number) {}
}

// Aqui, @logDecorator é aplicado à classe Pessoa. Quando a classe é definida, o decorator é executado automaticamente.

// Decorators de Classe, Propriedade e Método
// Decorators podem ser aplicados em diferentes níveis:

// Decorators de Classe: Modificam ou estendem a definição da classe.

function decoratorClasse(construtor: Function) {
    // Lógica do decorator
}

@decoratorClasse
class MinhaClasse {}

// Decorators de Propriedade: Usados para interceptar e modificar o comportamento de uma propriedade.

function decoratorPropriedade(target: any, propertyName: string) {
    // Lógica do decorator
}

class MinhaClassee {
    @decoratorPropriedade
    minhaPropriedade: string;
}

