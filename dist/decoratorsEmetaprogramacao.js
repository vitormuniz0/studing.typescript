"use strict";
// 🚀 Nessa aula vamos explorar um dos recursos mais elegantes e poderosos do TypeScript: os Decorators. Eles são uma forma de adicionar metaprogramação ao seu código, permitindo que você modifique ou aprimore a funcionalidade de classes, métodos, propriedades e parâmetros. Vamos entender como isso funciona e quais são suas aplicações práticas! 💻✨
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logDecorator(construtor) {
    console.log("Decorador chamado!");
    console.log(construtor);
}
let Pessoaa = class Pessoaa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};
Pessoaa = __decorate([
    logDecorator
], Pessoaa);
