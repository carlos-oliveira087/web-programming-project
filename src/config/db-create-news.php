<?php
    // SCRIPT PARA SALVAR AS NOTÍCIAS CADASTRADAS NO BANCO

    include './db-connection.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        $category = mysqli_real_escape_string($conn, $_POST['category']);
        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $author = mysqli_real_escape_string($conn, $_POST['author']);
        $text = mysqli_real_escape_string($conn, $_POST['text']);
        $creation_date = date('Y-m-d H:i:s');

        // UPLOAD DA IMAGEM
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $image_temp_path = $_FILES['image']['tmp_name'];
            $image_name = basename($_FILES['image']['name']);
            $upload_dir = 'uploads/';

            // Criando o diretório de upload da imagem caso ele não exista
            if (!is_dir($upload_dir)) {
                mkdir($upload_dir, 0777, true);
            }

            $image_path = $upload_dir . $image_name;
            if (move_uploaded_file($image_temp_path, $image_path)) {
                $sql = "INSERT INTO news_table (news_category, news_title, creator, news_text, news_image, news_creation_date) 
                        VALUES ('$category', '$title', '$author', '$text', '$image_path', '$creation_date')";

                if (mysqli_query($conn, $sql)) {
                    echo "<script>alert('News successfully registered!');;
                    window.location.href = '../app/pages/03-home-structure.html'</script>";
                } else {
                    echo "<script>alert('Error registering news: " . mysqli_error($conn) . "');</script>";
                }
            } else {
                echo "<script>alert('Error uploading image.');</script>";
            }
        } else {
            echo "<script>alert('Please upload a valid image.');</script>";
        }
    }

    mysqli_close($conn);
?>