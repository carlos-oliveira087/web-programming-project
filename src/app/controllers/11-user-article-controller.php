<?php
    include_once("../../config/db-connection.php");
    header("Content-Type: application/json");

    // Pegando o ID da notícia da query string
    $newsId = $_GET['news_id'] ?? null;

    if (!$newsId) {
        echo json_encode(["error" => "News ID not provided."]);
        exit;
    }

    // Buscando a notícia específica no banco
    $sqlQuery = "SELECT * FROM news_table WHERE news_id = ?";
    $stmt = $conn->prepare($sqlQuery);
    $stmt->bind_param("i", $newsId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode([
            "news_image" => $row["news_image"],
            "news_title" => $row["news_title"],
            "news_text" => $row["news_text"]
        ]);
    } else {
        echo json_encode(["error" => "News not found."]);
    }
?>