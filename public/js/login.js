
    function entrar() {

        var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

        var nome = formulario.get("nome");
        var senha = formulario.get("senha");

        console.log("FORM LOGIN: ", nome);
        console.log("FORM SENHA: ", senha);

        if (nome == "" || senha == "") {
            window.alert("Preencha todos os campos para prosseguir!");
            return false;
        }

        fetch("/usuarios/autenticar", {
            method: "POST",
            body: formulario
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.TIPO_USUARIO = json.tipoUsuario;
                    sessionStorage.SPIDERPOINTS_USUARIO = json.spiderPoints;

                    if (sessionStorage.TIPO_USUARIO == "adm") {
                        window.location = "./dashboard-adm.html";
                    } else {
                        window.location = "./dashboard.html";
                    }

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    div_erro.innerHTML = texto;
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }