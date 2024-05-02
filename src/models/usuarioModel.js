var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarResgate() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarResgate()");
    var instrucao = `
        SELECT nome,email,nomeJogo,preco,desconto,DATE_FORMAT (dataHoraResgate,'%d/%m/%Y %H:%i:%s') as dataHoraResgate
	        FROM usuario JOIN resgate ON idUsuario = fk_Usuario
	        JOIN jogo ON idJogo = fk_Jogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(nome, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE nome = '${nome}' AND senha = SHA2('${senha}',224);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function checar_cadastro(nome, cpf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function checar_cadastro(): ", nome, cpf)
    var instrucao = `
        SELECT * FROM usuario WHERE nome = '${nome}' OR cpf = '${cpf}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar_resgate(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificar_resgate(): ", idUsuario)
    var instrucao = `
        SELECT * FROM resgate 
            JOIN usuario ON idUsuario = fk_usuario 
            JOIN jogo ON idJogo = fk_jogo 
            WHERE fk_usuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function resgatar(cupom, idJogo, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function resgatar():", cupom, idJogo, idUsuario);
    var instrucao = `
    INSERT INTO resgate (cupomResgate,fk_jogo,fk_usuario) 
	    VALUES ('${cupom}',${idJogo},${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, cpf, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, senha, email, cpf);
    var instrucao = `
        INSERT INTO usuario (nome, email, cpf, senha, tipoUsuario) VALUES ('${nome}', '${email}', '${cpf}',SHA2('${senha}',224),'usuario');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_sp(spiderPoints, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar_sp():", spiderPoints, idUsuario);
    var instrucao = `
        UPDATE usuario SET spiderPoints = ${spiderPoints} WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votar(vilao, idUsuario, spiderPoints) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votar():", vilao, idUsuario, spiderPoints);
    var instrucao = `
        INSERT INTO votos (vilao_voto, fk_usuario) VALUES ('${vilao}', '${idUsuario}');
    `;

    atualizar_sp(spiderPoints, idUsuario);//chamando função para atualizar os spider points atuais

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function vitoriaSh(vencedor, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function vitoriaSh():", vencedor, idUsuario);
    var instrucao = `
        INSERT INTO spiderhit (vencedor, fk_usuario) VALUES ('${vencedor}', '${idUsuario}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_vitorias_spiderhit(personagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_vitorias_spiderhit()");
    var instrucao = `
        SELECT COUNT(vencedor) as vitorias FROM spiderhit where vencedor = '${personagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

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
    entrar,
    cadastrar,
    listar,
    checar_cadastro,
    listarResgate,
    atualizar_sp,
    verificar_resgate,
    resgatar,
    votar,
    vitoriaSh,
    listar_vitorias_spiderhit,
    listar_votos_vilao,
    verificar_voto
};