let quotes = [];

const apiKey = "JoAILy0iLOxgmtGNtHyGeA==FCZwmczOSEOj16hq";
const quoteText = document.getElementById("quoteInfo");
const quoteAuthor = document.getElementById("quoteAuthor");
const fullQuote = `"${quoteText}" - ${quoteAuthor}`;

async function fetchQuotes() {
    const quoteBox = document.getElementById("quoteBox");
    quoteBox.innerHTML = `<p class="loading">Loading quotes...</p>`;


    try {
        const apiUrl = `https://api.api-ninjas.com/v1/quotes?/${apiKey}/${quoteText}/${quoteAuthor}/${fullQuote}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch quotes.");
        }
        quotes = await response.json();

        // Enable the button after data is ready
        document.getElementById("getQuoteBtn").disabled = false;

        // Show first random quote
        showRandomQuote();
    }catch (error) {
        quoteBox.innerHTML = `<p class='error'> ${error.message}</p>`;
    }
}


function showRandomQuote() {
    if (!quotes.length) {
        alert("Quotes not loaded yet. Please wait...");
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    if (!quote || !quote.text) {
        alert("Quote data is missing.");
        return;
    }

    document.getElementById("quoteInfo").textContent = quote.text;
    document.getElementById("quoteAuthor").textContent = quote.author || "Unknown";
}

// New Quote
document.getElementById("getQuoteBtn").addEventListener('click', showRandomQuote);

// Copy to Clipboard
document.getElementById("copyQuote").addEventListener("click", () => {
    const quoteText = document.getElementById("quoteInfo").textContent;
    const quoteAuthor = document.getElementById("quoteAuthor").textContent;
    const fullQuote = `"${quoteText}" - ${quoteAuthor}`;

    navigator.clipboard.writeText(fullQuote).then(() => {
        alert("Quote copied to clipboard!");
    });
});

// Tweet Quote
document.getElementById("tweetQuote").addEventListener("click", () => {
    const quoteText = document.getElementById("quoteInfo").textContent;
    const quoteAuthor = document.getElementById("quoteAuthor").textContent;
    const fullQuote = `"${quoteText}" - ${quoteAuthor}`;

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullQuote)}`;
    window.open(tweetUrl, '_blank');
});

// Save Favorite Quote
document.getElementById("saveFavoriteQuote").addEventListener("click", () => {
    const quoteText = document.getElementById("quoteInfo").textContent;
    const quoteAuthor = document.getElementById("quoteAuthor").textContent;
    const fullQuote = `"${quoteText}" - ${quoteAuthor}`;

    let favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

    // Prevent duplicates
    if (!favorites.includes(fullQuote)) {
        favorites.push(fullQuote);
        localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
        alert("Quote saved to favorites!");
    } else {
        alert("This quote is already in your favorites.");
    }
});

fetchQuotes();
