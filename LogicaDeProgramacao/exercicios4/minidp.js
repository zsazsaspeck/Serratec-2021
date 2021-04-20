/*O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário em um mês, o valor que ele recebe por hora e o percentual de desconto para o INSS, e calcula:
O salário bruto (horas trabalhadas * valor hora)
O valor do desconto para o INSS
O salário líquido (adicionais menos descontos).
Após os cálculos, será impresso o contracheque. O contracheque é a exibição no console das informações com formatação: Salário bruto, valor do desconto do INSS, e o salário líquido do funcionário.*/
var ler = require("prompt-sync")();
var hrstrab = Number(ler("Qual é a sua quantidade de hora trabalhada por mês?"));
var valorhr = Number(ler("Quanto você recebe por hora?"));
var descontinss = Number(ler("Quanto % é descontado do salário:"));
var salariobruto = hrstrab * valorhr;
var inss = descontinss * salariobruto / 100; 
var salarioliq = salariobruto - inss;
console.log("Salário bruto R$", salariobruto);
console.log("Desconto do INSS: R$", inss);
console.log("Salário liquido: R$", salarioliq);
