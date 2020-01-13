//create arrays for cards and cardsInPlay
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
    cardImage: "imgages/king-of-diamonds.png"
  }
];
const cardsInPlay = []

//function to check how many cardsInPlay
function flipCard(cardId) {
  if (cardsInPlay.length < 1) {
    //do nothing;
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


//function to check if cardsInPlay match
    function checkForMatch() {
      if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
    } else {
    alert('Sorry, try again');
    }
  }
}
