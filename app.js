let msg;
function rockFunction() {
  const playerHand = document.querySelector(".player-hand");
  playerHand.src = `./assets/rock.png`;
  computerFunction("rock");
}
function paperFunction() {
  const playerHand = document.querySelector(".player-hand");
  playerHand.src = `./assets/paper.png`;
  computerFunction("paper");
}

function scissorsFunction() {
  const playerHand = document.querySelector(".player-hand");
  playerHand.src = `./assets/scissors.png`;

  computerFunction("scissors");
}

let val;

function computerFunction(x) {
  const computerHand = document.querySelector(".computer-hand");
  const computerNumber = Math.floor(Math.random() * 3);
  if (computerNumber == 0) {
    computerHand.src = `./assets/rock.png`;
    val = "rock";
  } else if (computerNumber == 1) {
    computerHand.src = `./assets/paper.png`;
    val = "paper";
  } else if (computerNumber == 2) {
    computerHand.src = `./assets/scissors.png`;
    val = "scissors";
  }

  if (x == val) {
    msg = "March Tie!";
    document.getElementById("winner").innerHTML = msg;
  }
  if (x == "scissors" && val == "paper") {
    msg = "Player Win!";
    document.getElementById("winner").innerHTML = msg;
  }
  if (x == "scissors" && val == "rock") {
    msg = "Computer Win!";
    document.getElementById("winner").innerHTML = msg;
  }

  if (x == "rock" && val == "paper") {
    msg = "Computer Win!";
    document.getElementById("winner").innerHTML = msg;
  }
  if (x == "rock" && val == "scissors") {
    msg = "Player Win!";
    document.getElementById("winner").innerHTML = msg;
  }

  if (x == "paper" && val == "rock") {
    msg = "Player Win!";
    document.getElementById("winner").innerHTML = msg;
  }
  if (x == "paper" && val == "scissors") {
    msg = "Computer Win!";
    document.getElementById("winner").innerHTML = msg;
  }
}
