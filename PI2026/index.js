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

window.onload = function() {
    const canvas = document.querySelector('#canvas-loader');
    const ctx = canvas.getContext('2d');
    const favicon = document.querySelector('#favicon');

    let angulo = 0;

    function animarCarregamento() {
        // Limpa o canvas a cada quadro
        ctx.clearRect(0, 0, 32, 32);

        // Desenha o círculo de fundo do loader
        ctx.beginPath();
        ctx.arc(16, 16, 12, 0, 2 * Math.PI);
        ctx.strokeStyle = '#2b2d42'; // Cor de fundo da trilha
        ctx.lineWidth = 4;
        ctx.stroke();

        // Desenha a parte animada girando
        ctx.beginPath();
        ctx.arc(16, 16, 12, angulo, angulo + Math.PI / 2);
        ctx.strokeStyle = '#00f5d4'; // Cor da barra de progresso (ex: verde água do seu projeto)
        ctx.lineWidth = 4;
        ctx.stroke();

        // Atualiza a imagem da aba com o conteúdo atual do canvas
        favicon.href = canvas.toDataURL('image/png');

        // Incrementa o ângulo para criar o movimento de rotação
        angulo += 0.3;

        // Mantém a animação rodando (você pode parar quando o carregamento real terminar)
        requestAnimationFrame(animarCarregamento);
    }

    // Inicia a animação na aba
    animarCarregamento();
};