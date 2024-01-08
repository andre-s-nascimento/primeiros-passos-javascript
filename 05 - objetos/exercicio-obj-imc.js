class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificacaoImc() {
        if (this.valorImc() < 18.5) {
            return 'Abaixo do peso';
        } else if (this.valorImc() < 25) {
            return 'Peso normal';
        } else if (this.valorImc() < 30) {
            return 'Acima do peso';
        } else if (this.valorImc() < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
}

(function () {
    const jose = new Pessoa('José', 70, 1.75);
    console.log(jose);
    console.log(`O IMC de ${jose.nome} é ` + jose.valorImc());
    console.log(`A classificação do IMC de ${jose.nome} é ` + jose.classificacaoImc());

    const andre = new Pessoa('André', 130, 1.76);
    console.log(andre);
    console.log(`O IMC de ${andre.nome} é ` + andre.valorImc());
    console.log(`A classificação do IMC de ${andre.nome} é ` + andre.classificacaoImc());

})();