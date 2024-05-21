GRANT ALL PRIVILEGES ON fidelity_spider.* TO 'user_comum'@'%';

CREATE DATABASE IF NOT EXISTS fidelity_spider;
USE fidelity_spider;

CREATE TABLE usuario (
	idUsuario INT AUTO_INCREMENT,
    cpf CHAR(11),
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    tipoUsuario VARCHAR(45) NOT NULL,
    spiderPoints INT DEFAULT 0,
    CONSTRAINT CHECK (tipoUsuario = 'usuario' OR tipoUsuario = 'adm' ),
    PRIMARY KEY (idUsuario, cpf)
);

CREATE TABLE votos(
	idVoto INT PRIMARY KEY AUTO_INCREMENT,
	dia_hora_voto DATETIME DEFAULT CURRENT_TIMESTAMP,
	vilao_voto VARCHAR(20) NOT NULL,
	fk_usuario INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario (idUsuario)
);

CREATE TABLE spiderhit(
	idSpiderhit INT PRIMARY KEY AUTO_INCREMENT,
	vencedor varchar (20),
    fk_usuario int,
    FOREIGN KEY (fk_usuario) REFERENCES usuario (idUsuario)
);

CREATE TABLE jogo(
	idJogo INT PRIMARY KEY AUTO_INCREMENT,
	nomejogo VARCHAR(8),
	preco DOUBLE,
	desconto INT
);

CREATE TABLE resgate(
	dataHoraResgate DATETIME DEFAULT CURRENT_TIMESTAMP,
    cupomResgate CHAR(16),
	fk_jogo INT,
	fk_usuario INT,
    PRIMARY KEY (fk_jogo,fk_usuario),
    FOREIGN KEY (fk_jogo) REFERENCES jogo(idJogo),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);