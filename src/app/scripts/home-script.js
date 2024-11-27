// FUNÇÃO QUE CHAMA AS NOTÍCIAS DE TECNOLOGIA DA API
async function loadWorldNews() {
    const apiKey = "pub_57846bcf486bcebc0bcf94e4446ef9477d814";
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&category=world`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status ${response.status}`);
        }

        const data = await response.json();
        console.log(data.results);
        if (data.status === "success" && data.results.length > 0) {
            displayNews(data.results);
        } else {
            console.error("No news found or API returned an error:", data);
        }
    } catch (error) {
        console.error("Failed to fetch science news:", error);
    }
}


// FUNÇÃO QUE GERA OS CARDS COM AS NOTÍCIAS
function displayNews(newsList) {
    
    const newsContainer = document.getElementById("news-container");

    // Remover duplicatas com base na URL da imagem
    const uniqueNews = Array.from(new Map(newsList.map(news => [news.title, news])).values());

    // Excluir retornos que não possuem imagem
    const newsWithImages = uniqueNews.filter(news => news.image_url);


    // Limita o número de notícias mostradas
    const limitedNews = newsWithImages.slice(0, 6);
  
    limitedNews.forEach(news => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4 custom-card";

        const cardContent = `
            <div class="card">
                <img src="${news.image_url}" class="card-img-top" alt="${news.title}">
                
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text text-muted">${news.creator ? news.creator.join(", ") : "Unknown Author"}</p>
                    <p class="card-text">${news.description ? news.description.substring(0, 30) + "..." : "No description available"}</p>
                </div>
            </div>
        `;

        card.innerHTML = cardContent;
        newsContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadWorldNews);