"use strict";
// Classes em TypeScript
// Classes em TypeScript são um template para criar objetos. Elas encapsulam dados para o objeto e métodos para operar esses dados.
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudar() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
let pessoa1 = new Pessoa("Maria", 30);
pessoa1.saudar(); // Olá! Meu nome é Maria e tenho 30 anos.
// Herança e Interfaces
// TypeScript suporta herança, permitindo que classes herdem propriedades e métodos de outra classe. Além disso, as classes podem implementar interfaces para garantir que sigam uma determinada estrutura.
class Empregado extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade);
        this.salario = salario;
    }
    relatarSalario() {
        console.log(`Meu salário é ${this.salario} reais.`);
    }
}
let empregado1 = new Empregado("João", 40, 5000);
empregado1.saudar(); // Olá! Meu nome é João e tenho 40 anos.
empregado1.relatarSalario(); // Meu salário é 5000 reais.
// Modificadores de Acesso: public, private e protected
// Modificadores de acesso controlam onde as propriedades e métodos de uma classe podem ser acessados.
// Public: Acessível de qualquer lugar. Por padrão, todos os membros de uma classe em TypeScript são públicos.
// Private: Não pode ser acessado fora da classe.
// Protected: Pode ser acessado dentro da classe e por classes que herdam dela.
class ContaBancaria {
    constructor(titular, saldoInicial, tipo) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.tipo = tipo;
    }
    // Métodos para acessar/modificar o saldo
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }
    verSaldo() {
        console.log(`Saldo atual: ${this.saldo}`);
    }
}
let minhaConta = new ContaBancaria("Carlos", 1000, "Conta Corrente");
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.verSaldo(); // Saldo atual: 1300
