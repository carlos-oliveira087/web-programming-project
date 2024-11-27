<?php
    // SCRIPT PARA SALVAR USUÁRIOS NO BANCO

    include './db-connection.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmation = $_POST['confirmation'];

        if (empty($name) || empty($email) || empty($password) || empty($confirmation)) {
            echo "<script>alert('Please fill in all fields!'); window.history.back();</script>";
            exit();
        }

        if ($password !== $confirmation) {
            echo "<script>alert('Passwords do not match!'); window.history.back();</script>";
            exit();
        }

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
                alert('Account created successfully!');
                window.location.href = '../app/pages/02-login-structure.html';
            </script>";
            exit();
        } else {
            echo "<script>alert('Error while signing up: " . $stmt->error . "'); window.history.back();</script>";
        }

        $stmt->close();
    }

    mysqli_close($conn);
?>