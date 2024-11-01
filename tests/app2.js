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

function displayNews(newsList) {
    const container = document.getElementById('card-container');
    
    newsList.forEach(newsItem => {
        
        // Coluna do Bootstrap para alinhar cada card na grid
        const card = document.createElement('div');
        card.classList.add('col');

        card.innerHTML = `
            <!-- Componente de Card do Bootstrap -->
            <div class="card h-100">
                
                <!-- Corpo do Card do Bootstrap -->
                <div class="card-body">
                    <h5 class="card-title">${newsItem.title}</h5>
                    
                    <!-- Texto do Card do Bootstrap -->
                    <p class="card-text">${newsItem.description || "No description available"}</p>
                </div>
                
                <!-- Rodapé do Card do Bootstrap -->
                <div class="card-footer">
                    
                    <!-- Botão estilizado do Bootstrap -->
                    <a href="${newsItem.link}" target="_blank" class="btn btn-primary">Read more</a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

loadNews();