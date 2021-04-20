const ler = require("prompt-sync")();
console.log("Digite 'S' ou 'N' nas restrições a seguir:");

var idade = ler('Idade abaixo de 16 ou acima de 67 anos: ')
var peso = ler("Pesa menos de 50kg:")
var hepa = ler("Portador de hepatite:")
var mala = ler("Já teve malária:")
var recente = ler("Fez doação recente?")
var resultado =
idade == "S"
peso == "S"
hepa == "S"
mala == "S"
recente == "S"
console.log("Pode doar sangue?", !resultado)
