const peso = 100;
const altura = 1.80;

const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('Abaixo do peso, IMC: ' + imc);
} else if (imc < 25) {
    console.log('Peso normal, IMC: ' + imc);
} else if (imc < 30) {
    console.log('Acima do peso, IMC: ' + imc);
} else if (imc < 40) {
    console.log('Obeso, IMC: ' + imc);
} else {
    console.log('Obesidade Grave, IMC: ' + imc);
}