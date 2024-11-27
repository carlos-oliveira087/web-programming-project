document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const title = params.get("title");
    const image = params.get("image");
    const description = params.get("description");

    // Decodifica e insere os valores nos elementos
    document.getElementById("news-title").textContent = decodeURIComponent(title || "No Title Available");
    document.getElementById("news-image").src = decodeURIComponent(image || "default-image.jpg");
    document.getElementById("news-content").textContent = decodeURIComponent(description || "No description available.");
});
