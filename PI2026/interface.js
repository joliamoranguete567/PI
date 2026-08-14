const linhaDeCards = document.getElementById('linhaDeCards');

    // Funções para movimentar o carrossel
    function rolarEsquerda() {
        linhaDeCards.scrollBy({
            left: -linhaDeCards.offsetWidth,
            behavior: 'smooth'
        });
    }

    function rolarDireita() {
        linhaDeCards.scrollBy({
            left: linhaDeCards.offsetWidth,
            behavior: 'smooth'
        });
    }





    // Função opcional caso queira dar alguma ação ao clicar no chat
    //function abrirChat() {
        //alert("Iniciando atendimento com o suporte!");
        // Aqui você pode abrir um modal de chat ou redirecionar
   // }

    // Função para o botão "Chat com Pavio"
function abrirChat() {
    alert("Redirecionando para o Chat com Pavio...");
    
    setTimeout(() => {
        window.location.href = "IA.html";
    }, 2000);
}




   document.addEventListener("DOMContentLoaded", () => {
    const barraPesquisa = document.getElementById('barrapesquisa');
    
    // Captura TODOS os elementos com a classe
    const cardsParaFiltrar = document.querySelectorAll('.card-produto-pesquisa');

    if (barraPesquisa) {
        barraPesquisa.addEventListener('input', () => {
            const termoBusca = barraPesquisa.value.toLowerCase().trim();

            cardsParaFiltrar.forEach(card => {
                // Captura o atributo com segurança
                const categoriaAtributo = card.getAttribute('data-category');
                
                // Se o card não tiver a categoria configurada no HTML, pula ele para não dar erro
                if (!categoriaAtributo) return;

                const categoria = categoriaAtributo.toLowerCase();

                // Se a barra estiver vazia, limpa o filtro e mostra tudo
                if (termoBusca === "") {
                    card.classList.remove('hidden-card');
                    return;
                }

                // Filtragem pura
                if (categoria.includes(termoBusca)) {
                    card.classList.remove('hidden-card');
                } else {
                    card.classList.add('hidden-card');
                }
            });
        });
    }
});

//--------------------------------------------------------------------------------------------------------------------------//

  document.addEventListener('DOMContentLoaded', () => {
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');

    botoesAdicionar.forEach(botao => {
      botao.addEventListener('click', (e) => {
        e.preventDefault();

        // Obtém os dados do produto clicado
        const produto = {
          id: botao.getAttribute('data-id'),
          nome: botao.getAttribute('data-nome'),
          preco: parseFloat(botao.getAttribute('data-preco')),
          imagem: botao.getAttribute('data-imagem'),
          quantidade: 1
        };

        // Busca o carrinho atual do localStorage ou cria um array vazio
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        // Verifica se o item já existe no carrinho
        const indiceExistente = carrinho.findIndex(item => item.id === produto.id);

        if (indiceExistente > -1) {
          carrinho[indiceExistente].quantidade += 1;
        } else {
          carrinho.push(produto);
        }

        // Salva o carrinho atualizado no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Redireciona para a página do carrinho
        window.location.href = 'carrinho.html';
      });
    });
  });
        