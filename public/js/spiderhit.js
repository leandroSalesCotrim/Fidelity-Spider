sp = Number(sessionStorage.SPIDERPOINTS_USUARIO);
id_usuario = sessionStorage.ID_USUARIO;
span_sp.innerHTML = sp;


var hp_j1 = 100;
var hp_j2 = 100;
var anim_soco_j1 = 0;
var anim_soco_j2 = 0;
var anim_desvio_j1 = 0;
var anim_desvio_j2 = 0;
var partida = 0;
var rodada = 1;
var vidasJ1 = 2;
var vidasJ2 = 2;
var img_j1 = document.getElementById('img_j1');
var img_j2 = document.getElementById('img_j2');

function atualizar_sp() {
    //garantindo que o usuário não possa executar uma atualização sem estar logado
    if (sessionStorage.TIPO_USUARIO == "adm") {
        window.location = "./dashboard-adm.html";
    } else if (sessionStorage.TIPO_USUARIO == undefined) {
        window.location = "./login.html";
    } else {

        sp = sp + 300;

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
                throw ("Houve um erro ao tentar adicionar os pontos!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }
}

function iniciar_jogo() {
    iniciar_card.style.display = "none";
    partida = 1; //inicia partida
    musica = document.getElementById('musicaFundo');
    audioJ1 = document.getElementById('audioJ1');

    // Lista de reprodução da musica
    var listaMusica = [1, 2, 3, 4];

    //Randomizando a lista para iniciar o jogo com uma musica aleatoria
    var numeroLista = Math.floor(Math.random() * listaMusica.length);


    if (listaMusica[numeroLista] == 1) {
        musica.src = "audio/musicas/riverStage.mp3";
    } else if (listaMusica[numeroLista] == 2) {
        musica.src = "audio/musicas/swampStage.mp3";
    } else if (listaMusica[numeroLista] == 3) {
        musica.src = "audio/musicas/towerStage.mp3";
    } else if (listaMusica[numeroLista] == 4) {
        musica.src = "audio/musicas/CarnivalStage.mp3";
    }
    //DEFININDO VOLUME
    musica.volume = 0.6;
    audioJ1.volume = 0.6;
    audioJ2.volume = 0.6;

    musica.play();

    //se a partida for iniciada, o jogo funciona
    if (partida == 1) {

        // Lista de qual personagem fala primeiro ao iniciar a partida
        var primeiroFala = [1, 2];

        //Randomizando a lista para que ao iniciar o jogo um personagem aleatorio falar
        var numero_personagem_lista = Math.floor(Math.random() * primeiroFala.length);

        if (primeiroFala[numero_personagem_lista] == 1) {
            // Lista das falas que podem ser reproduzidas do aranha
            var fraseAranha = [1, 2, 3, 4, 5];

            //Randomizando a lista para que seja reproduzida uma frase aleatoria
            var numero_fraseA_lista = Math.floor(Math.random() * fraseAranha.length);

            if (fraseAranha[numero_fraseA_lista] == 1) {
                audioJ1.src = "audio/aranha/frase1.mp3";
            } else if (fraseAranha[numero_fraseA_lista] == 2) {
                audioJ1.src = "audio/aranha/frase2.mp3";
            } else if (fraseAranha[numero_fraseA_lista] == 3) {
                audioJ1.src = "audio/aranha/frase3.mp3";
            } else if (fraseAranha[numero_fraseA_lista] == 4) {
                audioJ1.src = "audio/aranha/frase4.mp3";
            } else if (fraseAranha[numero_fraseA_lista] == 5) {
                audioJ1.src = "audio/aranha/frase5.mp3";
            }

            audioJ1.play();
        } else if (primeiroFala[numero_personagem_lista] == 2) {
            // Lista das falas que podem ser reproduzidas do venom
            var fraseVenom = [1, 2, 3, 4];

            //Randomizando a lista para que seja reproduzida uma frase aleatoria
            var numero_fraseV_lista = Math.floor(Math.random() * fraseVenom.length);

            if (fraseVenom[numero_fraseV_lista] == 1) {
                audioJ2.src = "audio/venom/frase1.mp3";
            } else if (fraseVenom[numero_fraseV_lista] == 2) {
                audioJ2.src = "audio/venom/frase2.mp3";
            } else if (fraseVenom[numero_fraseV_lista] == 3) {
                audioJ2.src = "audio/venom/frase3.mp3";
            } else if (fraseVenom[numero_fraseV_lista] == 4) {
                audioJ2.src = "audio/venom/frase4.mp3";
            }

            audioJ2.play();
        }

        //Função que reconhece as teclas pressionadas na pagina e faz a lógica do jogo e animações
        function gameplay(event) {

            //Se o evento do key code == 65 (letra A) retornar true,então faça a animação 
            if (event.keyCode == 65) {
                img_j1.src = "img/spiderhit/aranha_soco.png";//troca para imagem de soco
                teclaA.src = "img/spiderhit/tecladoA-vermelho.png"

                anim_soco_j1 = 1;

                //Após 200ms de entrar no if, retorna a imagem a forma original 
                setTimeout(function () {
                    img_j1.src = "img/spiderhit/aranha_pose.png";//volta para imagem original
                    teclaA.src = "img/spiderhit/tecladoA.png"

                    anim_soco_j1 = 0;
                }, 200);


            } else if (event.keyCode == 68) {
                img_j1.src = "img/spiderhit/aranha_desvio.png";//troca para imagem de desvio
                teclaD.src = "img/spiderhit/tecladoD-vermelho.png"
                img_j1.style.height = "70%";//troca a altura
                img_j1.style.marginTop = "60%";//troca a posição

                anim_desvio_j1 = 1;

                //Após 200ms de entrar no if, retorna a imagem a forma original
                setTimeout(function () {
                    img_j1.src = "img/spiderhit/aranha_pose.png";//volta para imagem original
                    teclaD.src = "img/spiderhit/tecladoD.png"
                    img_j1.style.height = "100%";//volta para altura original
                    img_j1.style.marginTop = "0%";//volta para posição original

                    anim_desvio_j1 = 0;
                }, 600);

            } else if (event.keyCode == 74) {
                img_j2.src = "img/spiderhit/venom_soco.png";//troca para imagem de soco
                teclaJ.src = "img/spiderhit/tecladoJ-vermelho.png"

                anim_soco_j2 = 1;

                //Após 200ms de entrar no if, retorna a imagem a forma original
                setTimeout(function () {
                    img_j2.src = "img/spiderhit/venom_pose.png";//volta para imagem original
                    teclaJ.src = "img/spiderhit/tecladoJ.png"

                    anim_soco_j2 = 0;
                }, 200);

            } else if (event.keyCode == 75) {
                img_j2.src = "img/spiderhit/venom_desvio.png";//troca para imagem de desvio
                teclaK.src = "img/spiderhit/tecladoK-vermelho.png"

                img_j2.style.height = "70%";//troca a altura
                img_j2.style.marginTop = "25%";//troca a posição

                anim_desvio_j2 = 1;

                //Após 200ms de entrar no if, retorna a imagem a forma original
                setTimeout(function () {
                    img_j2.src = "img/spiderhit/venom_pose.png";//volta para imagem original
                    teclaK.src = "img/spiderhit/tecladoK.png"
                    img_j2.style.height = "100%";//volta para altura original
                    img_j2.style.marginTop = "0%";//volta para posição original

                    anim_desvio_j2 = 0;

                }, 600);
            }

            //se o J1 dar um soco e o J2 não desviar, o J2 recebe dano
            if (anim_soco_j1 == 1 && anim_desvio_j2 == 0) {

                vida_j2.style.width = (Number(hp_j2_atual.innerHTML) - 3) + "%";
                hp_j2_atual.innerHTML = Number(hp_j2_atual.innerHTML) - 3;

                vida_j2.style.backgroundColor = '#1b9419';
                vida_j2.style.transition = '0s';
                img_j2.style.filter = "saturate(3)";

                setTimeout(function () {
                    vida_j2.style.transition = '0.5s';
                    img_j2.style.filter = "saturate(1)";

                    vida_j2.style.backgroundColor = '#22E91E';

                }, 200);


            } else
                //Se a animação de desvio do J2 e a animação de ataque do j1 forem ativadas ao mesmo tempo
                //Não faça nada
                if (anim_desvio_j2 == 1 && anim_soco_j1 == 1) {
                }

            //se o J2 dar um soco e o J1 não desviar, o J1 recebe dano
            if (anim_soco_j2 == 1 && anim_desvio_j1 == 0) {

                vida_j1.style.width = (Number(hp_j1_atual.innerHTML) - 3) + "%";
                hp_j1_atual.innerHTML = Number(hp_j1_atual.innerHTML) - 3;

                vida_j1.style.backgroundColor = '#1b9419';
                vida_j1.style.transition = '0s';
                img_j1.style.filter = "saturate(3)";

                setTimeout(function () {
                    vida_j1.style.transition = '0.5s';

                    vida_j1.style.backgroundColor = '#22E91E';
                    img_j1.style.filter = "saturate(1)";


                }, 200);

            } 

            //Se um dos jogadores tiver a vida menor ou igual a 0, a partida se
            //encerra e o eventListener para reconhecer as teclas é removido
            if (Number(hp_j2_atual.innerHTML) <= 0 || Number(hp_j1_atual.innerHTML) <= 0) {
                if (Number(hp_j1_atual.innerHTML) <= 0) {
                    alert("Venom venceu a rodada " + rodada);
                    vidasJ1 = vidasJ1 - 1;
                    vidasJ2 = vidasJ2 + 1;

                    vida_j1.style.width = "100%";
                    hp_j1_atual.innerHTML = 100;
                    vidas_j1.innerHTML = ``;
                    for (var c = 0; c < vidasJ1; c++) {
                        vidas_j1.innerHTML += `
                        <img src="img/spiderhit/coracao.png" alt="">
                        `
                    }


                    vida_j2.style.width = "100%";
                    hp_j2_atual.innerHTML = 100;
                    vidas_j2.innerHTML = ``;
                    for (var c = 0; c < vidasJ2; c++) {
                        vidas_j2.innerHTML += `
                        <img src="img/spiderhit/coracao.png" alt="">
                        `
                    }
                    // Lista das falas que podem ser reproduzidas do venom
                    var fraseVenom = [1, 2, 3, 4];

                    //Randomizando a lista para que seja reproduzida uma frase aleatoria
                    var numero_fraseV_lista = Math.floor(Math.random() * fraseVenom.length);

                    if (fraseVenom[numero_fraseV_lista] == 1) {
                        audioJ2.src = "audio/venom/frase1.mp3";
                    } else if (fraseVenom[numero_fraseV_lista] == 2) {
                        audioJ2.src = "audio/venom/frase2.mp3";
                    } else if (fraseVenom[numero_fraseV_lista] == 3) {
                        audioJ2.src = "audio/venom/frase3.mp3";
                    } else if (fraseVenom[numero_fraseV_lista] == 4) {
                        audioJ2.src = "audio/venom/frase4.mp3";
                    }

                    audioJ2.play();

                } else if (Number(hp_j2_atual.innerHTML) <= 0) {
                    alert("Homem-aranha venceu a rodada " + rodada);
                    vidasJ2 = vidasJ2 - 1;
                    vidasJ1 = vidasJ1 + 1;

                    vida_j1.style.width = "100%";
                    hp_j1_atual.innerHTML = 100;
                    vidas_j1.innerHTML = ``;
                    for (var c = 0; c < vidasJ1; c++) {
                        vidas_j1.innerHTML += `
                        <img src="img/spiderhit/coracao.png" alt="">
                        `
                    }

                    vida_j2.style.width = "100%";
                    hp_j2_atual.innerHTML = 100;
                    vidas_j2.innerHTML = ``;
                    for (var c = 0; c < vidasJ2; c++) {
                        vidas_j2.innerHTML += `
                        <img src="img/spiderhit/coracao.png" alt="">
                        `
                    }
                    // Lista das falas que podem ser reproduzidas do aranha
                    var fraseAranha = [1, 2, 3, 4, 5];

                    //Randomizando a lista para que seja reproduzida uma frase aleatoria
                    var numero_fraseA_lista = Math.floor(Math.random() * fraseAranha.length);

                    if (fraseAranha[numero_fraseA_lista] == 1) {
                        audioJ1.src = "audio/aranha/frase1.mp3";
                    } else if (fraseAranha[numero_fraseA_lista] == 2) {
                        audioJ1.src = "audio/aranha/frase2.mp3";
                    } else if (fraseAranha[numero_fraseA_lista] == 3) {
                        audioJ1.src = "audio/aranha/frase3.mp3";
                    } else if (fraseAranha[numero_fraseA_lista] == 4) {
                        audioJ1.src = "audio/aranha/frase4.mp3";
                    } else if (fraseAranha[numero_fraseA_lista] == 5) {
                        audioJ1.src = "audio/aranha/frase5.mp3";
                    }
                    audioJ1.play();
                }
                rodada++;
                rodada_atual.innerHTML = "Round " + rodada;
            }

            if (vidasJ1 == 0 || vidasJ2 == 0) {
                if (Number(vidasJ2) <= 0) {
                    audioJ2.src = "audio/venom/derrota.mp3";
                    audioJ2.play();


                    setTimeout(function () {
                        alert("Fim de jogo \nHomem-aranha venceu\nVocê ganhou 300 SP");
                        var vencedor = "Homem-aranha";
                        img_j1.style.filter = "drop-shadow(-20px 5px 0px #0B689E)";
                        img_j2.style.filter = "drop-shadow(-20px 5px 0px #EB1C23)";

                        setTimeout(function () {
                            atualizar_sp();
                            vitoriaSh(vencedor);
                        }, 4000)

                    }, 100);

                } else if (Number(vidasJ1) <= 0) {
                    audioJ1.src = "audio/aranha/derrota.mp3";
                    audioJ1.play();


                    setTimeout(function () {
                        alert("Fim de jogo \nVenom venceu\nVocê ganhou 300 SP");
                        var vencedor = "Venom";
                        img_j2.style.filter = "drop-shadow(-20px 5px 0px #0B689E)";
                        img_j1.style.filter = "drop-shadow(-20px 5px 0px #EB1C23)";

                        setTimeout(function () {
                            atualizar_sp();
                            vitoriaSh(vencedor);
                        }, 4000)

                    }, 100);
                }

                document.removeEventListener('keydown', gameplay);
                partida = 0;
            }

            function vitoriaSh(vencedor) {
                var corpo = {
                    id_usuario: id_usuario,
                    vencedor: vencedor
                }
                fetch(`/usuarios/vitoriaSh`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(corpo)
                }).then(function (resposta) {
                    console.log("resposta: ", resposta);
                    if (resposta.ok) {
                        throw ("Tudo certo!");
                    } else {
                        throw ("Houve um erro ao tentar adicionar os pontos!");
                    }
                }).catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                });
                return false;
            }
        }
        //adicionando evento que chama função ao pressionar a tecla especificada em "keycode"
        document.addEventListener('keydown', gameplay);
    } 
}