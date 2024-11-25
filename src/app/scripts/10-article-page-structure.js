document.getElementById('submit-comment').addEventListener('click', () => {
    const comment = document.getElementById('comment-box').value;
    if (comment) {
    alert('Comentário enviado: ' + comment);
    }
    else {
    alert('Por favor, escreva algo antes de enviar.');
    }   
});