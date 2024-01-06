
const pessoa = {
    nome: 'André Soares Nascimento',
    idade: 44,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

};

const atributo = 'nome';

console.log(pessoa[atributo]);
/*
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

andre.altura = 1.76;

delete andre.nome;

console.log(andre.nome);
console.log(andre.idade);
console.log(andre);
*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho/a do que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho/a do que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} tem a mesma idade de ${p2.nome}`);
    }
}

p1 = new Pessoa('André', 44);
p2 = new Pessoa('Giulia', 12);

compararPessoas(p1, p2);

/*
const vitor = new Pessoa;
vitor.nome = 'Vitor';
vitor.idade = 24;

vitor.descrever();

const renan = new Pessoa;
renan.nome = 'Renan';
renan.idade = 30;

renan.descrever();

const a = new Pessoa('Andre', 45);
a.descrever();
console.log(a);

*/