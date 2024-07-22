document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const errorMessages = document.getElementById('errorMessages');
    const reposList = document.getElementById('reposList');

    // Validação do formulário
    contactForm.addEventListener('submit', (event) => {
        errorMessages.textContent = ''; // Limpar mensagens de erro

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            errorMessages.textContent = 'Todos os campos são obrigatórios.';
            event.preventDefault(); // Impedir o envio do formulário
        } else if (!validateEmail(email)) {
            errorMessages.textContent = 'O email fornecido não é válido.';
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Integração com a API do GitHub
    fetch('https://api.github.com/users/biinahc/repos')
        .then(response => response.json())
        .then(repos => {
            reposList.innerHTML = repos.map(repo => `
                <div>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <p>${repo.description || 'Sem descrição'}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            reposList.innerHTML = '<p>Erro ao carregar repositórios.</p>';
            console.error('Erro ao consultar a API do GitHub:', error);
        });
});
