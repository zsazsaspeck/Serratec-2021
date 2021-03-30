//O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado

const prompt = require("prompt-sync")();

var x = prompt("Digite a medida do lado do quadrado:");
var y = x * x;
var z = x * 4;
console.log("A área do quadrado de lado", x, "cm é", y, "cm e seu perímetro é", z,"cm");