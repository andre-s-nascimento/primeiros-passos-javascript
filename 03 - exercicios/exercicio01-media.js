const nota1 = 8;
const nota2 = 8;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if(media > 7){
    console.log("Aluno aprovado com média: " + media);
} else if (media >=5 ) {
    console.log("Aluno ficou de recuperação com média: " + media);
} else {
    console.log("Aluno reprovado com média: " + media);
}