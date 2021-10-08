//define varables
const newGame = document.getElementById("newGame");
const p1Text = document.getElementById("p1Text");
let p1TotalScore = document.getElementById("p1TotalScore");
let p1CurrentScore = document.getElementById("p1CurrentScore")
let p2TotalScore = document.getElementById("p2TotalScore");
let p2CurrentScore = document.getElementById("p2CurrentScore")
let diceImage = document.getElementById("diceImage");
let rollButton = document.getElementById("rollButton");
let holdButton = document.getElementById("holdButton");

// Set up a running total for both to display in total score
let p1Sum = 0;
let p2Sum = 0;

//MAIN FUNCTIONALITY - Assign a random value to one roll, conditional statement
//inc. running total & changing image on dice.

rollButton.addEventListener("click", respondRollButton)

function respondRollButton () {
  let oneRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  switch (oneRoll) {
    case 1:
      p1Sum += 1;
      diceImage.src = "img/Dice 1.svg";
      p1CurrentScore.innerText = p1Sum;
      break;
    case 2:
      p1Sum += 2;
      diceImage.src = "img/Dice 2.svg";
      p1CurrentScore.innerText = p1Sum;
      break;
    case 3:
      p1Sum += 3;
      diceImage.src = "img/Dice 3.svg";
      p1CurrentScore.innerText = p1Sum;
      break;
    case 4:
      p1Sum += 4;
      diceImage.src = "img/Dice 4.svg";
      p1CurrentScore.innerText = p1Sum;
      break;
    case 5:
      p1Sum += 5;
      diceImage.src = "img/Dice 5.svg";
      p1CurrentScore.innerText = p1Sum;
      break;
    case 6:
      p1Sum += 6;
      diceImage.src = "img/Dice 6.svg";
      p1CurrentScore.innerText = p1Sum;
      break;
  }

// hold button - doesn't work
holdButton.addEventListener("click", respondHoldButton)

function respondHoldButton () { 
  p1Sum 
  p1CurrentScore.innerText = p1TotalScore.innerText;
  p1CurrentScore.innerText = 0
}

  // within funciton doing game win/lose conditions:
  if (p1Sum > 20) {
    p1Text.innerText = "Winner!";
    rollButton.style.display = "none";
    newGame.style.display = "block";
  } else if (oneRoll == 1) {
    p1Text.innerText = "You Lose!";
    rollButton.style.display = "none";
    newGame.style.display = "block";
  }
};


