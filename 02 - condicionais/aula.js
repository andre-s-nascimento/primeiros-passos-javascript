
const numero = 6;
const numeroDivisivelPor5 = (numero % 5) === 0; 
//console.log(numeroPar);

if(numero === 0){
    console.log('O número é invalido');
} else if (numero === 5) {
    console.log('O número é invalido');
} else if(numeroDivisivelPor5){
    console.log('Sim');
} else {
    console.log('Não');
}