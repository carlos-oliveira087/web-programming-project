<?php
include_once("../../config/db-connection.php");

header("Content-Type: application/json");

$sqlQuery = "SELECT * FROM news_table ORDER BY id DESC LIMIT 1";
$result = mysqli_query($conn, $sqlQuery);

if (!$result) {
    error_log("SQL Error: " . mysqli_error($conn));
    echo json_encode(["error" => "Failed to fetch news."]);
    exit;
}

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $imagePath = "../../config/uploads/" . $row["news_image"];
    
    if (!file_exists($imagePath)) {
        error_log("Image not found: " . $imagePath);
        echo json_encode(["error" => "Image not found."]);
        exit;
    }

    echo json_encode([
        "news_image" => $imagePath,
        "news_title" => $row["news_title"],
        "news_text" => $row["news_text"]
    ]);
} else {
    error_log("No news found.");
    echo json_encode(["error" => "No news found."]);
}
?>
