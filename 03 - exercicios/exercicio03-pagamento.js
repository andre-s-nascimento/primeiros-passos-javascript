/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

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
