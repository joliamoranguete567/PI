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