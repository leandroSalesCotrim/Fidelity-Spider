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
        SELECT * FROM usuario WHERE nome = '${nome}' AND senha = '${senha}';
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
        INSERT INTO usuario (nome, email, cpf, senha, tipoUsuario) VALUES ('${nome}', '${email}', '${cpf}','${senha}','usuario');
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

function listar_vitorias_aranha() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_vitorias_aranha()");
    var instrucao = `
        SELECT COUNT(vencedor) as vitorias FROM spiderhit where vencedor = "Homem-aranha";
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_vitorias_venom() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_vitorias_venom()");
    var instrucao = `
        SELECT COUNT(vencedor) as vitorias FROM spiderhit where vencedor = "Venom";
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
    listar_vitorias_aranha,
    listar_vitorias_venom,
};