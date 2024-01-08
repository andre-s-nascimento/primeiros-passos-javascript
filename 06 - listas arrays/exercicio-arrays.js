function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ` + i * numero);
    }
}

function numerosPares(numeros) {

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(numeros[i]);
        }
    }
}


function nomesComLetraV(nomes) {

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i][0] === 'V') {
            console.log(nomes[i]);
        }
    }
}

function numerosParesEntre10e50() {
    let listaNumerosPares = [];

    for (let i = 10; i <= 50; i++) {
        if (i % 2 === 0) {
            listaNumerosPares.push(i);
        }
    }
    return listaNumerosPares;
}

function mediasAbaixode5(medias) {
    for (let i = 0; i < medias.length; i++) {
        if (medias[i] < 5) {
            console.log(medias[i]);
        }
    }
}

function maiorNota(notas) {
    let maiorNota = -1000;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > maiorNota) {
            maiorNota = notas[i];
        }
    }
    return maiorNota;
}


console.log('=====Exercicio 01 - Tabuada=====');
tabuada(5);

console.log('=====Exercicio 02 - numeros pares=====');
const listaNumeros = [1, 2, 3, 4, 5, 6];
numerosPares(listaNumeros);

console.log('=====Exercicio 03 - Nomes com a Letra V=====');

const listaDeNomes = ['André', 'Vítor', 'Vanessa', 'Giulia'];
nomesComLetraV(listaDeNomes);

console.log('=====Exercicio 04 - Criar lista com numeros pares no intervalo de 10 a 50=====');
console.log(numerosParesEntre10e50());

console.log('=====Exercicio 05 - Lista de medias abaixo de 5====');
const listaDeMedias = [2, 7, 3, 8, 10, 4];
mediasAbaixode5(listaDeMedias);

console.log('=====Exercicio 06 - Imprimir maior nota====');
const listaDeNotas = [10, 7, 3, 8, 9, 4];
console.log(maiorNota(listaDeNotas));