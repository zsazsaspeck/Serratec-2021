//O programa “Financeira” irá solicitar que o cliente digite seu nome, empresa e função, além do valor do empréstimo que deseja contratar. Então será calculado 86% do valor desejado como crédito disponível. A resposta ao cliente deve seguir o exemplo abaixo.
//Para escrever as mensagens, utilize variáveis com concatenação de strings. O valor será escrito separadamente (no console.log).
//Senhor Moisés, você está com sorte! Pela sua função de Programador, e sua excelente relação com a empresa onde trabalha, foi aprovado um crédito em sua conta corrente de R$ 200.00

var ler = require("prompt-sync")();
var nome = ler("Qual é o seu nome?");
var empresa =  ler("Qual a sua empresa?");
var funcao = ler("Qual a sua função?");
var credito = ler("Qual o valor de crédito pretendido?");
var creditodisp = 86 * credito / 100;
var sorte = "você está com sorte!";
var aprove = "foi aprovado um crédito em sua conta corrente de: R$";
console.log("Senhor", nome, sorte, "Pela sua função de", funcao, ", e sua excelente relação com a sua empresa", empresa, aprove, creditodisp);