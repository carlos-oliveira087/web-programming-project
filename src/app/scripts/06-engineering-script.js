// Função para chamar notícias de "Engineering"
async function loadEngineeringNews() {
    const apiKey = "pub_6061276a62930030f4faa2b020e2589b4ec50";
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=engineering&language=en&category=education,environment,other,science,technology`;
    
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
        console.error("Failed to fetch engineering news:", error);
    }
}


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


document.addEventListener("DOMContentLoaded", loadEngineeringNews);