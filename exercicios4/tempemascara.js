/*Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.*/

var ler = require("prompt-sync")();
var mask = ler(("Usa máscara? [S]or[N] "));
var temp = ler(("Qual é a temperatura? "))
var result = mask == "S";
var resultone = temp < 37.5;
var resulttwo = result && resultone;
console.log("Autorizada a entrada?", resulttwo);