var database = require("../database/config");

function listar_votos_vilao(vilao) {
    console.log(`Listando votos para o vilão ${vilao}`);
    var instrucao = `
        SELECT COUNT(idVoto) as votos FROM votos WHERE vilao_voto = '${vilao}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar_voto(idUsuario) {
    console.log("Verificando se o usuário já votou: ", idUsuario)
    var instrucao = `
        SELECT * FROM votos where fk_usuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar_votos_vilao,
    verificar_voto
}