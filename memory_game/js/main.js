console.log("Up and running!");
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage:	"images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage:	"images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage:	"images/king-of-diamonds.png",
	},

];

var cardsInPlay = [];


//var cardThree = cards[3];
//var cardFour = cards[4];

function checkForMatch(argument) {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};


function flipCard() {
	var cardId = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
  }4
};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)

	}
};

createBoard();

