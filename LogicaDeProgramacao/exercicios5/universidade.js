//Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

const ler = require("prompt-sync")();
var today = Number(ler("Que dia é hoje?"))
var boleto = ler("Qual é o nº do boleto? ")
var desconto = (today < 14 && today >= 10)
if (desconto)console.log("Desconto na próxima mensalidade", "para o boleto", boleto, ":", desconto);
else console.log("Desconto na próxima mensalidade para o boleto?", boleto, ":", desconto);