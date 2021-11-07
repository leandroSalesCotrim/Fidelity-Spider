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

CREATE TABLE Votos(
	idVoto INT PRIMARY KEY AUTO_INCREMENT,
	dia_hora_voto DATETIME DEFAULT CURRENT_TIMESTAMP,
	vilao_voto VARCHAR(20) NOT NULL,
	fk_usuario INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES Usuario (idUsuario)
);

CREATE TABLE Spiderhit(
	idSpiderhit INT PRIMARY KEY AUTO_INCREMENT,
	vencedor varchar (20),
    fk_usuario int,
    FOREIGN KEY (fk_usuario) REFERENCES Usuario (idUsuario)
);


SELECT * FROM Votos where fk_usuario = 1;
SELECT COUNT(vencedor) FROM spiderHit where vencedor = "Venom";
 

SELECT * FROM usuario;
SELECT * FROM Spiderhit;
SELECT * FROM votos;

INSERT INTO Spiderhit (vencedor, fk_usuario) VALUES ('Homem-aranha', '1');

SELECT COUNT(idVoto) FROM votos WHERE vilao_voto = 'Mysterio';

DESC votos;
DESC spiderhit;

drop table Votos;
drop table spiderhit;