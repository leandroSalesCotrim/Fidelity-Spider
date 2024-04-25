sp = Number(sessionStorage.SPIDERPOINTS_USUARIO);
id_usuario = Number(sessionStorage.ID_USUARIO);
span_sp.innerHTML = sp;

const viloes = [
    { nome: "Duende macabro", id: "duende" },
    { nome: "Carnificina", id: "carnificina" },
    { nome: "Chacal", id: "chacal" },
    { nome: "Morbius", id: "morbius" },
    { nome: "Mysterio", id: "mysterio" },
    { nome: "Kaine", id: "kaine" },
    { nome: "Kraven", id: "kraven" },
];

const divViloes = document.getElementById("div_viloes");

viloes.forEach((vilao, index) => {
    const cardHtml = `
        <div class="card_viloes">
            <div class="img" id="img${index + 1}">
                <div class="conteudo_card" id="fundo">
                    <div class="nome" onclick="abrir_modal('${vilao.id}')">
                        <h1>${vilao.nome}</h1>
                    </div>
                    <div id="confirmar_${vilao.id}" class="div_votar">
                        <h4>votar neste vilão?</h4>
                        <div class="div_imgs_votar">
                            <img onclick="return votar('${vilao.id}')" id="img_confirmar${index + 1}" draggable="false"
                                src="img/viloes/verifica.png" alt="">
                            <img onclick="fechar_modal()" id="img_cancelar${index + 1}" draggable="false"
                                src="img/viloes/excluir.png" alt="">
                        </div>
                    </div>
                    <div class="qtd_votos" id="qtd_votos_${vilao.id}">
                        <h2>votos:<span id="qtd_${vilao.id}">${vilao.votos}</span></h2>
                    </div>
                </div>
            </div>
        </div>
    `;
    divViloes.insertAdjacentHTML("beforeend", cardHtml);
});

var confirmar_modal = document.getElementsByClassName("div_votar");
var qtd_votos = document.getElementsByClassName("qtd_votos");

confirmar1 = document.getElementById('confirmar_duende');
confirmar2 = document.getElementById('confirmar_carnificina');
confirmar3 = document.getElementById('confirmar_chacal');
confirmar4 = document.getElementById('confirmar_morbius');
confirmar5 = document.getElementById('confirmar_mysterio');
confirmar6 = document.getElementById('confirmar_kaine');
confirmar7 = document.getElementById('confirmar_kraven');

img_confirmar = document.getElementById('img_confirmar');
img_confirmar2 = document.getElementById('img_confirmar2');
img_confirmar3 = document.getElementById('img_confirmar3');
img_confirmar4 = document.getElementById('img_confirmar4');
img_confirmar5 = document.getElementById('img_confirmar5');
img_confirmar6 = document.getElementById('img_confirmar6');
img_confirmar7 = document.getElementById('img_confirmar7');

img_cancelar = document.getElementById('img_cancelar');
img_cancelar2 = document.getElementById('img_cancelar2');
img_cancelar3 = document.getElementById('img_cancelar3');
img_cancelar4 = document.getElementById('img_cancelar4');
img_cancelar5 = document.getElementById('img_cancelar5');
img_cancelar6 = document.getElementById('img_cancelar6');
img_cancelar7 = document.getElementById('img_cancelar7');

function listar_votos() {
    viloes.forEach((vilao, index) => {
        var nomeVariavelVoto = "qtd_" + vilao.id;
        var nomeVariavelDiv = "confirmar_" + vilao.id;

        fetch("/usuarios/listar_votos_vilao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ vilao: vilao.nome })
        }).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    window[nomeVariavelDiv].innerHTML = "";
                    window[nomeVariavelVoto].innerHTML = JSON.stringify(resposta[0].votos);
                });
            } else {
            }
        }).catch(function (erro) {
            console.log(erro);
        })
    });

    return false;
}

function verificar_voto() {
    var corpov = {
        id_usuario: id_usuario,
    }

    fetch("/usuarios/verificar_voto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpov)
    }).then(function (resposta) {

        if (resposta.ok) {
            throw ("O usuario pode votar!");
        } else {
            listar_votos();

            var i = 0;

            while (i < confirmar_modal.length) {
                confirmar_modal[i].style.visibility = "hidden";
                i++;
            }

            var c = 0;

            while (c < confirmar_modal.length) {
                fundo[c].style.backgroundColor = "#15151588"
                qtd_votos[c].style.visibility = "visible";
                c++;
            }

            titulo_votacao.innerHTML = 'Você já fez sua escolha!';
            txt_votacao.innerHTML = `Nós agradecemos profundamente pela sua ajuda,
             você não poderá votar novamente, mas ainda assim, você consegue acompanhar com
              quantos votos os vilões possuem atualmente.`;
            throw ("O usuario já votou!");
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

verificar_voto();

function abrir_modal(vilao_selecionado) {
    var i = 0;
    while (i < confirmar_modal.length) {
        confirmar_modal[i].style.opacity = "0";
        confirmar_modal[i].style.visibility = "hidden";
        i++;
    }
    console.log(vilao_selecionado)
    viloes.forEach((vilao, index) => {
        var nomeVariavel = "confirmar_" + vilao.id;
        console.log(vilao_selecionado)
        console.log(vilao)

        if (vilao.id == vilao_selecionado) {
            console.log("teste " + window[nomeVariavel]);
            window[nomeVariavel].style.visibility = "visible";
            window[nomeVariavel].style.opacity = "1";
        }


    });
}

function fechar_modal() {
    var i = 0;
    while (i < confirmar_modal.length) {
        confirmar_modal[i].style.opacity = "0";
        confirmar_modal[i].style.visibility = "hidden";
        i++;
    }

}

function votar(vilao) {
    //garantindo que o usuário não possa executar uma atualização sem estar logado
    if (sessionStorage.TIPO_USUARIO == "adm") {
        window.location = "./dashboard-adm.html";
    } else if (sessionStorage.TIPO_USUARIO == undefined) {
        window.location = "./login.html";
    } else {

        sp = sp + 50000;

        var corpo = {
            id_usuario: id_usuario,
            vilao: vilao,
            spider_points: sp
        }

        fetch(`/usuarios/votar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(corpo)

        }).then(function (resposta) {

            console.log("resposta: ", resposta);
            if (resposta.ok) {
                window.alert("Obrigado por votar no " + vilao + ",\ncomo recompensa você ganhou 50.000 SpiderPoints por isto!");
                sessionStorage.SPIDERPOINTS_USUARIO = sp;
                location.reload();
            } else {
                console.log(resposta);
                throw ("Houve um erro ao tentar votar1!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }
}

