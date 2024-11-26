// SCRIPT PARA ABRIR E FECHAR O MENU HAMBÚRGUER

const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
const hamburgerMenu = document.getElementById('hamburger-menu');

// Evento de clique para abrir e fechar o menu
hamburgerMenuIcon.addEventListener('click', () => {
    // Se o menu estiver fora da tela, desliza para dentro
    if (hamburgerMenu.style.right === '-250px' || hamburgerMenu.style.right === '') {
        hamburgerMenu.style.right = '0';
    } else {
        hamburgerMenu.style.right = '-250px';
    }
});


// SCRIPT PARA APARECER NOME CADASTRADO NO LOGIN

const loggedIn = document.getElementById('logged-account');
const notLoggedin = document.getElementById('account');
const usernameElement = document.getElementById('username');
const isLoggedIn = localStorage.getItem('isLoggedIn');

if (isLoggedIn === 'true') {
    const userName = localStorage.getItem('name');
    usernameElement.textContent = `Welcome, ${userName}`;
    
    loggedIn.style.display = 'block';
    notLoggedin.style.display = 'none';
} 
else {
    loggedIn.style.display = 'none';
    notLoggedin.style.display = 'block';
}


// SCRIPT PARA FAZER LOGOUT

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {

    if (isLoggedIn === 'true') {
        localStorage.setItem('isLoggedin', 'false');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('isLoggedIn');

        location.reload()
    }
})

