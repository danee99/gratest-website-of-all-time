let count = 0;
function increaseCount() {
  count++;
  document.getElementById("counter").innerHTML = "Zähler: " + count;
}

function resetCount() {
  count = 0;
  document.getElementById("counter").innerHTML = "Zähler: " + count;
}

function addToInput(x) {
  document.getElementById("calculator-result").value += x;
}

function clearInput() {
  document.getElementById("calculator-result").value = "";
}

function calculate() {
  document.getElementById("calculator-result").value = eval(
    document.getElementById("calculator-result").value
  );
}

function generatePassword() {
  let allPossibleChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let passwordResult = "";
  for (let i = 0; i < Math.floor(Math.random() * (12 - 8 + 1) + 8); i++) {
    let randomIndex = Math.floor(
      Math.random() * (allPossibleChars.length - 1) + 0
    );
    passwordResult += allPossibleChars[randomIndex];
  }
  document.getElementById("password-result").innerHTML =
    "Passwort: " + passwordResult + "<br> Länge = " + passwordResult.length;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

function makeMove(cell) {
  if (board[cell] === "") {
    board[cell] = currentPlayer;
    document.getElementById("cell-" + cell).innerHTML = currentPlayer;
    checkForWin();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWin() {
  var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < winCombinations.length; i++) {
    var a = winCombinations[i][0];
    var b = winCombinations[i][1];
    var c = winCombinations[i][2];

    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      document.getElementById("game-status").innerHTML ="Player " + currentPlayer + " has won!";
      audio.play(new Audio('win.mp3'));
      return;
    }
  }

  if (!board.includes("")) {
    document.getElementById("game-status").innerHTML = "It's a tie!";
    audio.play(new Audio('win.mp3'));
    return;
  }
}

function resetBoard() {
  document.getElementById("game-status").innerHTML = "Spiel hat begonnen.";
  board = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll("td").forEach(function (cell) {
    cell.innerHTML = "";
  });
  currentPlayer = "X";
}

function setWecker() {
  var stunden = document.getElementById("stunden").value;
  var minuten = document.getElementById("minuten").value;
}