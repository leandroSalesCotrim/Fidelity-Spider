
//criando timer e evento para que a cada 700 ms após o usuário digitar no campo senha, executar o verificar_forca_senha()
let timer;

document.getElementById("password").addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(verificar_forca_senha, 700); // Espera 500ms após o usuário parar de digitar
});

//Adicionando a mascara ao campo de cpf
$(document).ready(function () {
    $('#input_cpf').mask('999.999.999-99');
});

function verificar_forca_senha() {
    let senha = document.getElementById("password").value;
    var result = zxcvbn(senha);

    var forcas = document.querySelectorAll(".nivel_forca");

    for (var i = 0; i < forcas.length; i++) {
        if (i < result.score) {
            forcas[i].style.backgroundColor = "#0596EB"; // verde escuro
        } else {
            forcas[i].style.backgroundColor = "#D9D9D9"; // cor padrão
        }
    }
}

function checar_cadastro() {

    var formulario_cad = new URLSearchParams(new FormData(document.getElementById("form_cadastro")));

    var nome_cad = formulario_cad.get("nome_cad");
    var email_cad = formulario_cad.get("email_cad");
    var cpf_cad = formulario_cad.get("cpf_cad");
    var senha_cad = formulario_cad.get("senha_cad");
    var confirmacaoSenha = formulario_cad.get("confirmar_senha_cad");


    if (senha_cad != confirmacaoSenha) {
        window.alert("As senhas inseridas devem ser iguais para prosseguir!");
        return false;
    }

    fetch("/usuarios/checar_cadastro", {
        method: "POST",
        body: formulario_cad
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO checar_cadastro()!")

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cadastrar();
        } else {
            window.alert("Você não pode se cadastrar\nJá existe um usuario com o nome e/ou cpf inseridos!");
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}

function cadastrar() {

    var formulario_cad = new URLSearchParams(new FormData(document.getElementById("form_cadastro")));

    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario_cad
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO cadastrar()!")

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "./login.html";
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}