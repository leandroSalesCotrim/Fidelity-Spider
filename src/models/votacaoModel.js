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

// function listar_votos_duende() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_votos_duende()");
//     var instrucao = `
//         SELECT COUNT(idVoto) as votos FROM votos WHERE vilao_voto = 'Duende Macabro';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function listar_votos_carnificina() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_votos_carnificina()");
//     var instrucao = `
//         SELECT COUNT(idVoto) as votos FROM votos WHERE vilao_voto = 'Carnificina';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function listar_votos_chacal() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_votos_chacal()");
//     var instrucao = `
//         SELECT COUNT(idVoto) as votos FROM votos WHERE vilao_voto = 'Chacal';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function listar_votos_morbius() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_votos_morbius()");
//     var instrucao = `
//         SELECT COUNT(idVoto) as votos FROM votos WHERE vilao_voto = 'Morbius';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function listar_votos_mysterio() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_votos_mysterio()");
//     var instrucao = `
//         SELECT COUNT(idVoto) as votos FROM votos WHERE vilao_voto = 'Mysterio';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function listar_votos_kaine() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_votos_kaine()");
//     var instrucao = `
//         SELECT COUNT(idVoto) as votos FROM votos WHERE vilao_voto = 'Kaine';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function listar_votos_kraven() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_votos_kraven()");
//     var instrucao = `
//         SELECT COUNT(idVoto) as votos FROM votos WHERE vilao_voto = 'Kraven';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
// function verificar_voto(idUsuario) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificar_voto(): ", idUsuario)
//     var instrucao = `
//         SELECT * FROM votos where fk_usuario = '${idUsuario}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// module.exports = {
//     listar_votos_duende,
//     listar_votos_carnificina,
//     listar_votos_chacal,
//     listar_votos_morbius,
//     listar_votos_mysterio,
//     listar_votos_kaine,
//     listar_votos_kraven,
//     verificar_voto
// }
