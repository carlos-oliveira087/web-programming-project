<?php
    include_once("../../config/db-connection.php");

    header("Content-Type: application/json");

    $category = 'Engineering';

    if (empty($category)) {
        echo json_encode(["error" => "Category not specified."]);
        exit;
    }

    $sqlQuery = "
        SELECT * 
        FROM news_table 
        WHERE news_category = '$category' 
        ORDER BY news_creation_date DESC 
        LIMIT 1
    ";

    $result = mysqli_query($conn, $sqlQuery);

    if (!$result) {
        error_log("SQL Error: " . mysqli_error($conn));
        echo json_encode(["error" => "Failed to fetch news."]);
        exit;
    }

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode([
            "news_image" => $row["news_image"],
            "news_title" => $row["news_title"],
            "news_text" => $row["news_text"]
        ]);
    } else {
        error_log("No news found in category: $category.");
        echo json_encode(["error" => "No news found for the specified category."]);
    }
?>