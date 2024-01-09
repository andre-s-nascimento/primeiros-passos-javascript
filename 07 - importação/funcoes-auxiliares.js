

const entradas = [10, 5, 50, 10, 98, 23, 77, 43, 22, 1, 99];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };