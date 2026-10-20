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

function cadastrarUsuario(event) {
    if (event) {
        event.preventDefault(); // Evita que o formulário recarregue a página automaticamente
    }

    // Captura o valor do input de nome completo que você mencionou
    const nameInput = document.getElementById('name').value;
    const usernameInput = document.getElementById('username').value;
    const errorMessage = document.getElementById('error-message'); // Se houver elemento de erro na tela de cadastro

    // Verifica se o campo de nome está vazio
    if (nameInput === "" || usernameInput === "") {
        if (errorMessage) {
            errorMessage.innerText = "Por favor, preencha o seu nome completo.";
            errorMessage.style.display = "block";
        } else {
            alert("Por favor, preencha o seu nome completo.");
        }
        return;
    }


    
    // Salva o nome cadastrado no localStorage para podermos usá-lo depois
    localStorage.setItem('nomeUsuario', nameInput);
    localStorage.setItem('nomeUsuario', usernameInput);



    // Oculta o formulário de cadastro (se houver a classe .cadastro-container ou similar)
    const formContainer = document.querySelector('.cadastro-container') || document.querySelector('.login-container'); 
    if (formContainer) {
        formContainer.style.display = 'none';
    }

    // Exibe o container centralizado de sucesso e redireciona para interface.html
    exibirContainerSucessoCadastro(nameInput, "interface.html");
}

function exibirContainerSucessoCadastro(nome, urlDestino) {
    let welcomeBox = document.getElementById('welcome-container');
    
    if (!welcomeBox) {
        welcomeBox = document.createElement('div');
        welcomeBox.id = 'welcome-container';
        
        // Estilização do container centralizado (igual ao do login)
        welcomeBox.style.position = 'fixed';
        welcomeBox.style.top = '50%';
        welcomeBox.style.left = '50%';
        welcomeBox.style.transform = 'translate(-50%, -50%)';
        welcomeBox.style.padding = '30px';
        welcomeBox.style.backgroundColor = '#ffffff';
        welcomeBox.style.borderRadius = '12px';
        welcomeBox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        welcomeBox.style.textAlign = 'center';
        welcomeBox.style.fontFamily = 'sans-serif';
        
        document.body.appendChild(welcomeBox);
    }

    // Conteúdo mostrando o sucesso e o nome cadastrado
    welcomeBox.innerHTML = `
        <h2 style="color: #333; margin-bottom: 10px;">Conta criada com sucesso!</h2>
        <p style="font-size: 18px; color: #555;">Bem-vindo(a), <strong>${nome}</strong>!</p>
        <p style="font-size: 14px; color: #888; margin-top: 15px;">Redirecionando...</p>
    `;

    // Redireciona para interface.html após 2 segundos
    setTimeout(() => {
        window.location.href = urlDestino;
    }, 2000);
}