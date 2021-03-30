//14. A calculadora oposta lê um numero mostra seu valor negativo
const ler = require("prompt-sync")();

//Entrada
var numero = parseFloat(ler("Digite um número: "));


//Processamento
numero = -numero;
//Particularizar
//Numero Negativo
//Generalizar

//Saida
console.log("O oposto do seu número é: ", numero);