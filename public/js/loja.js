nome = sessionStorage.NOME_USUARIO;
sp = sessionStorage.SPIDERPOINTS_USUARIO;
id_usuario = sessionStorage.ID_USUARIO;
span_usuario.innerHTML = nome;
span_sp.innerHTML = sp;
id_jogo = 0;

function atualizar_sp() {
    //garantindo que o usuário não possa executar uma atualização sem estar logado
    if (sessionStorage.TIPO_USUARIO == "adm") {
        window.location = "./dashboard-adm.html";
    } else if (sessionStorage.TIPO_USUARIO == undefined) {
        window.location = "./login.html";
    }

    var corpo = {
        id_usuario: id_usuario,
        spider_points: sp
    }


    fetch(`/usuarios/acumular`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)

    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            sessionStorage.SPIDERPOINTS_USUARIO = sp;
            location.reload();
        } else {
            throw ("Houve um erro ao tentar atualizar os pontos!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function resgate(num_resgate) {
    //garantindo que o usuário não possa executar uma atualização sem estar logado
    if (sessionStorage.TIPO_USUARIO == "adm") {
        window.location = "./dashboard-adm.html";
    } else if (sessionStorage.TIPO_USUARIO == undefined) {
        window.location = "./login.html";
    }
    if (num_resgate == 1) {
        if (resgate1.innerHTML == "Indisponivel") {
            alert('Você já resgatou este prêmio');
        } else {
            if (sp >= 250000) {
                id_jogo = 2;
                sp = sp - 250000;
                setTimeout(function () {
                    atualizar_sp()
                }, 200);
            } else {
                alert("Você ainda não possui Spider-Points suficiente :(");
            }
        }
    } else if (num_resgate == 2) {
        if (resgate2.innerHTML == "Indisponivel") {
            alert('Você já resgatou este prêmio');
        } else {
            if (sp >= 500000) {
                id_jogo = 1;
                sp = sp - 500000;
                setTimeout(function () {
                    atualizar_sp()
                }, 200);
            } else {
                alert("Você ainda não possui Spider-Points suficiente :(");
            }
        }
    }

    if (id_jogo != 0) {
        var cupom_resgate = "";

        var lista = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

        for (var c = 0; c < lista.length; c++) {
            cupom_resgate += lista[Math.floor(Math.random() * lista.length)];
        }
        console.log(cupom_resgate);


        var corpo = {
            cupom_resgate: cupom_resgate,
            id_jogo: id_jogo,
            id_usuario: id_usuario,
        }
        console.log(corpo);

        fetch("/usuarios/resgatar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(corpo)
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                window.alert("Resgate realizado com sucesso!\nAqui está o seu cupom de desconto: " + cupom_resgate);
                window.location = "./loja.html";
            } else {
                throw ("Houve um erro ao tentar realizar o resgate!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }

}

function verificar_resgate() {
    //garantindo que o usuário não possa executar uma atualização sem estar logado
    if (sessionStorage.TIPO_USUARIO == "adm") {
        window.location = "./dashboard-adm.html";
    } else if (sessionStorage.TIPO_USUARIO == undefined) {
        window.location = "./login.html";
    } else {

        var corpoR = {
            id_usuario: id_usuario,
        }

        fetch("/usuarios/verificar_resgate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(corpoR)
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO verificar_resgate()!")

            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));
                    var resgates = resposta;

                    // for (let i = 0; i < resposta.length; i++) {
                    //     console.log(resgates);
                    // }

                    if (resgates.length >= 0 && resgates.length < 2) {
                        console.log("O usuario ainda pode resgatar um premio");
                        for (var i = 0; i < resgates.length; i++) {
                            var tituloJogo = [];
                            tituloJogo[i] = resgates[i].nomejogo;
                            console.log("O usuário resgatou o " + tituloJogo);

                            if (tituloJogo[i] == "SM-MM") {
                                resgate1.innerHTML = "Indisponivel";
                                console.log(tituloJogo[0]);
                            } else if (tituloJogo[i] == "SM-PS4") {
                                resgate2.innerHTML = "Indisponivel";
                            } else if (tituloJogo[i] == "SM-2") {
                                resgate3.innerHTML = "Indisponivel";
                            } else if (tituloJogo[i] == "WOLV") {
                                resgate4.innerHTML = "Indisponivel";
                                console.log(tituloJogo[0]);
                            }
                        }


                    }
                    if (resgates.length == 2) {
                        console.log("O usuario já resgatou o maximo de prêmios");

                        var btn = document.getElementsByClassName('btn_dark2');
                        for (var c = 0; c < btn.length; c++)
                            btn[c].innerHTML = "Indisponivel";
                    }
                });
                throw ("O usuario pode resgatar!");

            } else {


                throw ("O usuario não pode resgatar !");
            }
        }).catch(function (erro) {
            console.log(erro);
        })
        return false;
    }
}
verificar_resgate();