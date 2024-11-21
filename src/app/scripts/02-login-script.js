document.querySelector('form').addEventListener('submit', async function (event) {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');


    if ((storedEmail === email) && (storedPassword === password))   {
        alert('Login Successful! Redirecting...');
        window.location.href = '../pages/03-home-structure.html';
    }

    else    {
        alert('Invalid email or password. Please try again.')
    }



    
});