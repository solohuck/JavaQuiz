// click handler on the answer
//data.answer 
var timerEl = document.querySelector(".mini-question-box");
var startButton = document.querySelector(".start-button");
var questionBox = document.querySelector(".question-box");
var questionText = document.querySelector(".question-text");
var answerA = document.querySelector(".choice-a");
var answerB = document.querySelector(".choice-b");
var answerC = document.querySelector(".choice-c");
var answerD = document.querySelector(".choice-d");
var muti = document.querySelector(".muti-choice");
var score = document.querySelector(".score");
var name = document.querySelector(".initials");
var choices = document.querySelector(".choices");


var timer;
var timerCount = 10;

var questions = [
  {
    question: "What is an example of a variable?",
    choice1: "var box",
    choice2: "0",
    choice3: "a member of a Java class",
    choice4: "'Hello'",
    choiceanswer: 1,
  },
  {
  question: "What number does an array start at?",
  choice1: "var box",
  choice2: "0",
  choice3: "a member of a Java class",
  choice4: "'Hello'",
  answer: 2,
  },
  {
  question: "What is an object?" ,
  choice1: "var box",
  choice2: "0",
  choice3: "a member of a Java class",
  choice4: "'Hello'",
  answer: 3,
  },
  {
  question: "Which example is a string?",
  choice1: "var box",
  choice2: "0",
  choice3: "a member of a Java class",
  choice4: "'Hello'",
  answer: 4,
  }
]

function startGame() {
  questionCounter = 0
  startButton.disabled = true;
  availableQuestions = []
  startTimer()
  getNewQuestion()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

startButton.addEventListener('click', startGame)