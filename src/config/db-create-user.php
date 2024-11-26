<?php
    // SCRIPT PARA SALVAR USUÁRIOS NO BANCO

    include './db-connection.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmation = $_POST['confirmation'];

        // Alertas caso o formulário não tenha sido preenchido completamente e caso as senhas não combinem
        if (empty($name) || empty($email) || empty($password) || empty($confirmation)) {
            echo "<script>alert('Please fill in all fields!'); window.history.back();</script>";
            exit();
        }

        if ($password !== $confirmation) {
            echo "<script>alert('Passwords do not match!'); window.history.back();</script>";
            exit();
        }

        // Criptografando a senha para armazenamento no BD
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO user_table (user_name, user_email, user_password, created_at) 
                VALUES (?, ?, ?, NOW())";

        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            echo "<script>alert('Error preparing statement: " . $conn->error . "'); window.history.back();</script>";
            exit();
        }

        $stmt->bind_param("sss", $name, $email, $hashed_password);

        if ($stmt->execute()) {
            echo "<script>
                alert('Account created succesfully!');
                setTimeout(function() {
                    window.location.href = '../app/pages/02-login-structure.html';
                }, 2000); // 2 seconds delay before redirection
            </script>";
        } else {
            echo "<script>alert('Error while signing up: " . $stmt->error . "'); window.history.back();</script>";
        }

        $stmt->close();
    }

    mysqli_close($conn);
?>