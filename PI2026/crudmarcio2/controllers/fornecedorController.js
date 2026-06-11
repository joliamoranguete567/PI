const model = require("../models/fornecedorModel"); //model ta dentro de categoria model

//exports.index -> vai chegar ate o index de categoria
exports.index = (req, res) => {
    const fornecedores = model.listar();
    res.render("fornecedores/index", {fornecedores});
};

exports.salvar = (req, res) => {
  model.salvar({
    nome: req.body.nome,
    cnpj: req.body.cnpj
    //email: req.body. email
  });
  res.redirect("/fornecedor");
};

exports.excluir = (req, res) => {
model.excluir (req.params.id);
res.redirect('/categorias');
}
