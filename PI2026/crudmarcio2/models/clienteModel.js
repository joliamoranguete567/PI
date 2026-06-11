//File System fd -> responsável pelo CRUD em arquivos
//CRUD -> create, read, update, delete
const fs = require("fs");

//possibilita enxergar o caminho do json
const path = require("path");

//caminho do json
const caminho = path.join(__dirname, "../data/clientes.json"); //dirname -> nome do diretório (pasta)

function lerDados() {
  const dados = fs.readFileSync(caminho);
  return JSON.parse(dados); //ta recebendo os dados do caminho e retornando em json  
}

function listar() {
  return lerDados(); //lerDados tem responsabilidade de acessar o arquivo, ler os dados e exportar pra fora
}

function salvarDados(dados) {
  fs.writeFileSync(
    caminho,
    JSON.stringify(dados, null, 2)
  );
}
function salvar(cliente) {
  let clientes = lerDados();
  const novo = {
    id: clientes.length > 0 ?
      clientes[clientes.length - 1].id + 1 :
      1,
    nome: cliente.nome,
    email: cliente.email
    //email: categoria.email
  };
  clientes.push(novo);
  salvarDados(clientes);
}

function excluir(id) {
  const clientes = lerDados();
  const novaLista = clientes.filter(c => c.id != id);
  salvarDados(novaLista);
}

function buscarPorId(id) {
  const clientes = lerDados();
  return clientes.find(c => c.id == id);
}
//c = clientes 

function editar(id, novoCliente) {
  const clientes = lerDados();
  const index = clientes.findIndex(c => c.id == id);
  clientes[index].nome = novoCliente.nome;
  clientes[index].email = novoCliente.email;
  salvarDados(clientes);
}

module.exports = {
  listar,
  salvar,
  buscarPorId,
  editar,
  excluir
};
