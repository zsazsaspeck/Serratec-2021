//Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.

var ler = require("prompt-sync")();
var playerone = ler("Player one, digite um número:");
var playertwo = ler("Player two, digite um número:");
var empate = playerone == playertwo;

console.log("Resultados:");
console.log("Player 1 venceu?", playerone > playertwo);
console.log("player 2 venceu?", playertwo > playerone);
console.log("Houve empate?", empate);