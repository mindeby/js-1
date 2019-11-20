/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// Define colors I want the background color to change to

var colors = ['#FFE9EA', '#FBDAEE', '#DACFFF', '#C7FFFE', '#E2FEFF']; // Hex Colors #

function getRandomColor() {
  var randomColor = Math.floor(Math.random() * colors.length) + 1;
  var randomColor = colors[randomColor-1]; // -1 to get index of 0
  return randomColor;
}

var backgroundColor;

//quotes array: create array of 5 objects minimum

var quotes = [
  {
    quote: '"The beauty of the impostor syndrome is you vacillate between extreme egomania and a complete feeling of: “I’m a fraud! Oh God, they’re on to me! I’m a fraud!” So you just try to ride the egomania when it comes and enjoy it, and then slide through the idea of fraud."',
    source:'Tina Fey',
    image:'https://www.cheatsheet.com/wp-content/uploads/2019/08/Tina-Fey.jpg',
    job: 'Comedian'
  },
  {
    quote: '"You will never climb Career Mountain and get to the top and shout, “I made it!” You will rarely feel done or complete or even successful. Most people I know struggle with that complicated soup of feeling slighted on one hand and like a total fraud on the other."',
    source:'Amy Poehler',
    image:'https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/04/AmyP-1068x712.jpg',
    job: 'Comedian'
  },
  {
    quote: '"I had enormous self-image problems and very low self-esteem, which I hid behind obsessive writing and performing. … I was driven to get through life very quickly. I really felt so utterly inadequate. I thought the work was the only thing of value."',
    source:'David Bowie',
    citation: 'Interview',
    year:'2000',
    image:'https://nos.nl/data/image/2016/01/11/247204/2048x1152.jpg',
    job: 'Singer'
  },
  {
    quote: `"I have written 11 books, but each time I think, 'uh oh, they’re going to find out now. I’ve run a game on everybody, and they’re going to find me out.'"`,
    source:'Maya Angelou',
    image:'https://www.indiewire.com/wp-content/uploads/2014/05/maya-angelou.jpg?w=780',
    job: 'Writer'
  },
  {
    quote: `"No matter what we've done, there comes a point where you think, 'How did I get here? When are they going to discover that I am, in fact, a fraud and take everything away from me?'"`,
    source:'Tom Hanks',
    citation: 'Interview',
    year:'2016',
    image:'https://cdn.aarp.net/content/dam/aarp/entertainment/celebrities/2019/10/1140-tom-hanks-atm.jpg',
    job: 'Actor'
  },
];




//getRandomQuote function (generate random number and get index of quotes based on it)
var currentNumber; //make sure you don't get the same quote twice in a row

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  if (randomNumber === currentNumber){
    randomNumber += 1;
    currentNumber = randomNumber;
  } else {
    currentNumber = randomNumber;
  }
  var randomQuote = quotes[randomNumber-1]; // -1 to get index of 0
  return randomQuote;
}


//printQuote function (change html to display the properties of each object generated randomly)

function printQuote() {
  var currentQuote = getRandomQuote();

  if (currentQuote.citation) {
    textToPrint += '<span class="citation"> ${currentQuote.citation} </span>'
  }

  if (currentQuote.year) {
    textToPrint += '<span class="year"> ${currentQuote.year} </span> </p>'
  }


  var textToPrint = `<p class="quote">  ${currentQuote.quote}</p>
                    <p class="source"> ${currentQuote.source}`


  if (currentQuote.job) {
    textToPrint += ` (${currentQuote.job})`
  }

  if (currentQuote.citation) {
    textToPrint += `<span class="citation"> ${currentQuote.citation} </span>`
  }

  if (currentQuote.year) {
    textToPrint += `<span class="year"> ${currentQuote.year} </span> </p>`
  }


  textToPrint += `<img src="${currentQuote.image}" alt="gif of source"></p>`;
  document.getElementById('quote-box').innerHTML = textToPrint;

  var newColor = getRandomColor();

  if (backgroundColor !== newColor){ //check so that the color never repeats twice in a row even when the quote changes
    backgroundColor = newColor;
  } else {
    backgroundColor = '#65BEA9';
  }

  document.body.style.backgroundColor = `${backgroundColor}`;
}



// Auto-refresh the quote

function autoRefresh() {
  myInterval = setInterval(printQuote, 25000);
}

autoRefresh();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
