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


SELECT * FROM usuario;

insert into Votos (vilao_voto,fk_usuario) Values
	('duende', 1);

desc votos;

SELECT * FROM votos;
INSERT INTO usuario (nome,email,senha,tipoUsuario,spiderPoints) VALUES('leandro','leandro@h.com','senha','usuario',500);
UPDATE usuario SET spiderPoints = 0 WHERE idUsuario = 1;
drop table Votos;