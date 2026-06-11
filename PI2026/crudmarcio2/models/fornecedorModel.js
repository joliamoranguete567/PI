//File System fd -> responsável pelo CRUD em arquivos
//CRUD -> create, read, update, delete
const fs = require("fs");

//possibilita enxergar o caminho do json
const path = require("path");

//caminho do json
const caminho = path.join(__dirname, "../data/fornecedores.json"); //dirname -> nome do diretório (pasta)

function lerDados() {
    const dados = fs.readFileSync(caminho);
    return JSON.parse(dados); //ta recebendo os dados do caminho e retornando em json  
}

function listar(){
    return lerDados(); //lerDados tem responsabilidade de acessar o arquivo, ler os dados e exportar pra fora
}

function salvarDados(dados) {
  fs.writeFileSync(
    caminho,
    JSON.stringify(dados, null, 2)
  );
}
function salvar(fornecedor) {
  let fornecedores = lerDados();
  const novo = {
    id: fornecedores.length > 0 ? 
        fornecedores[fornecedores.length - 1].id + 1:
      1,
    nome: fornecedor.nome,
    cnpj: fornecedor.cnpj
    //email: categoria.email
  };
  fornecedores.push(novo);
  salvarDados(fornecedores);
}

function excluir(id){
const categorias = lerDados();
const novaLista = categorias.filter(c => c.id != id);
salvarDados(novaLista);
}

module.exports = {
    listar,
    salvar,
    excluir
};
