const fs = require('fs');

// Ler arquivo JSON
const rawData = fs.readFileSync('banco.json');
const faturamentoMensal = JSON.parse(rawData);

// Filtrar apenas os dias com faturamento maior que zero
const diasComFaturamento = faturamentoMensal.faturamento.filter(dia => dia.valor > 0);

// Calcular o menor e maior valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

// Calcular a média mensal
const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

// Calcular o número de dias com faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

// Exibir os resultados
console.log("Menor faturamento:", menorFaturamento);
console.log("Maior faturamento:", maiorFaturamento);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
