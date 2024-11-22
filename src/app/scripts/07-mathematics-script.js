// Função para chamar notícias de "Mathematics"
async function loadTechnologyNews() {
    const apiKey = "pub_57846bcf486bcebc0bcf94e4446ef9477d814";
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apikey}&q=mathematics&language=en&category=education,environment,other,science,technology`;
    
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