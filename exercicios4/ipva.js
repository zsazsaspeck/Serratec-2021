//O “Sistema do IPVA” avisa ao contribuinte o mês de pagamento do tributo, de acordo com o final da placa do carro. O motorista irá digitar a placa do carro com 4 dígitos inteiros. A resposta do programa será o dígito final da placa. Como informativo, após a resposta, será impressa a tabela completa com os meses de pagamento.

var ler = require("prompt-sync")();
var placa = (ler("Digite os 4 números inteiros da placa?"));
var placast = placa.toString();
var fplaca = (placast.charAt(3));
console.log("Seu carro é final", fplaca, ". Confira a tabela de pagamentos: ");
console.log("Final 1, 2, 3, 4 e 5 - Pagamento em janeiro");
console.log("Final 6, 7, 8, 9 e 0 - Pagamento em fevereiro");



/*(placa.charAt(4));
console.log(final);*/