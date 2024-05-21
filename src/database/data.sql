USE fidelity_spider;
INSERT INTO usuario (nome,email,cpf,senha,tipoUsuario) 
	VALUES('adm','adm@g.com','12345678901',SHA2('adm',224),'adm'); 
    
INSERT INTO jogo (nomeJogo,preco,desconto)
	VALUES('SM-PS4',199.50,50),
    ('SM-MM',349.90,25),
    ('SM-2',0,0),
    ('WOLV',0,0);