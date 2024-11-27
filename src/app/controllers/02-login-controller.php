<?php
    // SCRIPT PARA CHECAR AS CREDENCIAIS DO USUÁRIO NO LOGIN
    
    include '../../config/db-connection.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);

        if (empty($email) || empty($password)) {
            echo "<script>alert('Please fill in both fields!'); window.location.href = '../pages/02-login-structure.html';</script>";
            exit();
        }

        $sql = "SELECT * FROM user_table WHERE user_email = ?";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            echo "<script>alert('Error preparing statement: " . $conn->error . "'); window.location.href = '../pages/02-login-structure.html';</script>";
            exit();
        }

        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();

            if (password_verify($password, $user['user_password'])) {
                header("Location: ../pages/03-home-structure.html");
                exit();
            } else {
                echo "<script>alert('Incorrect password. Please try again.'); window.location.href = '../pages/02-login-structure.html';</script>";
            }
        } else {
            echo "<script>alert('No user found with that email. Please try again.'); window.location.href = '../pages/02-login-structure.html';</script>";
        }

        $stmt->close();
        mysqli_close($conn);
    }
?>