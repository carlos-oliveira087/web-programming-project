<?php
    include_once("../../config/db-connection.php");

    header("Content-Type: application/json");

    $latestNewsQuery = "SELECT * FROM news_table ORDER BY id DESC LIMIT 1";
    $latestNewsResult = mysqli_query($conn, $latestNewsQuery);

    $carouselNewsQuery = "SELECT * FROM news_table ORDER BY news_creation_date DESC LIMIT 3";
    $carouselNewsResult = mysqli_query($conn, $carouselNewsQuery);

    if (!$latestNewsResult || !$carouselNewsResult) {
        echo json_encode(["error" => "Failed to fetch news."]);
        exit;
    }

    $latestNews = null;
    if (mysqli_num_rows($latestNewsResult) > 0) {
        $latestNews = mysqli_fetch_assoc($latestNewsResult);
    }

    $carouselNews = [];
    if (mysqli_num_rows($carouselNewsResult) > 0) {
        while ($row = mysqli_fetch_assoc($carouselNewsResult)) {
            $carouselNews[] = [
                "news_image" => $row["news_image"],
                "news_title" => $row["news_title"]
            ];
        }
    }

    echo json_encode([
        "latestNews" => $latestNews ? [
            "news_image" => $latestNews["news_image"],
            "news_title" => $latestNews["news_title"]
        ] : null,
        "carouselNews" => $carouselNews
    ]);
?>
