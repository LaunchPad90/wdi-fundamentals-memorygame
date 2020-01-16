//create array for cards 
const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
    {
    rank: "queen", 
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
    {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
//empty array for cardsInPlay
const cardsInPlay = []

//function to create gameboard
function createBoard() {
  for (let i = 0; i < cards.length; i ++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    document.getElementById('game-board').appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
  }
};
createBoard();

//function to check how many cardsInPlay
function flipCard() {
  let cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length < 1) {
    //do nothing
  } else if (cardsInPlay.length === 1) {
    //do nothing
      } else {
    return;
  }
  console.log('User flipped ' + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
};
//function to check if cardsInPlay match
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } 
};
//function to reset game
