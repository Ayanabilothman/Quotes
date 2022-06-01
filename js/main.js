/***** Adding quotes in array *****/
var quotes = [{
    author: "Oscar Wilde",
    content: "Be yourself; everyone else is already taken."
},{
    author: "Marilyn Monroe",
    content: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
},{
    author: "Albert Einstein",
    content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
},{
    author: "Bernard M. Baruch",
    content: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
},{
    author: "William W. Purkey",
    content: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth."
}];

/***** Function to import random quote *****/
function getQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length)
    var randomQuote = quotes[randomIndex];
    return randomQuote
};

/***** Function to display the selected quote *****/
function displayQuote() {
    var quote = getQuote();
    var quoteContent = document.querySelector('#quote-content');
    quoteContent.innerHTML = `"${quote.content}"`;

    var quoteAuthor = document.querySelector('#quote-author');
    quoteAuthor.innerHTML = `--${quote.author}`;
}

/**Click to get quote**/
var btn = document.querySelector('button');
btn.addEventListener('click', displayQuote)

