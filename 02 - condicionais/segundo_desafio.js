/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo do combustível do seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.

*/

const precoLitroEtanol = 5.79;
const precoLitroGasolina = 6.66;
const isCarroGasolina = false;
const kmsPorLitro = 10;
const distanciaViagemKm = 100;
const litrosConsumidos = distanciaViagemKm / kmsPorLitro;

if (isCarroGasolina) {
    const valorGastoViagem = litrosConsumidos * precoLitroGasolina;
    console.log('Valor total da viagem: ' + valorGastoViagem.toFixed(2));
} else {
    const valorGastoViagem = litrosConsumidos * precoLitroEtanol;
    console.log('Valor total da viagem: ' + valorGastoViagem.toFixed(2));
}

