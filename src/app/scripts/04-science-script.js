// FUNÇÃO QUE GERA O CARD DA NOTÍCIA
document.addEventListener("DOMContentLoaded", () => {
    fetch('../controllers/04-science-controller.php')
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                document.getElementById("latest-article-img").src = `../../config/${data.news_image}`;
                document.getElementById("latest-article-title").innerText = data.news_title;
                document.getElementById("latest-article-intro").innerText = data.news_text;
            } else {
                document.getElementById("latest-article-title").innerText = "No news available.";
            }
        })
        .catch(error => console.error("Error fetching news:", error));
});

// FUNÇÃO QUE GERA OS CARDS COM AS NOTÍCIAS
function displayNews(newsList) {
    const newsContainer = document.getElementById("news-container");
    
    // Excluindo retornos que não possuem imagem
    const newsWithImages = newsList.filter(news => news.image_url);

    newsWithImages.forEach(news => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4 custom-card";

        const cardContent = `
            <a href="10-article-page-structure.html?title=${encodeURIComponent(news.title)}&image=${encodeURIComponent(news.image_url)}&description=${encodeURIComponent(news.description || "No description available.")}" class="card-link">
                <div class="card">
                    <img src="${news.image_url}" class="card-img-top" alt="${news.title}">
                    
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text text-muted">${news.creator ? news.creator.join(", ") : "Unknown Author"}</p>
                        <p class="card-text">${news.description ? news.description.substring(0, 30) + "..." : "No description available"}</p>
                    </div>
                </div>
            </a>
        `;

        card.innerHTML = cardContent;
        newsContainer.appendChild(card);
    });
}


// CHAMANDO A FUNÇÃO loadScienceNews ASSIM QUE O DOCUMENTO HTML É CARREGADO
document.addEventListener("DOMContentLoaded", loadScienceNews);