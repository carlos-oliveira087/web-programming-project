// SCRIPT PARA SALVAR AS INFORMAÇÕES DE USUÁRIO NO LOCALSTORAGE
// (Usado para o display do nome do usuário na header e para disponibilizar funcionalidades que só são disponíveis com login)

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sign-up-form').addEventListener('submit', function() {

        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;

        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        localStorage.setItem('isLoggedIn', 'true');
    });
});