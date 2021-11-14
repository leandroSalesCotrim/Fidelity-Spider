CREATE DATABASE fidelity_spider;

USE fidelity_spider;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    tipoUsuario VARCHAR(45) NOT NULL,
    spiderPoints INT DEFAULT 0,
    CONSTRAINT CHECK (tipoUsuario = 'usuario' OR tipoUsuario = 'adm' )
);
INSERT INTO usuario (nome,email,senha,tipoUsuario) 
	VALUES('adm','adm@g.com','adm','adm');

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

INSERT INTO jogo (nomeJogo,preco,desconto)
	VALUES('SM-PS4',199.50,50),
    ('SM-MM',349.90,25),
    ('SM-2',0,0),
    ('WOLV',0,0);
    
INSERT INTO resgate (cupomResgate,fk_jogo,fk_usuario) 
	VALUES ('8102234466278160',1,1),
	('1687647287184865',2,1),
    ('6753302800904397',1,2),
    ('6625608319502925',2,3),
    ('4555109586655406',2,4),
    ('7546233422123760',1,4);
    
TRUNCATE resgate;

UPDATE usuario SET spiderPoints = 9999999 WHERE idUsuario = 1;
    
INSERT INTO resgate (cupomResgate,fk_jogo,fk_usuario)
	values ('6BD4E8B9C8392523', 1, 3);
    
SELECT nome,email,nomeJogo,preco,desconto,DATE_FORMAT (dataHoraResgate,'%d/%m/%Y %H:%i:%s') as dataHoraResgate 
	FROM usuario JOIN resgate ON idUsuario = fk_Usuario
	JOIN jogo ON idJogo = fk_Jogo;
    
SELECT nomeJogo 
	FROM resgate JOIN usuario ON idUsuario = fk_usuario 
	JOIN jogo ON idJogo = fk_jogo 
	where fk_usuario = '1';

 
SELECT * FROM usuario;
SELECT * FROM Spiderhit;
SELECT * FROM votos;
SELECT * FROM jogo;
SELECT * FROM resgate;

INSERT INTO Spiderhit (vencedor, fk_usuario) VALUES ('Homem-aranha', '1');

SELECT COUNT(idVoto) FROM votos WHERE vilao_voto = 'Mysterio';

DESC votos;
DESC spiderhit;

drop table votos;
drop table spiderhit;