const splashScreen = document.getElementById('splash-screen')
const startButton = document.getElementById('start-button');
const restartBtn = document.getElementById('restart-button');
const restartScreen = document.getElementById('game-end')
const returnScreen = document.getElementById('game-end')
const gameScreen = document.getElementById('game-screen')
const gameContainer = document.getElementById('game-container')
const returnBtn = document.getElementById("return-button")
const finishMessage = document.getElementById('finish-game')
const scoreDisplay = document.getElementById('score')
const mainSong = new Audio("./audio/candy.mp4"); 
const timer = document.getElementById('timer')

startButton.addEventListener('click',  startGame);
restartBtn.addEventListener('click', startGame)


let game = undefined
let startTime = 11;
let timerId = null

mainSong.loop = true;
mainSong.volume = 0.2;
mainSong.play();

function startGame() {
  splashScreen.style.display = 'none'
  restartBtn.style.display = 'block'
  gameScreen.style.display = 'flex'
  gameContainer.style.display = 'block'
  moves = 0;
  startTime = 11;
  timer.innerText = `${startTime}s`
  timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  startTime--;
  timer.innerText = `${startTime}s`
  if (startTime === 0 || score === 0) {
    gameOver();
  }
}


function gameOver() {
  clearInterval(timerId);
  startTime--;
  timer.innerText = `${startTime}s`
  if (score.innerText >= 100) {
    finishMessage.innerText = 'Congratulations! You Win 🏅'
  } else if (moves >= 50 || score === 0 ) {
    finishMessage.innerText = 'Sorry! Try Again 🥺'
  }
  gameScreen.style.display = "none";
  gameContainer.style.display = "none";
  document.getElementById("game-end").style.display = "block";
}

// Restart button functionality
function end() {
  splashScreen.style.display = "none";
  gameScreen.style.display = "flex"; 
  gameContainer.style.display = "block"
  finishMessage.style.display = 'block';
  document.getElementById("finish-game").style.display = "block";
  
}

// Function to restart the game
function restartGame() {
  // window.location.reload()
  gameScreen.style.display = 'flex';
  splashScreen.style.display = 'none';
  restartScreen.style.display = 'none';
  gameContainer.style.display = "block";
  finishMessage.style.display = 'block';
  restartBtn.style.display = 'none';
  scoreDisplay.innerText = score;
  startTime = 11;
  score = 0;
  moves = 0;
  timer.innerText = `${startTime}s`
  document.getElementById("restart-button").style.display = "none";
}

// function returnGame() {
//   splashScreen.style.display = 'block';
//   returnScreen.style.display = 'none';
//   gameContainer.style.display = "none"
//   finishMessage.style.display = 'none';
//   document.getElementById("return-button").style.display = "block";
// }







