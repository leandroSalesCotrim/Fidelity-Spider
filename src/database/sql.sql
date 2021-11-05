CREATE DATABASE fidelity_spider;

USE fidelity_spider;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    tipoUsuario VARCHAR(45),
    spiderPoints INT
);


SELECT * FROM usuario;

INSERT INTO usuario (nome,email,senha,tipoUsuario,spiderPoints) VALUES('leandro','leandro@h.com','senha','usuario',500);
