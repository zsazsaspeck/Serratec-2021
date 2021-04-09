
const ler = require("prompt-sync")();
var LIMITE = 5;
var total = 0;
var H = 0;
var M = 0;

while (total < LIMITE){
cliente = (ler("Antes de entrar no teatro, é homem ou mulher? [H] ou [M]"))
idade = Number(ler("Qual é a sua idade:"));
if (idade < 16){
console.log("Não é autorizado a entrada para menores de 16");}
else {

if(cliente == "H")
    H++
else
    M++
    total++
}
}

console.log("Acabaram os ingressos! Homens:", H, "e", "Mulheres:", M);






