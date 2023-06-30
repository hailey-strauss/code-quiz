var startbtn = document.querySelector("#startbtn");
var timeElement = document.querySelector("#Timer");
var questions = document.getElementById("question-text");
var choices = document.getElementById("choices");
var interval;
var myArray = [
  {
    answers: ["Hit the ball", "Bump", "Look at the ball", "nothing"],
    question: "What is the first thing you do when you receive the ball?",
    correctAnswer: "Bump",
  },
  {
    answers: ["In", "Out", "Double", "None of the above"],
    question: "What do the refs say when the ball hits the line?",
    correctAnswer: "In",
  },
  {
    answers: ["2", "4", "6", "10"],
    question:
      "How many people are required to be on an indoor volleyball court?",
    correctAnswer: "6",
  },
  {
    answers: [
      "Hit the ball over and it touch on the opposite side",
      "Bump it and it goes over and hits outside the line",
      "Touch it and it hits the antenna",
      "None of the above",
    ],
    question: "What is one way to win a point?",
    correctAnswer: "Hit the ball over and it touch on the opposite side",
  },
  {
    answers: [
      "Nothing",
      "The other team gets a point",
      "You get a point",
      "Choice A and C",
    ],
    question:
      "What happens when the team you're on hits the ball more than 3 times?",
    correctAnswer: "The other team gets a point",
  },
];
function startquiz() {
  ClockTick();
  displayQuestion();
  console.log("Hello");
  // questions.textContent = myArray[0].question;
  // for (let index = 0; index < 4; index++) {
  //   var choice = document.createElement("button");
  //   choice.textContent = index;
  //   choices.appendChild(choice);
  // }
}
var questionIndex = 0;
function displayQuestion() {
  var currentQuestion = myArray[questionIndex];
  questions.textContent = currentQuestion.question;
  console.log(currentQuestion);
  var options = currentQuestion.answers;
  for (var index = 0; index < options.length; index++) {
    var answerbtn = document.createElement("button");
    answerbtn.textContent = options[index];
    choices.append(answerbtn);
  }
}
var count = 60;
setInterval.count;
// To do Items: create a timer option and seperate (function). Need variable to track first question
// Function to write and retreive from local storage. And complete loop inside of startquiz
// grab the current question
// console.log(myArray[0].choiceA); example of how to access each question
function ClockTick() {
  interval = setInterval(function () {
    count--;
    timeElement.textContent = count;
    if (count <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}
startbtn.addEventListener("click", startquiz);
// Make an array for the answers
