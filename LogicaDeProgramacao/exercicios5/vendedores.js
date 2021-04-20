const ler = require("prompt-sync")();
var total = Number(ler("Digite o valor total de vendas: "))

if (total > 5000){
    var comissao = total - 5000;
    var adicional = 9 * comissao / 100;

    console.log("Vendas totais:", total)
    console.log("Sua comissão:", parseFloat(comissao.toFixed(2)) + parseFloat(adicional.toFixed(2)))
    console.log("Valor adicional:", parseFloat(adicional.toFixed(2)));
}else console.log("Resultado para valor menor que 5000 é apenas 5%:", 5 * total / 100)
