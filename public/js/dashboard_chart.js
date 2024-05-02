const viloes = [
    { nome: "Duende macabro", id: "duende", votos: 0 },
    { nome: "Carnificina", id: "carnificina", votos: 0 },
    { nome: "Chacal", id: "chacal", votos: 0 },
    { nome: "Morbius", id: "morbius", votos: 0 },
    { nome: "Mysterio", id: "mysterio", votos: 0 },
    { nome: "Kaine", id: "kaine", votos: 0 },
    { nome: "Kraven", id: "kraven", votos: 0 },
];

const personagens = [
    { nome: "Homem-aranha", id: "aranha", vitorias: 0 },
    { nome: "Venom", id: "venom", vitorias: 0 },
];
// Inicia uma variável do tipo constante (não pode ser reatribuida)
const config1 = {
    type: "doughnut", // tipo do gráfico
    data: { // objeto que vai conter os dados do gráfico
        labels: ["Duende Macabro", "Carnificina", "Chacal", "Morbius", "Mysterio", "Kaine", "Kraven"], // labels (rótulos) que serão identificados os nossos dados 
        datasets: [ // datasets (conjunto de dados)
            {
                data: [viloes[0].votos, viloes[1].votos, viloes[2].votos, viloes[3].votos, viloes[4].votos, viloes[5].votos, viloes[6].votos], // os dados referentes aqueles rótulos
                backgroundColor: ["#FA5C00", "#FA003E", "#7C2DFA", "#0060FA", "#58EB00", "#EB1B00", "#FACD02"], // cor das "bolinhas" do gráfico
                borderColor: ["#7A2C00", "#7A001E", "#3D167A", "#002F7A", "#276B00", "#6B0C00", "#7A6301"] // cor da "linha" do gráfico
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: "#f5f5f5", 
                    font: {
                      size: 13
                    },
                  },
                position: 'left',
            },
            title: {
                display: true,
                text: 'Votos por vilão',
                color: '#f5f5f5',
                font: {
                    size: 16 // Tamanho da fonte das labels
                },
                align: "end",

            }
        },
        /* maintainAspectRatio (manter relação de aspecto) 
          caso true: ele "obdece" a altura e largura que colocamos
          caso false: ele não "obdece" a altura e largura que colocamos e se ajusta ao componente pai
        */
    }
}
const config2 = {
    type: "pie", // tipo do gráfico
    data: { // objeto que vai conter os dados do gráfico
        labels: ["Homem-Aranha", "Venom"], // labels (rótulos) que serão identificados os nossos dados 
        datasets: [ // datasets (conjunto de dados)
            {
                data: [personagens[0].vitorias, personagens[1].vitorias], // os dados referentes aqueles rótulos
                backgroundColor: ["#EB1C23", "#5C00FA"], // cor das "bolinhas" do gráfico
                borderColor: ["#750E12", "#310085"] // cor da "linha" do gráfico
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "#f5f5f5", 
                    font: {
                      size: 13
                    },
                  },position: 'bottom',
            },
            title: {
                display: true,
                text: 'Vitorias spider-hit',
                color: '#f5f5f5',
                font: {
                    size: 16 // Tamanho da fonte das labels
                },
            }
        }
    },
};

nome = sessionStorage.NOME_USUARIO;
span2.innerHTML = nome;
async function listar_votos() {
    try {
        await Promise.all(viloes.map(async (vilao) => {
            const resposta = await fetch("/usuarios/listar_votos_vilao", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ vilao: vilao.nome })
            });
            if (resposta.ok) {
                const dados = await resposta.json();
                vilao.votos = JSON.stringify(dados[0].votos);
            } else {
                console.log("Erro na requisição");
            }
        }));
    } catch (erro) {
        console.log(erro);
    }
}

async function listar_vitorias_spiderhit() {
    try {
        await Promise.all(personagens.map(async (personagem) => {
            const resposta = await fetch("/usuarios/listar_vitorias_spiderhit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ personagem: personagem.nome })
            });
            if (resposta.ok) {
                const dados = await resposta.json();
                personagem.vitorias = JSON.stringify(dados[0].vitorias);
            } else {
                console.log("Erro na requisição");
            }
        }));
    } catch (erro) {
        console.log(erro);
    }
}
Promise.all([
    listar_votos(),
    listar_vitorias_spiderhit()
]).then(() => {
    config1.data.datasets[0].data = viloes.map(vilao => vilao.votos);
    config2.data.datasets[0].data = personagens.map(personagem => personagem.vitorias);

    // Após todas as requisições estarem concluídas, cria os gráficos
    var myChartLine1 = new Chart(document.getElementById("myChart1"), config1);
    var myChartLine2 = new Chart(document.getElementById("myChart2"), config2);
});