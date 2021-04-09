/*1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia entrada, para a reserva, basta informar o nome e se é meia ou não, é permitido apenas uma reserva por nome.
2. Após os 5 reservados, o cliente pode retirar se ingresso informando o seu nome, o ingresso irá informar seu número, nome de quem reservou e se é meia ou não.*/

// O teatro do monstro permite a entrada de até 5 pessoas;
// A peça só começa após atingir a lotação máxima;
// Nesta peça é proibida a entrada de menores de 16 anos;
// O gerente quer saber quantos são homens e quantos são mulheres antes da peça começar.

//entrada
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




//processamento



