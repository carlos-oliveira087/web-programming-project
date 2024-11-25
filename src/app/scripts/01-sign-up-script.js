document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sign-up-form').addEventListener('submit', function(event) {
        event.preventDefault();  

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        const confirmation = document.getElementById('confirmation').value;

        if (password !== confirmation) {
            alert('Passwords do not match!');
            return;
        }

        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        localStorage.setItem('isLoggedIn', 'true');

        alert('User registered successfully!');
        window.location.href = '02-login.html';
    });
});
