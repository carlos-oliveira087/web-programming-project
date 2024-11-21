document.querySelector('form').addEventListener('submit', async function (event) {

    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    try {
        const response = await fetch('../controllers/01-create_user.php', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if(result.status === 'success') {
            localStorage.setItem('name', result.name);
            localStorage.setItem('email', result.email);
            localStorage.setItem('password', result.password);

            alert('Login successful! Redirecting...');
            window.location.href = '../pages/02-login.html';
        }

        else    {
            alert(result.message);
        }

    } catch (error) {
        console.error('Error: ', error)
        alert('An error occurred. Please try again later.');
    }
});