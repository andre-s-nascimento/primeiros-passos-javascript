function escrevaNome(nome){
    return 'Meu nome é '+ nome;
}

function isMaiorDeIdade(idade){
    if(idade >=18){
        console.log( escrevaNome ('André') + ' e sou Maior de Idade')
        return true;
    } else {
        console.log('Menor de Idade')
        return false;
    }
}

console.log(escrevaNome('Andre'));
console.log(escrevaNome('Renan'));

isMaiorDeIdade(44);
isMaiorDeIdade(15);