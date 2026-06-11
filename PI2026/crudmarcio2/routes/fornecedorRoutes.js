const express = require("express");
const router = express.Router();
const controller = require("../controllers/fornecedorController");

router.get("/", controller.index); 
//rota get mostra algo na tela (listar, index, etc é get)
router.post("/salvar", controller.salvar);
router.get("/excluir/:id", controller.excluir);

module.exports = router;