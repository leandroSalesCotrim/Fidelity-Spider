    var mode = localStorage.getItem('status_dark');//VARIAVEL QUE DEFINE SE O SITE ESTÁ COM O MODO ESCURO ATIVADO OU DESATIVADO
    
    //RESGATANDO ELEMENTOS DO HTML
    //GET ELEMENTS BY CLASS NAME TRÁS TODOS OS ELEMENTOS COM O MESMO CLASSNAME EM FORMATO DE VETOR
    var texto = document.getElementsByClassName("txt_dark");
    var inputs = document.getElementsByClassName("input_login");
    var url_video = document.getElementById("video");
    var url_icon = document.getElementById("src_icon");
    var card_dash = document.getElementsByClassName("box_card");
    var desc_card = document.getElementsByClassName("desc_box_card");
    var btns = document.getElementsByClassName("btn_dark");
    var btns2 = document.getElementsByClassName("btn_dark2");

    //var btn = document.getElementById("btn_login");
    var url_icon = document.getElementById("src_icon");
    
    var mode = localStorage.getItem('status_dark');

    if(mode == '1'){
        document.body.style.backgroundColor = "#151515";
        url_icon.src = "img/icones/dark-mode-light.png";

        if (typeof card_login_cadastro != "undefined") {
            card_login_cadastro.style.backgroundColor = "#0B689E";
        }
        
        if (typeof video_inicio != "undefined") {
            video_inicio.innerHTML = `
                <video width="auto" height="70%" autoplay muted poster="img/aranha-vermelha.png" loop src="img/logo-preto.mp4">
                </video>
            `;
        }
        if (typeof img1 != "undefined") {
            if (typeof img2 != "undefined") {
                if (typeof img3 != "undefined") {
                    if (typeof img4 != "undefined") {
                        if (typeof img5 != "undefined") {
                            if (typeof img6 != "undefined") {
                                if (typeof img7 != "undefined") {
                                    img1.style.borderLeftColor = "#6B0D10";
                                    img1.style.borderRightColor = "#6B0D10";
                                    img2.style.borderLeftColor = "#6B0D10";
                                    img2.style.borderRightColor = "#6B0D10";
                                    img3.style.borderLeftColor = "#6B0D10";
                                    img3.style.borderRightColor = "#6B0D10";
                                    img4.style.borderLeftColor = "#6B0D10";
                                    img4.style.borderRightColor = "#6B0D10";
                                    img5.style.borderLeftColor = "#6B0D10";
                                    img5.style.borderRightColor = "#6B0D10";
                                    img6.style.borderLeftColor = "#6B0D10";
                                    img6.style.borderRightColor = "#6B0D10";
                                    img7.style.borderLeftColor = "#6B0D10";
                                    img7.style.borderRightColor = "#6B0D10";
                                }
                            }
                        }
                    }
                }
            }
        }
            
        //LAÇO DE REPETIÇÃO QUE ALTERA A COR DA FONTE DE TODOS OS ELEMENTOS DENTRO DO VETOR "TXT"
        //O LAÇO TERMINA NO NUMERO DE ELEMENTOS RESGATADO PELO GETELEMENTSBYCLASSNAME (.LENGTH)
        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;
        var m = 0;

        while ( i < texto.length) {
            texto[i].style.color = "#f5f5f5";
            i++;
        }

        while ( j < inputs.length) {
            inputs[j].style.backgroundColor = "#0B689E";
            j++;
        }

        while ( k < card_dash.length) {
            card_dash[k].style.backgroundColor = "#0B689E";
            desc_card[k].style.backgroundColor = "#0B689E50";
            k++;
        }

        while ( l < btns.length) {
            btns[l].style.backgroundColor = "#151515";
            l++;
        }

        while ( m < btns2.length) {
            btns2[m].style.backgroundColor = "#f5f5f5";
            btns2[m].style.color = "#151515";
            m++;
        }
        


    }
    //FUNÇÃO QUE DEIXA O SITE NO MODO ESCURO
    function dark_mode(){

        //CONDIÇÃO PARA RECONHCER SE O MODO ESCURO ESTA LIGADO OU NÃO
        if(mode == '0'){
            document.body.style.backgroundColor = "#151515";
            url_icon.src = "img/icones/dark-mode-light.png";

            if (typeof card_login_cadastro != "undefined") {
                card_login_cadastro.style.backgroundColor = "#0B689E";
            }
            
            if (typeof video_inicio != "undefined") {
                video_inicio.innerHTML = `
                    <video width="auto" height="70%" autoplay muted poster="img/aranha-vermelha.png" loop src="img/logo-preto.mp4">
                    </video>
                `;
            }

            if (typeof img1 != "undefined") {
                if (typeof img2 != "undefined") {
                    if (typeof img3 != "undefined") {
                        if (typeof img4 != "undefined") {
                            if (typeof img5 != "undefined") {
                                if (typeof img6 != "undefined") {
                                    if (typeof img7 != "undefined") {
                                        img1.style.borderLeftColor = "#6B0D10";
                                        img1.style.borderRightColor = "#6B0D10";
                                        img2.style.borderLeftColor = "#6B0D10";
                                        img2.style.borderRightColor = "#6B0D10";
                                        img3.style.borderLeftColor = "#6B0D10";
                                        img3.style.borderRightColor = "#6B0D10";
                                        img4.style.borderLeftColor = "#6B0D10";
                                        img4.style.borderRightColor = "#6B0D10";
                                        img5.style.borderLeftColor = "#6B0D10";
                                        img5.style.borderRightColor = "#6B0D10";
                                        img6.style.borderLeftColor = "#6B0D10";
                                        img6.style.borderRightColor = "#6B0D10";
                                        img7.style.borderLeftColor = "#6B0D10";
                                        img7.style.borderRightColor = "#6B0D10";
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
            
        
            //LAÇO DE REPETIÇÃO QUE ALTERA A COR DA FONTE DE TODOS OS ELEMENTOS DENTRO DO VETOR "TXT"
            //O LAÇO TERMINA NO NUMERO DE ELEMENTOS RESGATADO PELO GETELEMENTSBYCLASSNAME (.LENGTH)
            var i = 0;
            var j = 0;
            var k = 0;
            var l = 0;
            var m = 0;

            while ( i < texto.length) {
                texto[i].style.color = "#f5f5f5";
                i++;
            }

            while ( j < inputs.length) {
                inputs[j].style.backgroundColor = "#0B689E";
                j++;
            }

            while ( k < card_dash.length) {
                card_dash[k].style.backgroundColor = "#0B689E";
                desc_card[k].style.backgroundColor = "#0B689E50";
                k++;
            }

            while ( l < btns.length) {
                btns[l].style.backgroundColor = "#151515";
                l++;
                
            }

            //DEFINE O STATUS DO DARK_MODE ATIVADO E ARMAZENA
            localStorage.setItem('status_dark', '1');
            mode = 1;
    
        }else {
            
            document.body.style.backgroundColor = "#f5f5f5";
            if (typeof card_login_cadastro != "undefined") {
                card_login_cadastro.style.backgroundColor = "#151515";
            }

            if (typeof btn_dark != "undefined") {
                btn_dark.style.backgroundColor = "#f5f5f5";
                   
            }
            if (typeof img1 != "undefined") {
                if (typeof img2 != "undefined") {
                    if (typeof img3 != "undefined") {
                        if (typeof img4 != "undefined") {
                            if (typeof img5 != "undefined") {
                                if (typeof img6 != "undefined") {
                                    if (typeof img7 != "undefined") {
                                        img1.style.borderLeftColor = "#151515";
                                        img1.style.borderRightColor = "#151515";
                                        img2.style.borderLeftColor = "#151515";
                                        img2.style.borderRightColor = "#151515";
                                        img3.style.borderLeftColor = "#151515";
                                        img3.style.borderRightColor = "#151515";
                                        img4.style.borderLeftColor = "#151515";
                                        img4.style.borderRightColor = "#151515";
                                        img5.style.borderLeftColor = "#151515";
                                        img5.style.borderRightColor = "#151515";
                                        img6.style.borderLeftColor = "#151515";
                                        img6.style.borderRightColor = "#151515";
                                        img7.style.borderLeftColor = "#151515";
                                        img7.style.borderRightColor = "#151515";
                                    }
                                }
                            }
                        }
                    }
                }
            }


            if (typeof video_inicio != "undefined") {
                video_inicio.innerHTML = `
                    <video width="auto" height="70%" autoplay muted poster="img/aranha-vermelha.png" loop src="img/logo.mp4">
                    </video>
                `;
            }

            //LAÇO DE REPETIÇÃO QUE ALTERA A COR DA FONTE DE TODOS OS ELEMENTOS DENTRO DO VETOR "TXT"
            //O LAÇO TERMINA NO NUMERO DE ELEMENTOS RESGATADO PELO GETELEMENTSBYCLASSNAME (.LENGTH)
            var i = 0;
            var j = 0;
            var k = 0;
            var l = 0;
            var m = 0;
            
            while ( i < texto.length) {
                texto[i].style.color = "#151515";
                i++;
            }
            while ( j < inputs.length) {
                inputs[j].style.backgroundColor = "#151515";
                j++;
            }

            while ( k < card_dash.length) {
                card_dash[k].style.backgroundColor = "#151515";
                desc_card[k].style.backgroundColor = "#151515b6";
                k++;
            }

            while ( l < btns.length) {
                btns[l].style.backgroundColor = "#0B689E";
                l++;
                
            }
            
            url_icon.src = "img/icones/dark-mode-dark.png";
    
            //DEFINE O STATUS DO DARK_MODE ATIVADO E ARMAZENA
            localStorage.setItem('status_dark', '0');
            mode = 0;
            }
        }