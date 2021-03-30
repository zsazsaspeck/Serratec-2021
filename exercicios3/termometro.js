const prompt = require('prompt-sync')();
var celsius = (prompt("digite uma temperatura em graus celsius: "));

var fahr = celsius * 9/5 + 32;

console.log("A temperatura " + celsius + " convertida em fahrenheite é " + fahr);