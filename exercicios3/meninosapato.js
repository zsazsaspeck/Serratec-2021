//três pares de tenis vale 30, então cada vale 10
//pra chegar a 20, pega um par de tenis, e dois garoto com apito, então logo eles valem 5


var pardetenis = 10;
var garotocomapito = 5;
var doisapitos = 4;
var tenissolo = pardetenis / 2;
var apitosolo = doisapitos - 2;
var garotosemapito = 5 - apitosolo;
var result = tenissolo + garotosemapito * apitosolo;

console.log(result);

