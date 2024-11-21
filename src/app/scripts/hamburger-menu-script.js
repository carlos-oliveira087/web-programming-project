// SCRIPT PARA ABRIR E FECHAR O MENU HAMBÚRGUER

const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
const hamburgerMenu = document.getElementById('hamburger-menu');

// Evento de clique para abrir e fechar o menu
hamburgerMenuIcon.addEventListener('click', function() {
    // Se o menu estiver fora da tela, desliza para dentro
    if (hamburgerMenu.style.right === '-250px' || hamburgerMenu.style.right === '') {
        hamburgerMenu.style.right = '0';
    } else {
        hamburgerMenu.style.right = '-250px';
    }
});