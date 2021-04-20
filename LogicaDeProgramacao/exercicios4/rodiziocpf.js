//A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares. 
//dia (hoje): 16
//CPF (após o hífen): 41
//Autorizado a entrar na loja? False

const ler = require("prompt-sync")();
var dia = Number(ler("Que dia é hoje?"));
var cpf = Number(ler("Qual seu CPF após o hífen?"));
var diacpf = dia + cpf;
var par = diacpf % 2 == 0;
var impar = diacpf % 2 != 0;
console.log("Autorizado a entrar na loja?", par || impar);
    
    
    
    //else(cpf % 2 == 0)console.log("Autorizado a entrar na loja?")};

