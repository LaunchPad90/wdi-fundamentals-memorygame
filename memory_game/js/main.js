//create arrays for cards and cardsInPlay
const cards = ['queen', 'queen', 'king', 'king'];
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
  console.log('User flipped ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();


//function to check if cardsInPlay match
    function checkForMatch() {
      if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log('You found a match!');
    } else {
    console.log('Sorry, try again');
    }
  }
}
