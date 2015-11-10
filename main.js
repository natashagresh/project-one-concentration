console.log('Im connected. Yey!');

var gameBoard=document.querySelector('.game-board');
var resetButton=document.querySelector('.button');
var playButton=document.querySelector('.play');
var cards=document.querySelector('.cards');

// alternative 3
// create an array of the classStrings
// shuffle the image classs strings
// go through each card div and add that image class

 var allImages = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 
 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'];

 var cardDivs = document.querySelectorAll('.cards');

 cardDivs[0].classList.add(allImages[0]);

///getting cards to shuffle///
 var shuffleCards= function(){
  shuffle(allImages);
  for (var i = 0; i < allImages.length; i++){
    cardDivs[i].classList.add(allImages[i]);
  }
 };

var square1 = document.getElementById('square1');
var square2 = document.getElementById('square2');
var square3 = document.getElementById('square3');
var square4 = document.getElementById('square4');
var square5 = document.getElementById('square5');
var square6 = document.getElementById('square6');
var square7 = document.getElementById('square7');
var square8 = document.getElementById('square8');
var square9 = document.getElementById('square9');
var square10 = document.getElementById('square10');
var square11 = document.getElementById('square11');
var square12 = document.getElementById('square12');
var square13 = document.getElementById('square13');
var square14 = document.getElementById('square14');
var square15 = document.getElementById('square15');
var square16 = document.getElementById('square16');

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

var clickSquare = function(event){
	card = event.target;
	card.classList.remove('facedown');
  console.log(event.target);
  clickCounter++;
  if(clickCounter === 32) { 
    var lost = document.createElement('h2');
    var title = document.querySelector('#loser-container');
    lost.innerText = 'Sorry, we are never ever getting back together';
    title.appendChild(lost);
    console.log('lost');
    //if matches aren't all complete game over
   } else if (clickCounter % 2 === 1){
    previousCard = card;
    } else if (clickCounter % 2 === 0) { 
    console.log('blah');
    //matching check logic
    //previous card matches this card??
    var imageClasses = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'];
    var cardImageClass = imageClasses.filter(function(className){
      return card.classList.contains(className);
    });

    var previousCardImageClass = imageClasses.filter(function(className){
      return previousCard.classList.contains(className);
    });

    console.log(previousCardImageClass);
    console.log(cardImageClass);

    if(previousCardImageClass[0] == cardImageClass[0]){
      card.classList.remove('facedown');
      previousCard.classList.remove('facedown');
      console.log('meh');
     } else if (previousCardImageClass !== cardImageClass) {
      // If they don't match, then flip facedown again
        window.setTimeout(function() {
          card.classList.add('facedown');
          previousCard.classList.add('facedown');
        }, 1000);   
        console.log(previousCardImageClass);
        console.log(cardImageClass);
    }  
    }    
};

var winnerLoser=function(){
  if (clickCounter === 32){
    var lost= document.querySelector('.winner-loser');
    lost.textContent('Sorry, we are never ever getting back together');
    console.log('you lost again you loser');
};
};

winnerLoser();

///A for loop on Event listeners on cards///
var createEventListenersOnCards = function(squares){
  for (var i = 0; i < squares.length; i++) {
  	squares[i].addEventListener('click', clickSquare);
  }
};


createEventListenersOnCards(squares);

///Event Listener on Play Button///
var createEventListenerOnPlay= function(event){
	var playButton = event.target;  
};

playButton.addEventListener('click', shuffleCards);

var createEventListenerOnReset = function(event){
  var resetButton = event.target;
  for(var i = 0; i < squares.length; i++) {
    squares[i].classList.add('facedown');
  };
  clickCounter = 0;
  console.log(clickCounter);
  var finalRemove = document.querySelector('#loser-container');
  document.getElementsByTagName('h2')[0].style.display = 'none';  
};

resetButton.addEventListener('click', createEventListenerOnReset);

