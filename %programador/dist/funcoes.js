"use strict";
// Tipagem de Parâmetros e Retorno
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(2, 5));
// Aqui, num1 e num2 são parâmetros do tipo number, e a função também retorna um number.
// Funções Anônimas e Arrow Functions
const saudar = (nome) => {
    return `Olá, ${nome}`;
};
console.log(saudar("Vitor"));
function ajustarData(dataOuMes, dia, ano) {
    if (dataOuMes instanceof Date) {
        return `${dataOuMes.getDate()}/${dataOuMes.getMonth() + 1}/${dataOuMes.getFullYear()}`;
    }
    else {
        return `${dia}/${dataOuMes}/${ano}`;
    }
}
console.log(ajustarData(new Date())); // Exibe a data atual formatada
console.log(ajustarData(12, 25, 2020)); // Exibe '25/12/2020'
