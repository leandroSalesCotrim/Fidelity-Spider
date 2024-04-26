var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listarResgate", function (req, res) {
    usuarioController.listarResgate(req, res);
});

router.post("/listar_votos_vilao", function (req, res) {
    usuarioController.listar_votos_vilao(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/checar_cadastro", function (req, res) {
    usuarioController.checar_cadastro(req, res);
});

router.post("/acumular", function (req, res) {
    usuarioController.atualizar_sp(req, res);
});

router.post("/verificar_voto", function (req, res) {
    usuarioController.verificar_voto(req, res);
});

router.post("/verificar_resgate", function (req, res) {
    usuarioController.verificar_resgate(req, res);
});

router.post("/resgatar", function (req, res) {
    usuarioController.resgatar(req, res);
});

router.post("/votar", function (req, res) {
    usuarioController.votar(req, res);
});

router.post("/vitoriaSh", function (req, res) {
    usuarioController.vitoriaSh(req, res);
});

router.get("/listar_vitorias_aranha", function (req, res) {
    usuarioController.listar_vitorias_aranha(req, res);
});

router.get("/listar_vitorias_venom", function (req, res) {
    usuarioController.listar_vitorias_venom(req, res);
});

module.exports = router;