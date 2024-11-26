<?php
    // SCRIPT PARA CHECAR OS DADOS DE USUÁRIO AO FAZER LOGIN

    include '../../config/db-connection.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        $password = $_POST['password'];

        if (empty($email) || empty($password)) {
            echo "<script>alert('Please fill in both fields!'); window.history.back();</script>";
            exit();
        }

        $sql = "SELECT * FROM user_table WHERE user_email = ?";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            echo "<script>alert('Error preparing statement: " . $conn->error . "'); window.history.back();</script>";
            exit();
        }

        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();

            if (password_verify($password, $user['user_password'])) {
                echo "<script>
                        alert('Login successful!');
                        window.location.href = '../pages/03-home-structure.html';
                    </script>";
            } else {
                echo "<script>alert('Incorrect password. Please try again.'); window.history.back();</script>";
            }
        } else {
            echo "<script>alert('No user found with that email. Please try again.'); window.history.back();</script>";
        }

        $stmt->close();
        mysqli_close($conn);
    }
?>