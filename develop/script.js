// click handler on the answer
//data.answer 
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");





timerCount = 60;
var timer;
var timerCount;
var possibleAnswers = ["What is an example of a variable","array", "modulus", "object", "function", "string", "boolean"];

function startGame() {
  timerCount = 60;
  startButton.disabled = true;
  startTimer()
}


function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount === 0){
      clearInterval(timer);
    }
  }, 1000);
}

startButton.addEventListener("click", startGame);
init();
