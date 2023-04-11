//sticky scroll nav bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("text-small")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("text-small")
  }
}

//scroll fadein, onload header fadein
$(document).ready(function() {
  $(window).scroll( function(){
      $('.hideme').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1'},500);  
          }
      }); 
  });
  $('.fade-in').fadeIn(4000).removeClass('fade-in');
});

// quote generator
var currentQuote = '';
var currentAuthor = '';

const RandomQuoteMach = 'random-quote-machine';
let quotesData;

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

function getRandQuote() {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}

function getQuote() {
  let randomQuote = getRandQuote();
  console.log(randomQuote)
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
  
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );
  
  $('#text').text(randomQuote.quote);
  $('#author').html('-' + randomQuote.author);
}

$(document).ready(function() {
  getQuotes().then(() => {
    getQuote();
  })
  $('#new-quote').on('click', getQuote);
});