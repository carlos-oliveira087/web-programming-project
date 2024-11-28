document.addEventListener("DOMContentLoaded", toggleMyArticlesVisibility);

// FUNÇÃO QUE GERA O CARD DO ARTIGO
document.addEventListener("DOMContentLoaded", () => {
    fetch('../controllers/03-home-controller.php')
        .then(response => response.json())
        .then(data => {
            if (data.latestNews) {
                const latestArticleImg = document.getElementById("latest-article-img");
                const latestArticleTitle = document.getElementById("latest-article-title");

                if (latestArticleImg && latestArticleTitle) {
                    latestArticleImg.src = `../../config/${data.latestNews.news_image}`;
                    latestArticleTitle.innerText = data.latestNews.news_title;
                }
            } else {
                document.getElementById("latest-article-title").innerText = "No news available.";
            }

            const carouselItems = document.getElementById("carousel-items");
            if (carouselItems) {
                carouselItems.innerHTML = '';
                data.carouselNews.forEach((news, index) => {
                    const activeClass = index === 0 ? 'active' : '';
                    const carouselItem = `
                        <div class="carousel-item ${activeClass}">
                            <img src="../../config/${news.news_image}" class="d-block w-100" alt="${news.news_title}">
                            <h5 class="text-center mt-2">${news.news_title}</h5>
                        </div>
                    `;
                    carouselItems.innerHTML += carouselItem;
                });
            }
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            document.getElementById("latest-article-title").innerText = "No news available.";
        });
});


// FUNÇÃO QUE CHAMA AS NOTÍCIAS DA API
async function loadWorldNews() {
    const apiKey = "pub_607022386c7bd6d8b7b6bf38462756ad73613";
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

    const uniqueNews = Array.from(new Map(newsList.map(news => [news.image_url, news])).values());

    const newsWithImages = uniqueNews.filter(news => news.image_url);

    const limitedNews = newsWithImages.slice(0, 6);
  
    limitedNews.forEach(news => {
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

// FUNÇÃO QUE PERMITE SER VISÍVEL A SEÇÃO DE "MY ARTICLES"
function toggleMyArticlesVisibility() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const myArticlesDiv = document.getElementById("my-articles");
    const line = document.getElementById("line");
    
    if (isLoggedIn) {
        myArticlesDiv.style.display = "block";
        line.style.display = "block";
    } 
    else {
        myArticlesDiv.style.display = "none";
        line.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", loadWorldNews);
