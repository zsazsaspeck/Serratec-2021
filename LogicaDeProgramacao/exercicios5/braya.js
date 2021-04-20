const ler = require("prompt-sync")();

var tempo = ler("Olá Braya! Como está o tempo hoje? ");

if (tempo == "sol"){
    let sol = "Manhã: Praia. \n Almoço: Lanche \n Após Almoço: Assistir televisão e cochilar.";
    console.log("Para esse lindo fim de semana de sol: === SEXTA === \n", sol);
    console.log(" === SABADO === \n", sol);
    console.log(" === DOMINGO === \n", sol);
}
else{
    let casa = "Manhã: Estudar. \n Almoço: Feijoada \n Após Almoço: Assistir televisão e cochilar."
    console.log("Para esse fim de semana de tempo fechado: === SEXTA === \n", casa);
    console.log(" === SABADO === \n", casa);
    console.log(" === DOMINGO === \n", casa);
}