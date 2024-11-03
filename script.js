const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, don't waste it living someone else’s life.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait for the perfect moment, take the moment and make it perfect."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = document.getElementById('quote');
    quoteText.textContent = quotes[randomIndex];
    quoteText.style.color = getRandomColor();  // Change color with each new quote
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}