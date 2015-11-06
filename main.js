console.log('Im connected. Yey!');

var gameBoard=document.querySelector('.game-board');
var resetButton=document.querySelector('.button');
var playButton=document.querySelector('.play');
var cards=document.querySelector('.cards');

var imageOne=document.querySelector('.imageOne');
var imageTwo=document.querySelector('.imageTwo');
var imageThree=document.querySelector('.imageThree');
var imageFour=document.querySelector('.imageFour');
var imageFive=document.querySelector('.imageFive');
var imageSix=document.querySelector('.imageSix');
var imageSeven=document.querySelector('.imageSeven');
var imageEight=document.querySelector('.imageEight');
var imageNine=document.querySelector('.imageOne');
var imageTen=document.querySelector('.imageTwo');
var imageEleven=document.querySelector('.imageThree');
var imageTwelve=document.querySelector('.imageFour');
var imageThirteen=document.querySelector('.imageFive');
var imageFourteen=document.querySelector('.imageSix');
var imageFifteen=document.querySelector('.imageSeven');
var imageSixteen=document.querySelector('.imageEight');


var allImages=['imageOne', 'imageTwo', 'imageThree', 'imageFour', 'imageFive',
'imageSix', 'imageSeven', 'imageEight','imageNine', 'imageTen','imageEleven', 
'imageTwelve', 'imageFourteen', 'imageFifteen', 'imageSixteen'];

// var squareOne=document.getElementById('square-one');
// var squareTwo=document.getElementById('square-two');
// var squareThree=document.getElementById('square-three');
// var squareFour=document.getElementById('square-four');

// var squares=[squareOne, squareTwo, squareThree, squareFour];

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
    temporaryValue = allImages[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return allImages;
}

var shuffleSquares=shuffle(allImages);


///add event listener on cards///
var clickSquares= function(){
	cards=event.target;
	  if(clickCounter===0) { 
        cards.classList.add(shuffleSquares[0]);
        clickCounter++;
        cards.removeEventListener('click',clickSquares);
	  }
};

cards.addEventListener('click', clickSquares);
///
// var clickSquaresOne= function(){
// 	cards.length=event.target;
// 	  if(clickCounter===1) { 
//         cards.classList.add(1);
//         clickCounter++;
// 	  }
// };

// cards.addEventListener('click', clickSquaresOne);



///not sure if i should have this??//
// var gettingPlayButtonToWork= function(){
//    playButton=event.target;
//       if (clickCounter===0) {
//       	playButton.classList.add(shuffleSquares);
//       	clickCounter++;
//       }else if(clickCounter===25) {
//         shuffle(allImages)
//       }
// }

// playButton.addEventListener('click', gettingPlayButtonToWork)
///////

///J Query///
$(document).ready(function(){

});

