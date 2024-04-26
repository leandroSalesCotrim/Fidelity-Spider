nome = sessionStorage.NOME_USUARIO;
sp = sessionStorage.SPIDERPOINTS_USUARIO;
span2.innerHTML = nome;
span_sp.innerHTML = sp;

function mostrarDesc1() {
    desc_box_card1.style.opacity = "1";
    desc_box_card1.style.transition = "0.3s";
}
function mostrarDesc2() {
    desc_box_card2.style.opacity = "1";
    desc_box_card2.style.transition = "0.3s";
}
function mostrarDesc3() {
    desc_box_card3.style.opacity = "1";
    desc_box_card3.style.transition = "0.3s";
}

function ocultarDesc1() {
    desc_box_card1.style.opacity = "0";
    desc_box_card1.style.transition = "0.3s";
}
function ocultarDesc2() {
    desc_box_card2.style.opacity = "0";
    desc_box_card2.style.transition = "0.3s";
}
function ocultarDesc3() {
    desc_box_card3.style.opacity = "0";
    desc_box_card3.style.transition = "0.3s";
}
