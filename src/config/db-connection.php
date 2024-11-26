<?php
    // CONFIGURAÇÃO DA CONEXÃO COM O BANCO DE DADOS
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "brightminds_progweb_db";

    $conn = mysqli_connect($host, $user, $password, $dbname);

    if (!$conn) {
        die("Conexão falhou: " . mysqli_connect_error());
    }
?>