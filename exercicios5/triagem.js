
//A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela

const ler = require("prompt-sync")();
var nome = ler("Qual é o seu nome? ");
var vacina = ler("Já foi vacinado [S] ou [N]")
var result = vacina == "N";
if (vacina == "N")console.log("Sujeito a infecção: ", result)
else console.log("Sujeito a infecção: ", result);
console.log("Resultado para:", nome);