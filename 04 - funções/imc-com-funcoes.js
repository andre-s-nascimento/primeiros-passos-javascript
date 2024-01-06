function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso, IMC: ' + imc;
    } else if (imc < 25) {
        return 'Peso normal, IMC: ' + imc;
    } else if (imc < 30) {
        return 'Acima do peso, IMC: ' + imc;
    } else if (imc < 40) {
        return 'Obeso, IMC: ' + imc;
    } else {
        return 'Obesidade Grave, IMC: ' + imc;
    }
}

(function () {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
//lambda