console.log('Im connected. Yey!');

var gameBoard=document.querySelector('.game-board');
var resetButton=document.querySelector('.button');
var playButton=document.querySelector('.play');
var cards=document.querySelector('.cards');

// var imageOne = document.querySelector('.imageOne');
// var imageTwo=document.querySelector('.imageTwo');
// var imageThree=document.querySelector('.imageThree');
// var imageFour=document.querySelector('.imageFour');
// var imageFive=document.querySelector('.imageFive');
// var imageSix=document.querySelector('.imageSix');
// var imageSeven=document.querySelector('.imageSeven');
// var imageEight=document.querySelector('.imageEight');
// var imageNine=document.querySelector('.imageOne');
// var imageTen=document.querySelector('.imageTwo');
// var imageEleven=document.querySelector('.imageThree');
// var imageTwelve=document.querySelector('.imageFour');
// var imageThirteen=document.querySelector('.imageFive');
// var imageFourteen=document.querySelector('.imageSix');
// var imageFifteen=document.querySelector('.imageSeven');
// var imageSixteen=document.querySelector('.imageEight');


// var allImages=['imageOne', 'imageTwo', 'imageThree', 'imageFour', 'imageFive',
// 'imageSix', 'imageSeven', 'imageEight','imageNine', 'imageTen','imageEleven', 
// 'imageTwelve', 'imageFourteen', 'imageFifteen', 'imageSixteen'];

//


//alternative 1
// var allImages =[];

// loop sixteen times
// for(){
	// create DOM element
	// give it the right class name
	// push it into the all Images array
	// var square = document.createElement('div');
	// square1.className = 'square-1';
	// 'square-' + i;
// }

// shuffle the allImages

// alternative 2
// remove all div elements from game board and then reappend in shuffled order

// alternative 3
// create an array of the classStrings
// shuffle the image classs strings
// go through each card div and add that image class

 var allImages=['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 
 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'];

 var cardDivs=document.querySelectorAll('.cards');

 cardDivs[0].classList.add(allImages[0])

 var shuffleCards= function(){
  shuffle(allImages)
  for (var i = 0; i < allImages.length; i++){
    cardDivs[i].classList.add(allImages[i]);
  }
 };


var square1 = document.getElementById('square-one');
var square2 = document.getElementById('square-two');
var square3 = document.getElementById('square-three');
var square4 = document.getElementById('square-four');
var square5 = document.getElementById('square-five');
var square6 = document.getElementById('square-six');
var square7 = document.getElementById('square-seven');
var square8 = document.getElementById('square-eight');
var square9 = document.getElementById('square-nine');
var square10 = document.getElementById('square-ten');
var square11 = document.getElementById('square-eleven');
var square12 = document.getElementById('square-twelve');
var square13 = document.getElementById('square-thirteen');
var square14 = document.getElementById('square-fourteen');
var square15 = document.getElementById('square-fifteen');
var square16 = document.getElementById('square-sixteen');

var squares = [square1, square2, square3, square4, square5, square6, square7, square8,
square9, square10, square11, square12, square13, square14, square15, square16];

var clickCounter = 0;

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
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var shuffleSquares = shuffle(allImages);

var previousCard;


// var makeFaceDown = function(card, previousCard){
//   card.classList.add('facedown');
//   previousCard.classList.add('facedown');
// };

var clickSquare = function(event){
	card = event.target;
	card.classList.remove("facedown");
  console.log(event.target)
  clickCounter++;
  if(clickCounter === 24) { 
    console.log('lost');
    //if matches aren't all complete game over
  } else if (clickCounter % 2 === 0) {
    //matching check logic
    //previous card matches this card??
    var imageClasses = ['imageOne', 'imageTwo', 'imageThree', 'imageFour', 'imageFive', 'imageSix', 'imageSeven', 'imageEight'];
    var cardImageClass = imageClasses.filter(function(className){
      return card.classList.contains(className);
    });

    var previousCardImageClass = imageClasses.filter(function(className){
      return previousCard.classList.contains(className);
    });
    if (previousCardImageClass !== cardImageClass) {
      // If they don't match, then flip facedown again
        card.classList.add('facedown');
        previousCard.classList.add('facedown');
        window.setTimeout(clickSquare, 2000);
    }
  }
  previousCard = card;
};



// var getImageToRespond = function(event){
// var square = event.target;
// square.classList.remove("facedown");
// };

///A for loop on Event listeners on cards///
var createEventListenersOnCards = function(squares){
  for (var i = 0; i < squares.length; i++) {
  	squares[i].addEventListener('click', clickSquare);
  }
};


createEventListenersOnCards(squares);



///Event Listener on Play Button///
var createEventListenerOnPlay= function(event){
	var playButton=event.target;
	console.log(event.target);
};

playButton.addEventListener('click', shuffleCards);


///J Query///
// $(document).ready(function(){

// });

