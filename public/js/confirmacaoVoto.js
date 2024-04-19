var confirmar_modal = document.getElementsByClassName("div_votar");

confirmar = document.getElementById('confirmar_duende');
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

function abrir_modal_confirmar(vilao) {
    var i = 0;
    console.log(vilao)
    while (i < confirmar_modal.length) {
        confirmar_modal[i].style.opacity = "0";
        i++;
    }

    if (vilao == "duende") {
        confirmar.style.opacity = "1";
        img_confirmar.style.cursor = "pointer";
        img_cancelar.style.cursor = "pointer";

    }else if (vilao == "carnificina") {
        confirmar2.style.opacity = "1";
        img_confirmar2.style.cursor = "pointer";
        img_cancelar2.style.cursor = "pointer";

    } else if (vilao == "chacal") {
        confirmar3.style.opacity = "1";
        img_confirmar3.style.cursor = "pointer";
        img_cancelar3.style.cursor = "pointer";

    } else if (vilao == "morbius") {
        confirmar4.style.opacity = "1";
        img_confirmar4.style.cursor = "pointer";
        img_cancelar4.style.cursor = "pointer";

    } else if (vilao == "mysterio") {
        confirmar5.style.opacity = "1";
        img_confirmar5.style.cursor = "pointer";
        img_cancelar5.style.cursor = "pointer";

    }else if (vilao == "kaine") {
        confirmar6.style.opacity = "1";
        img_confirmar6.style.cursor = "pointer";
        img_cancelar6.style.cursor = "pointer";

    }else if (vilao == "kraven") {
        confirmar7.style.opacity = "1";
        img_confirmar7.style.cursor = "pointer";
        img_cancelar7.style.cursor = "pointer";

    }  
}

function fechar_modal_confirmar(vilao) {
    var i = 0;
    while (i < confirmar_modal.length) {
        confirmar_modal[i].style.opacity = "0";
        i++;
    }

}

function fecharConfirmarDuende() {
    confirmar.style.transition = "0.6s";
    confirmar.style.opacity = "0";
    img_confirmar.style.cursor = "default";
    img_cancelar.style.cursor = "default";
}

function fecharConfirmarCarnificina() {
    confirmar2.style.transition = "0.6s";
    confirmar2.style.opacity = "0";

    img_confirmar2.style.cursor = "default";
    img_cancelar2.style.cursor = "default";
}

function fecharConfirmarChacal() {
    confirmar3.style.transition = "0.6s";
    confirmar3.style.opacity = "0";
    img_confirmar3.style.cursor = "default";
    img_cancelar3.style.cursor = "default";
}

function fecharConfirmarMorbius() {
    confirmar4.style.transition = "0.6s";
    confirmar4.style.opacity = "0";
    img_confirmar4.style.cursor = "default";
    img_cancelar4.style.cursor = "default";
}

function fecharConfirmarMysterio() {
    confirmar5.style.transition = "0.6s";
    confirmar5.style.opacity = "0";
    img_confirmar5.style.cursor = "default";
    img_cancelar5.style.cursor = "default";
}

function fecharConfirmarKaine() {
    confirmar6.style.transition = "0.6s";
    confirmar6.style.opacity = "0";
    img_confirmar6.style.cursor = "default";
    img_cancelar6.style.cursor = "default";
}

function fecharConfirmarKraven() {
    confirmar7.style.transition = "0.6s";
    confirmar7.style.opacity = "0";
    img_confirmar7.style.cursor = "default";
    img_cancelar7.style.cursor = "default";
}
