var ler = require("prompt-sync")();
var cupons = parseFloat(ler("Digite seus cupons:"));
var mult = cupons * 3;
console.log("Seus cupons valem agora", mult, "pontos!");