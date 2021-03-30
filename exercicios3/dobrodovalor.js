//Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores. Dica: Utilize uma variável nova para armazenar o resultado.
var ler = require("prompt-sync")();
var valor = parseFloat(ler("Digite um número: "));
var dobro = (valor * 2);
console.log("O dobro de", valor, "foi:", dobro);