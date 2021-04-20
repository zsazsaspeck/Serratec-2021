const ler = require("prompt-sync")();
var idade = ler('Idade abaixo de 16 ou acima de 67 anos: [S] ou [N]')
var peso = ler("Pesa menos de 50kg: [S] ou [N]")
var hepa = ler("Portador de hepatite: [S] ou [N]")
var mala = ler("Já teve malária: [S] ou [N]")
var recente = ler("Fez doação recente? [S] ou [N]")

var porque = "Motivos pelo qual não pode doar: "
if (idade == "S") porque += "idade não compátivel,";
if (peso == "S") porque += " Peso não permitido,"
if (hepa == "S") porque += " Já teve hepatite,"
if (mala == "S") porque += " já teve malária,"
if (recente =="S") porque += " doou recentemente."
if (idade == "S" || peso == "S" || hepa == "S" || mala == "S" || recente =="S" || idade == "S")console.log("Não pode dor porque:", porque)
else console.log("Pode doar.");






