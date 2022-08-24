let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

// Part 1
const title1 = document.getElementById('main-title');
title1.innerText = "DOM's site";

  // Part 2
  const newBody =document.querySelector('body')
    newBody.style.backgroundColor ='blue'

  // Part 3 
const newList = this.getElementById('favorite-things')
if (newList.hasChildNodes()) {
  listChanges.removeChild(newList.lastElementChild);
}

  // Part 4
const specialTitle = document.querySelectorAll('.special-title');
specialTitle.forEach(special => {
  special.style.fontSize = '2rem';
});

  // Part 5
  const raceChanges = document.getElementById('past-races');
  const races = raceChanges.querySelectorAll('li');
  for (let i = 0; i < races.length; i++) {
  if (races[i].textContent === "Chicago") {
    raceChanges.removeChild(races[i]);
  }};

  // Part 6
const newRace = document.createElement('li');
newRace.innerText = 'los angeles'
raceChanges.appendChild(newRace)

// part 7

const blogPost = document.createElement('div');
document.querySelector('.main').appendChild(blogPost);

blogPost.classList.add('blog-post');

blogPost.classList.add('purple');


const blogheading  = document.createElement('h2');
blogheading.innerText = "The Blog";
blogPost.appendChild(blogheading);

const blogParg = document.createElement('p');
blogParg.innerText = ("This is DOM'S blog").toUpperCase()

blogPost.appendChild(blogParg)

// console.log(document.body.innerHTML)

  // Part 8
  // const randomQuote = function()  {
  //   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };

  // const quoteTitle = document.querySelector('#quote-title')

quoteTitle.addEventListener('click', randomQuote)

  // Part 9
  const classblog = document.getElementsByClassName('blog-post');
  Array.from(clas).forEach( => {
    post.addEventListener('mouseout', (event) => {
      classblog.classList.toggle('purple');
    })
    classblog.addEventListener('mouseenter', (event) => {
      classblog.classList.toggle('red');
    });
  });
});



;
