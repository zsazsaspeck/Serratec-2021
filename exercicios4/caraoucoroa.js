const ler = require("prompt-sync")();

//Cabeçalho do programa
console.log("Como está sua sorte?");

//Entrada
const texto = ler("Jogue a moeda (digite qualquer número): ");

//Processamento
var numero = Number(texto);
var resultado = numero % 2;

//Saídas
console.log("Veja o resultado abaixo: sendo 0 é cara, 1 é coroa:");
console.log("O sorteio deu ", resultado, "!");