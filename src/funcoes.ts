// Tipagem de Parâmetros e Retorno

function multiplicar(num1: number, num2: number):number{
    return num1 * num2;
}

console.log(multiplicar(2,5));

// Aqui, num1 e num2 são parâmetros do tipo number, e a função também retorna um number.


// Funções Anônimas e Arrow Functions

const saudar = (nome: string): string =>{
    return `Olá, ${nome}`;
}

console.log(saudar("Vitor"));

// Sobrecarga de Funções

// Sobrecarga de funções permite que várias funções com o mesmo nome tenham parâmetros diferentes. Isso é útil quando você quer que a função se comporte de forma diferente com base nos tipos ou quantidade de argumentos.

function ajustarData(data: Date): string;
function ajustarData(mes: number, dia: number, ano: number): string;

function ajustarData(dataOuMes: Date | number, dia?: number, ano?: number): string {
    if (dataOuMes instanceof Date) {
        return `${dataOuMes.getDate()}/${dataOuMes.getMonth()+1}/${dataOuMes.getFullYear()}`;
    } else {
        return `${dia}/${dataOuMes}/${ano}`;
    }
}

console.log(ajustarData(new Date())); // Exibe a data atual formatada
console.log(ajustarData(12, 25, 2020)); // Exibe '25/12/2020'