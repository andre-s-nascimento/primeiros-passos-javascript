
const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValor = -1;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);

