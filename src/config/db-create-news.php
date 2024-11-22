<?php


include('db-connection.php'); // Inclui a conexão com o banco de dados

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $category = mysqli_real_escape_string($conn, $_POST['category']);
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $author = mysqli_real_escape_string($conn, $_POST['author']);
    $text = mysqli_real_escape_string($conn, $_POST['text']);
    
    // Processar arquivos enviados
    $uploaded_files = [];
    $upload_dir = "uploads/";
    
    foreach ($_FILES['file']['tmp_name'] as $key => $tmp_name) {
        $file_name = basename($_FILES['file']['name'][$key]);
        $target_path = $upload_dir . $file_name;

        // Salvar arquivo no servidor
        if (move_uploaded_file($tmp_name, $target_path)) {
            $uploaded_files[] = $target_path; // Salva o caminho do arquivo
        } else {
            echo "Erro ao fazer upload do arquivo: " . $file_name;
        }
    }
    
    $images = implode(",", $uploaded_files); // Concatena os caminhos dos arquivos enviados

    // Inserir no banco de dados
    $sql = "INSERT INTO news (category, title, author, text, images) VALUES ('$category', '$title', '$author', '$text', '$images')";

    if (mysqli_query($conn, $sql)) {
        echo "Notícia adicionada com sucesso!";
    } else {
        echo "Erro ao adicionar notícia: " . mysqli_error($conn);
    }

    // Fecha a conexão com o banco de dados
    mysqli_close($conn);
} else {
    echo "Método de requisição inválido.";
}
?>
