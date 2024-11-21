<?php

session_start();

if($_SERVER['REQUEST_METHOD'] == 'POST')    {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    echo json_encode([
        'status' => 'success',
        'message' => 'Credentials are valid',
        'name' => $name,
        'email' => $email,
        'password' => $password
        ]);

    exit;
}
?>