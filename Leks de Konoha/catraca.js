// Crie um jogo em que você vai ter que escolher entre 3 
// armas para enfrentar o grande dragão malvado "Progradragão". As armas são uma espada,
// uma faca e um sapato. Só uma dessas opções que vai garantir a vitória contra o dragão Antes de começar o jogo, 
// o mesmo vai pedir o nome do herói, acrescente o nome do herói nos textos do jogo.


const ler = require("prompt-sync")();

console.log("Olá, bem vindo ao jogo PROGRADRAGÃO!");
console.log("─────▄████▀█▄");
console.log("───▄█████████████████▄");
console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼");
console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲");
console.log("████████████████████▀▀");
console.log("Aqui você vera um mundo completamente diferente!");
console.log("Você está quase no final do jogo, só falta matar o dragão!");
console.log("Lembre-se só existe apenas uma resposta correta, você terá duas chances!");
console.log("Qual arma você escolhe para martar o dragão?");
var arma= ler("DGITE 1 = Espada, DIGITE 2 = Faca, DIGITE 3= Sapato");


if (arma == "1") {
    console.log("Você MATOU o PROGRADRAGÃO.");
    console.log("Parabéns, você ganhou o jogo!");

} else if (arma !="1"){
    arma = ler ("Escolha errada, você tem mais uma chance tente novamente!");

    if (arma=="1") {
        console.log("Você MATOU o PROGRADRAGÃO.");
        console.log("Parabéns, você ganhou o jogo!"); 
    }
    else
    console.log("ESCOLHA ERRADA \n GAME OVER");
}
// CATRACA:
// A catraca do onibus quebrou e a empresa precisa dos dados da viagem.
// Os dados necessários para a empresa são quando a pessoa entra no onibus são as seguintes:

//     Quantas pessoas ja entraram no onibus até o momento; 
//     Se a pessoa é pagante ou entra com gratuidade;
//     O total dos ganho até o momento (Considerando a passagem a R$ 4,40).


const ler = require("prompt-sync")();

var pessoasQueJaEstaoNoOnibus= ler("Olá, tudo bem? quantas pessoas já estão no ônibus?");
var pagante= parseInt(ler("Quantas pessoas pagaram passagem ?")) ;

var gratuidade= pessoasQueJaEstaoNoOnibus-pagante;
var passagem= pagante*4.40

console.log("Entraram até o momento, ", pessoasQueJaEstaoNoOnibus, ".");
console.log("Dessas pessoas," , pagante, " são pagantes e", gratuidade, "são gratuidade");
console.log("Até o momento o total de ganho é ", passagem.toFixed(2));

var viagem= ler("Entrou algum passageiro?")

while(viagem == "sim"){

    var pagante1= ler ("A pessoa é pagante?");

    if (pagante1 == "sim" ){
        pagante++
        passagem= pagante * 4.40

    } else {
        gratuidade ++
    } 
 viagem= ler("Entrou algum passageiro?")

}
var total= pagante+gratuidade;

console.log("Agora são," , pagante, "pessoas são pagantes e", gratuidade, " são gratuidade");
console.log("O total de ganho é ", passagem.toFixed(2));
console.log("Total de passageiro,", total);
console.log("Obrigado, fim de espediente!");