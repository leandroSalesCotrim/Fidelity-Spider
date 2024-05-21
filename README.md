# Projeto Individual inicialmente desenvolvido no primeiro semestre da faculdade Bandtec (Sptech School)

<summary><h3>Qual o proposito do projeto?</h3></summary>
A ideia do projeto era aplicar os conhecimentos adquiridos no primeiro semestre da faculdade e desenvolver um site com uma tematica que estivesse relacionada com a sua personalidade, algo que fosse importante para sua trajetória até aqui. E então escolhi o homem-aranha para ser o tema do meu projeto pois além de ser meu herói favorito, desde sempre ele esteve presente na minha vida me inspirando!

<h3><summary>Tecnologias utilizadas</h3></summary>
<div align="center">
	<img width="60" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/>
	<img width="60" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/>
	<img width="60" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/>
	<img width="60" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
	<img width="60" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQL" title="MySQL"/>
	<img width="60" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" title="Docker"/>
</div>

<h3><summary>O que ele faz?</summary></h3>
Este é um site simples feito por alguém que é muito fã do homem aranha, então tentei pensar em atividades no site que recompensassem os usuários que navegarem pelo mesmo, com pequenas tarefas como, por exemplo, votar em qual vilão você desejaria ver num próximo jogo e até mesmo um minigame para disputar com um amigo, o jogo funciona de forma simples onde ambos jogadores utilizam o mesmo teclado para jogar e ambos também podem atacar e desviar dos ataques como nas instruções da página.<br><br>
No final, cada atividade que você realizar no site irá gerar uma pontuação para o usuário logado (Spider-points) que podem ser trocadas na loja por voucher de descontos fictícios, e não, o voucher não é funcional, é somente um código de 16 dígitos que é gerado aleatoriamente a cada vez que um usuário faz um resgate. Por fim todas essas atividades são registradas no banco de dados e podem ser visualizadas na tela de adm, podendo visualizar quantas vitórias ocorreram com x personagem, qual vilão foi o mais votado e quem realizou um resgate junto com todas as informações do resgate.

<summary><h3>Como rodar localmente 👨‍💻</h3></summary></br>
  
  ⚠️ Necessário Docker e Docker-Compose ⚠️

1) Clone o repositório

```bash
$ git clone https://github.com/leandroSalesCotrim/Fidelity-Spider.git
```

2) Entre na pasta raíz do projeto

```bash
$ cd Fidelity-Spider
```

3) Instale as dependencias

```bash
$ npm install
```

4) Crie um arquivo `.env` na pasta raiz do projeto contendo o conteudo abaixo
```bash
MYSQL_DB=fidelity_spider
MYSQL_USER=user_comum
MYSQL_PASSWORD=senha123
MYSQL_PASSWORD_ADMIN=admin

MYSQL_HOST=node_mysql
```

5) Suba os containers já configurado com a aplicação e bancos

```bash
$ docker-compose up
```


<h1>Telas do projeto</h1>



![p1 2](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/41c83505-0b68-4e02-bad9-ac09dd0cade7)
![p1](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/c923ff68-a339-4a99-bb40-273a6248129f)
![p2](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/19d95ecd-1f4c-4b93-92e2-ed4188455dd0)
![p3](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/68fde139-e7f7-4cd4-8e43-b3229fa6adc2)
![p4 2](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/04f890b2-84da-401f-961e-50281051a029)
![p4](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/ce38f28f-f34d-4759-ab88-3e25a2942452)
![p5 2](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/baa8b0e2-215d-4266-9bef-138183f688ca)
![p5](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/f1b1650e-0c9a-4103-9113-02ba33d7b4dd)
![p6 2](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/44992d71-810e-41be-b91e-0f53791a9315)
![p6](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/686c2814-1dde-4053-bfa4-6b028cc88b70)
![p7 2](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/f90c23bf-8867-4c5a-b500-90c160c0a1d0)
![p7](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/f021955d-e845-46d3-afa4-0c25db720222)
![p8 2](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/aa9b864b-4d28-4831-8c47-8825b2fe7901)
![p8](https://github.com/leandroSalesCotrim/Fidelity-Spider/assets/56699403/7c31d19f-c362-473d-808d-1a171042bc33)

