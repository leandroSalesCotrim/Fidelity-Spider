    // var mode = localStorage.getItem('status_dark');//VARIAVEL QUE DEFINE SE O SITE ESTÁ COM O MODO ESCURO ATIVADO OU DESATIVADO

    // //RESGATANDO ELEMENTOS DO HTML
    // //GET ELEMENTS BY CLASS NAME TRÁS TODOS OS ELEMENTOS COM O MESMO CLASSNAME EM FORMATO DE VETOR
    // var url_atual = window.location.href;
    //     var txt = document.getElementsByClassName("txt_dark");
    //     var btn = document.getElementById("btn_inicio");
    //     var url_video = document.getElementById("video");
    //     var url_icon = document.getElementById("src_icon");
    //     var txtLogin = document.getElementsByClassName("txt_dark");
    



    // function abrirCadastro(){
        
    //     container1.style.width = "50%";
    //     container1.style.transition = "1s";
        
    //     container2.style.opacity = "1";
    //     container2.style.width = "50%";
    //     container2.style.display = "block";
    //     container2.style.transition = "1s";

    //     card_login_cadastro.style.width = "60%";
    //     card_login_cadastro.style.transition = "1s";
    // }

    // //FUNÇÃO QUE DEIXA O SITE NO MODO ESCURO
    // function check_dark_mode(){

    // //CONDIÇÃO PARA RECONHCER SE O MODO ESCURO ESTA LIGADO OU NÃO
    //     if(mode == '0'){
    //         document.body.style.backgroundColor = "#151515";
            
    //         //LAÇO DE REPETIÇÃO QUE ALTERA A COR DA FONTE DE TODOS OS ELEMENTOS DENTRO DO VETOR "TXT"
    //         //O LAÇO TERMINA NO NUMERO DE ELEMENTOS RESGATADO PELO GETELEMENTSBYCLASSNAME (.LENGTH)
    //         var i = 0;
    //         while ( i < txt.length) {
    //             txt[i].style.color = "#f5f5f5";
    //             i++;
    //         }
            
    //         if(url_atual.indexOf("index.html" > -1)){
    //             btn.style.backgroundColor = "#151515";
    //             btn.style.transition = "none";
    //         }
    //         url_icon.src = "img/icones/dark-mode-light.png";

    //         //ALTERA A DIV DO VIDEO DA PAGINA ATRIBUINDO O VIDEO COM FUNDO PRETO
    //         video_inicio.innerHTML = `
    //             <video width="auto" height="70%" autoplay muted poster="img/aranha-vermelha.png" loop src="img/logo-preto.mp4">
    //             </video>
    //         `;
            
    //         //DEFINE O STATUS DO DARK_MODE ATIVADO E ARMAZENA
    //         localStorage.setItem('status_dark', '1');
    //         mode = 1;

    //     }else {
    //         document.body.style.backgroundColor = "#f5f5f5";
            
    //         //LAÇO DE REPETIÇÃO QUE ALTERA A COR DA FONTE DE TODOS OS ELEMENTOS DENTRO DO VETOR "TXT"
    //         //O LAÇO TERMINA NO NUMERO DE ELEMENTOS RESGATADO PELO GETELEMENTSBYCLASSNAME (.LENGTH)
    //         var i = 0;
    //         while ( i < txt.length) {
    //             txt[i].style.color = "#151515";
    //             i++;
    //         }
            
    //         btn.style.backgroundColor = "#f5f5f5";
    //         btn.style.transition = "none";
    //         url_icon.src = "img/icones/dark-mode-dark.png";

    //         //ALTERA A DIV DO VIDEO DA PAGINA ATRIBUINDO O VIDEO COM FUNDO PRETO
    //         video_inicio.innerHTML = `
    //             <video width="auto" height="70%" autoplay muted poster="img/aranha-vermelha.png" loop src="img/logo.mp4">
    //             </video>
    //         `;

    //         //DEFINE O STATUS DO DARK_MODE ATIVADO E ARMAZENA
    //         localStorage.setItem('status_dark', '0');
    //         mode = 0;
    //     }
        
    // }


    