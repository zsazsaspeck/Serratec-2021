const prompt = require("prompt-sync")();

var n1 = parseFloat(prompt("Digite um número: "));
var n2 = parseFloat(prompt("Digite mais um número: "));

console.log("O valor da soma dos dois números é: ", n1 + n2);
console.log("O valor da subtração dos dois números é: ", n1 - n2);
console.log("O valor da multiplicação dos dois números é: ", n1 * n2);
console.log("O valor da divisão dos dois números é: ", n1 / n2);

//func = Number.isInteger;
