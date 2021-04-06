//O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado

const ler = require("prompt-sync")();
var valor = ler("digite um valor:");
var result = valor * valor;

console.log("O quadrado do valor", valor, "é igual a:", result);