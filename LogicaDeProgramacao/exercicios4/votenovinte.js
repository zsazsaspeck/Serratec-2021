//No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 

var ler = require("prompt-sync")();
var age = ler("Qual é a sua idade?");
var ageone = 16;
console.log("Você pode votar?", age >= ageone);