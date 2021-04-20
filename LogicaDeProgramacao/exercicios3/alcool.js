const prompt = require('prompt-sync')();
var garrafa = prompt("Quantas ml tem sua garrafa?");
var alcool = garrafa * 70/100;
var gel = garrafa - alcool;

console.log("A quantidade para fazer alcool em gel na garrafa de", garrafa, "ml, é preciso", alcool, "ml de alcool, e", gel, "ml de gel");