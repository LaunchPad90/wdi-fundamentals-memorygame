//create arrays for cards and cardsInPlay
const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [] ;
//create variables for each card
const cardOne = cards[3];
const cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);



//if statement to check cardsInPlay
if (cardsInPlay.length === 2) {
  alert('Two cards');
} if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You found a match!');
} else {
  alert('Sorry, try again');
}






console.log(cardsInPlay);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
