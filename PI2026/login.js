function togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const eyeIcon = document.getElementById('eye-icon');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            // Ícone de olho cortado (esconder)
            eyeIcon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
        } else {
            passwordInput.type = 'password';
            // Ícone de olho aberto (mostrar)
            eyeIcon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
        }
    }

function validarLogin() {
    // Captura os elementos do formulário
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Defina aqui a credencial correta para o teste
    const emailCorreto = "teste@email.com";
    const senhaCorreta = "Ju14fe17";

    // Verifica se os campos estão vazios antes de validar
    if (emailInput === "" || passwordInput === "") {
        errorMessage.innerText = "Por favor, preencha todos os campos.";
        errorMessage.style.display = "block";
        return;
    }

    // Validação das credenciais
    if (emailInput === emailCorreto && passwordInput === senhaCorreta) {
        // Oculta mensagem de erro caso estivesse exibida
        errorMessage.style.display = "none";
        
        // Redireciona para a tela de usuário
        window.location.href = "interface.html";
    } else {
        // Exibe mensagem de erro estilizada caso erre a senha ou e-mail
        errorMessage.innerText = "E-mail ou senha incorretos. Alinhe suas energias e tente novamente.";
        errorMessage.style.display = "block";
        
        // Limpa o campo de senha para uma nova tentativa
        document.getElementById('password').value = "";
    }
}    