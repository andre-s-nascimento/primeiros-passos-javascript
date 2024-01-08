class Carro {
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    valorPorPercurso(distanciaEmKm, valorLitro) {
        return valorLitro * (distanciaEmKm / this.kmPorLitro);
    }
}

(function () {
    const uno = new Carro('Fiat', 'Vermelho', 12);
    console.log(uno);
    console.log(uno.valorPorPercurso(70, 5));
    
    const palio = new Carro('Fiat', 'Vermelho', 10);
    console.log(palio);
    console.log(palio.valorPorPercurso(70, 5));
})();
