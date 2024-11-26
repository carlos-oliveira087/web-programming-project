// SCRIPT PARA ABRIR E FECHAR O MENU HAMBÚRGUER

const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
const hamburgerMenu = document.getElementById('hamburger-menu');
const xMenuIcon = document.getElementById('x-menu-icon');

hamburgerMenu.style.right = '-250px';
xMenuIcon.style.display = 'none';

// Evento de clique para abrir e fechar o menu
hamburgerMenuIcon.addEventListener('click', () => {
    hamburgerMenu.style.right = '0';
    hamburgerMenuIcon.style.display = 'none';
    xMenuIcon.style.display = 'block';
});

// Evento para fechar o menu
xMenuIcon.addEventListener('click', () => {
    hamburgerMenu.style.right = '-250px';
    xMenuIcon.style.display = 'none';
    hamburgerMenuIcon.style.display = 'block';
});

// SCRIPT PARA APARECER NOME CADASTRADO NO LOGIN

const loggedIn = document.getElementById('logged-account');
const notLoggedin = document.getElementById('account');
const usernameElement = document.getElementById('username');
let isLoggedIn = localStorage.getItem('isLoggedIn');

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
    
    isLoggedIn = localStorage.getItem('isLoggedIn')

    if (isLoggedIn === 'true') {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        
        location.reload()
    }
})


// SCRIPT PARA MUDANÇA DE ITENS NO MENU

const loginButton = document.getElementById('login-button');
const publishButton = document.getElementById('publish-button');
const publishedButton = document.getElementById('published-button');


if (isLoggedIn === 'true') {
    loginButton.style.display = 'none';
    logoutButton.style.display = 'block';
}
else {
    loginButton.style.display = 'block';
    logoutButton.style.display = 'none';
    publishButton.style.display = 'none';
    publishedButton.style.display = 'none';
}