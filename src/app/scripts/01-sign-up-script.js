document.querySelector('form').addEventListener('submit', async function (event) {

    event.preventDefault();

    
    try {
        const response = await fetch('../controllers/01-create_user.php', {
            method: 'POST',
            body: formData,
        });

        if(!response.ok)    {
            throw new Error('HTTP Error! Check your php file.')
        }

        const result = await response.json();

        if(result.status === 'sucess')  {
            alert(result.message);

            window.location.href = '../pages/02-login.html'
        }

        else    {
            alert('Failed to create account. Check your inputs.')
        }

    } catch (error) {
        console.error('Error: ', error)
        alert('An error occurred. Please try again later.');
    }
});