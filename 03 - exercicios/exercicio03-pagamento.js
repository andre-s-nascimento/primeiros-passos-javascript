const valorEtiqueta = 100;

const formaPagamento = 4; // 1 - Débito; 2 - PIX/Dinheiro; 3 - Credito 2x; 4 - Credito + 2x

if (formaPagamento === 1) {
    const valorPagar = valorEtiqueta * .90;
    console.log(valorPagar);
} else if (formaPagamento === 2) {
    const valorPagar = valorEtiqueta * .85
    console.log(valorPagar);
} else if (formaPagamento === 3) {
    console.log(valorEtiqueta);
} else if (formaPagamento === 4) {
    const valorPagar = valorEtiqueta * 1.1;
    console.log(valorPagar);
}
