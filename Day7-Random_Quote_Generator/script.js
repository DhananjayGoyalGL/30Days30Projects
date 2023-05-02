//get the element from DOM
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");

//Array of quotes
const quote = [
  {
    text: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },
  { text: "Code is the poetry of a better world.", author: "Marijn Haverbeke" },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    text: "Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?'",
    author: "Steve McConnell",
  },
  {
    text: "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    text: "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare",
  },
  {
    text: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    text: "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
  },
  {
    text: "The most important thing in communication is hearing what isn't said.",
    author: "Peter Drucker",
  },
];

//generate random quotes
function getRandomQuotes() {
  return quote[Math.floor(Math.random() * quote.length)];
}

//Updating and displaying quote and author
function displayQuote() {
  const { text, author } = getRandomQuotes();
  quoteText.textContent = text;
  quoteAuthor.textContent = author;
}

//tweet the current quote
function tweetQuote() {
  const tweetText = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;
  window.open(tweetUrl);
}

//Event Listeners
newQuoteButton.addEventListener("click", displayQuote);
tweetQuoteButton.addEventListener("click", tweetQuote);

//Initial Quote Display
displayQuote();
