/*1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

function pertenceFibonacci(n: number): boolean {
    let [a, b] = [0, 1];

    while (b < n) {
        [a, b] = [b, a + b];
    }

    return n === b || n === 0;
}

const numero: number = Number(prompt("Informe um número:"));

const resultado = pertenceFibonacci(numero)
    ? `O número ${numero} pertence à sequência de Fibonacci.`
    : `O número ${numero} NÃO pertence à sequência de Fibonacci.`;

console.log(resultado);
