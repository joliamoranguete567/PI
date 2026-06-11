const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "../data/categorias.json");

function lerDados() {
  const dados = fs.readFileSync(caminho);
  return JSON.parse(dados);
}

function listar() {
  return lerDados();
}

function salvarDados(dados) {
  fs.writeFileSync(
    caminho,
    JSON.stringify(dados, null, 2)
  );
}
function salvar(categoria) {
  let categorias = lerDados();
  const novo = {
    id: categorias.length > 0 ?
      categorias[categorias.length - 1].id + 1 :
      1,
    nome: categoria.nome
    //email: categoria.email
  };
  categorias.push(novo);
  salvarDados(categorias);
}

function buscarPorId(id){
  const categorias = lerDados();
  return categorias.find(c => c.id == id);
}
//c = categorias 

function editar (id, novaCategoria) {
   const categorias = lerDados();
    const index = categorias.findIndex(c => c.id == id);
    categorias[index].nome = novaCategoria.nome;
    salvarDados(categorias);
}

function excluir(id){
const categorias = lerDados();
const novaLista = categorias.filter(c => c.id != id);
salvarDados(novaLista);
}

module.exports = {
  listar,
  salvar,
  buscarPorId,
  editar,
  excluir
};

