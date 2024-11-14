// Organizando Código com Módulos
// Módulos no TypeScript ajudam a dividir o código em partes menores e mais gerenciáveis. Cada módulo tem seu próprio escopo, o que significa que variáveis, classes, interfaces, etc., definidas em um módulo não são visíveis para outros módulos, a menos que sejam explicitamente exportados.

// Importação e Exportação de Módulos
// Você pode importar o que precisa de um módulo usando a instrução import. Isso mantém o escopo global limpo e seu código bem organizado.

// ------------------------------------------------------


// O que são Namespaces?
// Um namespace é uma forma de agrupar identificadores (como classes, interfaces, funções e variáveis) sob um nome único. Isso é útil para evitar conflitos, pois identificadores com o mesmo nome podem existir em namespaces diferentes sem causar erros.

// Como Definir um Namespace
// Para definir um namespace no TypeScript, usamos a palavra-chave namespace, seguida pelo nome do namespace e um bloco de código contendo as declarações que pertencem a esse namespace.

namespace Pagamentos {
    export class Transacao {
        constructor(public valor: number, public descricao: string) {}

        infoTransacao() {
            console.log(`Valor: ${this.valor}, Descrição: ${this.descricao}`);
        }
    }
}

// Usando um Namespace
// Para usar um membro de um namespace, você precisa qualificar o nome do membro com o nome do namespace.

// Exemplo de uso do namespace:

let minhaTransacao = new Pagamentos.Transacao(100, "Pagamento de Serviço");
minhaTransacao.infoTransacao(); // Valor: 100, Descrição: Pagamento de Serviço

// Namespaces Aninhados
// Você também pode aninhar namespaces para criar uma hierarquia mais detalhada e organizada.

// Exemplo de namespaces aninhados:

namespace Empresa {
    export namespace DepartamentoFinanceiro {
        export class Pagamento {
            // Implementação da classe
        }
    }
}

let pagamento = new Empresa.DepartamentoFinanceiro.Pagamento();

