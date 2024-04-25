var votacaoModel = require("../models/votacaoModel");

var votacaoModel = require("../models/votacaoModel");

function listar_votos_vilao(req, res) {
    var vilao = req.body.vilao;
    console.log("o vilão recebido na controller é : "+vilao)

    votacaoModel.listar_votos_vilao(vilao)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function verificar_voto(req, res) {
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefinido!" + idUsuario);
    } else {
        votacaoModel.verificar_voto(idUsuario)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.status(403).send("O usuario já votou");
                    } else if (resultado.length == 0) {
                        console.log("O usuario ainda não votou");
                        res.json(resultado[0]);
                    } else {
                        res.status(403).send("O usuario possui mais de um voto");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve ao realizar a consulta dos votos! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listar_votos_vilao,
    verificar_voto
}