console.log('Im connected. Yey!');

var gameBoard=document.querySelector('#game-board');
var resetButton=document.querySelector('#button');
var playButton=document.querySelector('#play');
var cards=document.querySelector('.cards');


var squareOne=document.getElementById('square-one');
var squareTwo=document.getElementById('square-two');
var squareThree=document.getElementById('square-three');
var squareFour=document.getElementById('square-four');

var squares=[squareOne, squareTwo, squareThree, squareFour];

var clickCounter= 0;

///Decided to have a Fisher-Yates shuffle///
///http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array///
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = squares[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return squares;
}

var shuffleSquares=shuffle(squares);

///add event listener on play button///
var startGame= function(){
	playButton=event.target;
	  if(clickCounter===0) {
        squares.div.classList.add(shuffleSquares[0]);
        clickCounter++;
	  }
};
playButton.addEventListener('click', startGame);

///add event listener on squares///
// var clickSquares= function(){
// 	square=event.target;
// 	   if()
// }

// cards.addEventListener('click', clickSquares);


///J Query///
$(document).ready(function(){

});

