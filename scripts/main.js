//efine global varables
const newGame = document.getElementById("newGame");
const p1Text = document.getElementById("p1Text");
const p2Text = document.getElementById("p2Text");
let p1TotalScore = document.getElementById("p1TotalScore");
let p2TotalScore = document.getElementById("p2TotalScore");
let p1CurrentScore = document.getElementById("p1CurrentScore");
let p2CurrentScore = document.getElementById("p2CurrentScore");
let diceImage = document.getElementById("diceImage");
let rollButton = document.getElementById("rollButton");
let holdButton = document.getElementById("holdButton");
// These track game score turn and sum
let p1Sum = 0;
let p2Sum = 0;
let isPlayer1 = true;

//ROLL - points system & winning conditions
rollButton.addEventListener("click", respondRollButton);

function respondRollButton() {
  let oneRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  diceImage.src = `img/Dice ${oneRoll}.svg`;
  if (isPlayer1 == true) {
    p1Sum += oneRoll;
    p1CurrentScore.innerText = p1Sum;
  } else {
    p2Sum += oneRoll;
    p2CurrentScore.innerText = p2Sum;
  }
  // within ROLL function: player 1 win conditons:
  if (p1Sum > 20) {
    p1Text.innerText = "Player 1 Wins!";
    p2Text.innerText = "Player 2 Loses!";
    rollButton.style.display = "none";
    holdButton.style.display = "none";
    newGame.style.display = "block";
  } else if (oneRoll == 1 && isPlayer1 == true) {
    p1Text.innerText = "Player 1 Loses!";
    p2Text.innerText = "Player 2 Wins!";
    rollButton.style.display = "none";
    holdButton.style.display = "none";
    newGame.style.display = "block";
  }
// within ROLL funcition: player 2 win conditions:
  if (p2Sum > 20) {
    p1Text.innerText = "Player 1 Loses!";
    p2Text.innerText = "Player 2 Wins!";
    rollButton.style.display = "none";
    holdButton.style.display = "none";
    newGame.style.display = "block";
  } else if (oneRoll == 1 && isPlayer1 == false) {
    p1Text.innerText = "Player 1 Wins!";
    p2Text.innerText = "Player 2 Loses!";
    rollButton.style.display = "none";
    holdButton.style.display = "none";
    newGame.style.display = "block";
  }
}

 // HOLD functionality
 holdButton.addEventListener("click", respondHoldButton);

 function respondHoldButton() {
   if (isPlayer1 == true) {
     p1TotalScore.innerText = p1Sum;
     p1CurrentScore.innerText = 0;
     isPlayer1 = false;
   } else {
     p2TotalScore.innerText = p2Sum;
     p2CurrentScore.innerText = 0;
     isPlayer1 = true;
   }
 }
