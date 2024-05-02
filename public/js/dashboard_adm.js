listarResgate();

linhaTitulo.innerHTML = `
   <th>Usuário</th>
   <th>E-mail</th>
   <th>Jogo</th>
   <th>Preço</th>
   <th>Desconto</th>
   <th>Data/Hora</th>
`;
function listarResgate() {
    fetch("/usuarios/listarResgate").then(function (resposta) {
        console.log("ESTOU NO THEN DO listarResgate()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do historico de Resgate: ", JSON.stringify(resposta));

                if (resposta.status == 204) {
                    linhaTitulo.innerHTML = "Nenhum resultado encontrado."
                    throw "Nenhum resultado encontrado!!";
                }

                // resposta.json().then(function (resposta) {

                for (let i = 0; i < resposta.length; i++) {
                    var registro = resposta[i];
                    tabela.innerHTML += `
                        <tr class="conteudo_table">
                            <td class="conteudo_nome_table">${registro.nome}</td>
                            <td>${registro.email}</td>
                            <td>${registro.nomeJogo}</td>
                            <td>R$ ${registro.preco}</td>
                            <td>${registro.desconto}%</td>
                            <td>${registro.dataHoraResgate}</td>
                        </tr>
                        `;
                }
            });

        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}