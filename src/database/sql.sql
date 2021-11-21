-- CRIANDO E UTILIZANDO BANCO
CREATE DATABASE fidelity_spider;
USE fidelity_spider;

-- CRIANDO TABELAS DE ACORDO COM O MODELO LÓGICO
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

-- INSERINDO DADOS NO BANDO DE FORMA QUE TENHA CADASTRADO NO MINIMO UM ADM, E NO MINIMO 4 JOGOS DE ACORDO COM A LOJA DO SITE
INSERT INTO usuario (nome,email,cpf,senha,tipoUsuario) 
	VALUES('adm','adm@g.com','12345678901',SHA2('adm',224),'adm'); 
    
INSERT INTO jogo (nomeJogo,preco,desconto)
	VALUES('SM-PS4',199.50,50),
    ('SM-MM',349.90,25),
    ('SM-2',0,0),
    ('WOLV',0,0);
    
-- INSERT DE TESTE PARA VERIFICAR HISTORICO DE RESGATE
INSERT INTO resgate (cupomResgate,fk_jogo,fk_usuario) 
	VALUES ('8102234466278160',1,1),
	('1687647287184865',2,1),
    ('6753302800904397',1,2),
    ('6625608319502925',2,3),
    ('4555109586655406',2,4),
    ('7546233422123760',1,4);

-- DANDO PONTOS PARA PODER COMPRAR OS PREMIOS NA LOJA
UPDATE usuario SET spiderPoints = 9999999 WHERE idUsuario = 2;
    
-- SELECT QUE EXIBE O HISTORICO DE RESGATE DOS USUARIOS
SELECT nome,email,nomeJogo,preco,desconto,DATE_FORMAT (dataHoraResgate,'%d/%m/%Y %H:%i:%s') as dataHoraResgate 
	FROM usuario JOIN resgate ON idUsuario = fk_Usuario
	JOIN jogo ON idJogo = fk_Jogo;
    
-- SELECT QUE EXIBE O HISTORICO DE RESGATE DE UM DETERMINADO USUARIO   
SELECT nomeJogo 
	FROM resgate JOIN usuario ON idUsuario = fk_usuario 
	JOIN jogo ON idJogo = fk_jogo 
	where fk_usuario = '1';

truncate resgate;
-- SELECT DE TODOS OS DADOS, SEPARADAMENTE
SELECT * FROM usuario;
SELECT * FROM Spiderhit;
SELECT * FROM votos;
SELECT * FROM jogo;
SELECT * FROM resgate;