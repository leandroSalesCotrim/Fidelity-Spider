var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarResgate(req, res) {
    usuarioModel.listarResgate()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var nome = req.body.nome;
    var senha = req.body.senha;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(nome, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Nome e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar_votos_duende(req, res) {
    usuarioModel.listar_votos_duende()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar_votos_carnificina(req, res) {
    usuarioModel.listar_votos_carnificina()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar_votos_chacal(req, res) {
    usuarioModel.listar_votos_chacal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar_votos_morbius(req, res) {
    usuarioModel.listar_votos_morbius()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar_votos_mysterio(req, res) {
    usuarioModel.listar_votos_mysterio()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar_votos_kaine(req, res) {
    usuarioModel.listar_votos_kaine()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar_votos_kraven(req, res) {
    usuarioModel.listar_votos_kraven()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
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
        usuarioModel.verificar_voto(idUsuario)
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

function verificar_resgate(req, res) {
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefinido!" + idUsuario);
    } else {
        usuarioModel.verificar_resgate(idUsuario)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length > 0) {
                        console.log("O usuario ainda pode resgatar");
                        console.log(resultado);
                        res.status(200).json(resultado);
                    } else if (resultado.length == 0) {
                        console.log("O usuario ainda não resgatou nenhum jogo");
                        res.status(200).json(resultado);
                    } else if(resultado.length == 2){
                        res.status(403).send("O usuario não pode fazer mais resgates");
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

function resgatar(req, res) {
    var cupom = req.body.cupom_resgate;
    var idJogo = req.body.id_jogo;
    var idUsuario = req.body.id_usuario;

    if (cupom == undefined) {
        res.status(400).send("Seu cupom está undefined!");
    } else if (idJogo == undefined) {
        res.status(400).send("Seu idJogo está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else {
        usuarioModel.resgatar(cupom, idJogo, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    var nome = req.body.nome_cad;
    var senha = req.body.senha_cad;
    var email = req.body.email_cad;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu E-mail está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar_sp(req, res) {
    var spiderPoints = req.body.spider_points;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (spiderPoints == undefined) {
        res.status(400).send("Seus spiderPoints estão undefined!");
    } else {
        usuarioModel.atualizar_sp(spiderPoints, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao adicionar os pontos a conta2! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function votar(req, res) {
    var vilao = req.body.vilao;
    var idUsuario = req.body.id_usuario;
    var spiderPoints = req.body.spider_points;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (vilao == undefined) {
        res.status(400).send("O vilão escolhido está undefined!");
    } else if (spiderPoints == undefined) {
        res.status(400).send("Seus spiderPoints estão undefined!");
    } else {
        usuarioModel.votar(vilao, idUsuario, spiderPoints)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function vitoriaSh(req, res) {
    var vencedor = req.body.vencedor;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (vencedor == undefined) {
        res.status(400).send("O vencedor está undefined!");
    } else {
        usuarioModel.vitoriaSh(vencedor, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar a vitória! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar_vitorias_aranha(req, res) {
    usuarioModel.listar_vitorias_aranha()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar_vitorias_venom(req, res) {
    usuarioModel.listar_vitorias_venom()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    listarResgate,
    atualizar_sp,
    verificar_voto,
    verificar_resgate,
    resgatar,
    votar,
    listar_votos_duende,
    listar_votos_carnificina,
    listar_votos_chacal,
    listar_votos_morbius,
    listar_votos_mysterio,
    listar_votos_kaine,
    listar_votos_kraven,
    vitoriaSh,
    listar_vitorias_aranha,
    listar_vitorias_venom,
    testar
}