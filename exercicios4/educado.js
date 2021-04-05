//O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela.
var ler = require("prompt-sync")();
var nome = ler("Qual é o seu nome? ");
console.log("Olá", nome);
var nick = ler("como você gostaria de ser chamado?");
console.log("Bem-vindo,", nick);