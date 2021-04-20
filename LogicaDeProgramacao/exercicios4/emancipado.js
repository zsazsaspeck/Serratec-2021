//É considerado “Emancipado” qualquer pessoa a partir de 21 anos, ou o indivíduo do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão segundo o ano do seu nascimento.

var ler = require("prompt-sync")();
var sexo = ler(("Qual é o sexo, masculino ou feminino? [Masculino] ou [Feminino] "));
var ano = ler(("Qual é o ano de nascimento? "))

var anomasc = ano <= 2003;
var masc = anomasc && sexo == "Masculino";

var anofemi = ano <= 2000;
var femi = anofemi && sexo == "Feminino";


console.log("Cidadão emancipado?", masc || femi);
