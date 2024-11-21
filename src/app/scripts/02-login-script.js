document.querySelector('form').addEventListener('submit', async function (event) {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = new FormData();

    formData.append('email', email);

    try {
        const response = await fetch('../controllers/02-credentials_check.php', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if(result.status === 'success') {
            localStorage.setItem('email', result.email);

            alert('Login successful! Redirecting...');
            window.location.href = '../pages/03-home-structure.html';
        }

        else    {
            alert(result.message);
        }

    } catch (error) {
        console.error('Error: ', error)
        alert('An error occurred. Please try again later.');
    }
});