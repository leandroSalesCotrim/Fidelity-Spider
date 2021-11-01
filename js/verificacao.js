    var mode = localStorage.getItem('status_dark');//VARIAVEL QUE DEFINE SE O SITE ESTÁ COM O MODO ESCURO ATIVADO OU DESATIVADO
    
    //RESGATANDO ELEMENTOS DO HTML
    //GET ELEMENTS BY CLASS NAME TRÁS TODOS OS ELEMENTOS COM O MESMO CLASSNAME EM FORMATO DE VETOR
    var txt = document.getElementsByClassName("txt_dark");
    var txtLogin = document.getElementsByClassName("txt_dark");
    var btn = document.getElementById("btn_inicio");
    var url_video = document.getElementById("video");
    var url_icon = document.getElementById("src_icon");
    
    var mode = localStorage.getItem('status_dark');


    //CONDIÇÃO PARA RECONHCER SE O MODO ESCURO ESTA LIGADO OU NÃO
        if(mode == '1'){
            document.body.style.backgroundColor = "#151515";
            
            //LAÇO DE REPETIÇÃO QUE ALTERA A COR DA FONTE DE TODOS OS ELEMENTOS DENTRO DO VETOR "TXT"
            //O LAÇO TERMINA NO NUMERO DE ELEMENTOS RESGATADO PELO GETELEMENTSBYCLASSNAME (.LENGTH)
            var i = 0;
            while ( i < txt.length) {
                txt[i].style.color = "#f5f5f5";
                i++;
            }
            

                btn.style.backgroundColor = "#151515";
                btn.style.transition = "none";
            url_icon.src = "img/icones/dark-mode-light.png";

            //ALTERA A DIV DO VIDEO DA PAGINA ATRIBUINDO O VIDEO COM FUNDO PRETO
            video_inicio.innerHTML = `
                <video width="auto" height="70%" autoplay muted poster="img/aranha-vermelha.png" loop src="img/logo-preto.mp4">
                </video>
            `;
        }
        if (mode == '0') {
            document.body.style.backgroundColor = "#f5f5f5";
            
            //LAÇO DE REPETIÇÃO QUE ALTERA A COR DA FONTE DE TODOS OS ELEMENTOS DENTRO DO VETOR "TXT"
            //O LAÇO TERMINA NO NUMERO DE ELEMENTOS RESGATADO PELO GETELEMENTSBYCLASSNAME (.LENGTH)
            var i = 0;
            while ( i < txt.length) {
                txt[i].style.color = "#151515";
                i++;
            }
                btn.style.backgroundColor = "#f5f5f5";
                btn.style.transition = "none";
                url_icon.src = "img/icones/dark-mode-dark.png";
                
                //ALTERA A DIV DO VIDEO DA PAGINA ATRIBUINDO O VIDEO COM FUNDO PRETO
            video_inicio.innerHTML = `
                <video width="auto" height="70%" autoplay muted poster="img/aranha-vermelha.png" loop src="img/logo.mp4">
                </video>
            `;
        }
        