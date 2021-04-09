const ler = require("prompt-sync")();

var a = parseFloat(ler("Digite o valor do lado A ?"));
var b = parseFloat(ler("Digite o valor do lado B ?"));
var c = parseFloat(ler("Digite o valor do lado C ?"));

if (a == b && b == c && c == a){
    console.log("Triângulo Equilátero");
    }
    if (a == b && b != c){
        console.log("Triângulo Isósceles");      
    } 
    else{
          console.log("Triângulo Escaleno");
    }