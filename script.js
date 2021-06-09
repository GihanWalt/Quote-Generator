let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote form apiQuotes array
    const quote = apiQuotes[Math.floor(math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try{
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       newQuote();
    } catch (error) {
    // Catch Error Here
    }
}

// On Load
getQuotes();
