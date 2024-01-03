/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/

const precoPorLitro = 5.79;
const kmsPorLitro = 12;
const distanciaViagemKm = 1580;

const litrosConsumidos = distanciaViagemKm / kmsPorLitro;
const valorGastoViagem = litrosConsumidos * precoPorLitro

console.log('Valor total da viagem: '+ valorGastoViagem.toFixed(2));