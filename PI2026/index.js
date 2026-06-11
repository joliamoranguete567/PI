document.addEventListener("DOMContentLoaded", () => {
    // Tempo em milissegundos antes de mudar de tela (3500ms = 3.5 segundos)
    const tempoDeEspera = 5000; 
    
    // Nome do arquivo ou URL da próxima tela
    const proximaTela = "cadastro.html"; 

    setTimeout(() => {
        // Seleciona o container para aplicar um efeito de saída suave
        const splashContainer = document.querySelector('.splash-container');
        
        if (splashContainer) {
            splashContainer.style.transition = "opacity 0.8s ease";
            splashContainer.style.opacity = "0";
            
            // Aguarda o término da animação de fade-out para mudar de página
            setTimeout(() => {
                window.location.href = proximaTela;
            }, 800);
        } else {
            // Caso o container não seja encontrado, redireciona direto
            window.location.href = proximaTela;
        }
    }, tempoDeEspera);
});