//O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
var ler = require("prompt-sync")();
var clientesnaloja = ler(("Quantos clientes na loja? "));
var clientemax = 40;
var client = clientemax > clientesnaloja;
console.log("Disponível para proseguir?", client);
