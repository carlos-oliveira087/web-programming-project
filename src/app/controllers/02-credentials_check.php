<?php

session_start();

if($_SERVER['REQUEST_METHOD'] == 'POST')    {
    $email = $_POST['email'] ?? '';


    echo json_encode([
        'status' => 'success',
        'message' => 'Credentials are valid',
        'email' => $email
        ]);

    exit;
}
?>