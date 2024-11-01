// Chamando da API
async function loadNews() {
    const apiKey = "pub_57846bcf486bcebc0bcf94e4446ef9477d814";
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&category=education,science,technology`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "success") {
            displayNews(data.results);
        } else {
            console.error("Error fetching news:", data);
        }
    } catch (error) {
        console.error("Failed to fetch news:", error);
    }
}



function spotlightCarousel(newsList) {
    const container = document.getElementById('spotlight-carousel');
    
    newsList.forEach(newsItem => {
        
        // Coluna do Bootstrap para alinhar cada card na grid
        const card = document.createElement('div');
        card.classList.add('col');

        card.innerHTML = `
            <div id="newsCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/images.jpeg" class="d-block w-100" alt="First slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>SPOTLIGHT</h5>
                            <h5>First Slide</h5>
                            <p>Description for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://via.placeholder.com/1200x400" class="d-block w-100" alt="Second slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second Slide</h5>
                            <p>Description for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://via.placeholder.com/1200x400" class="d-block w-100" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third Slide</h5>
                            <p>Description for the third slide.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#newsCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#newsCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

loadNews();