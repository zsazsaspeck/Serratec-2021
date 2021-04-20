//O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá digitar o preço do quilo e o total em gramas da refeição, considerando que o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100 gramas, o peso consumido e o valor total.

var ler = require("prompt-sync")();
var preco = Number(ler("Digite o preço do quilo da refeição: "));
var ref = Number(ler("Qual o valor em gramas da refeição"))
var prato = 465
var restaurante = "Self-Service";
var valorcemgr = preco/10;
var total = (prato + ref) * valorcemgr;
console.log(restaurante + "\n Tara do Prato: " + prato + "g\nPreço 100gr: R$" + valorcemgr);
console.log("Peso Refeição: " + ref + "gr\n Valor: R$" + total);
