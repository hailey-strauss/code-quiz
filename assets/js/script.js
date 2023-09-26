var startbtn = document.querySelector("#start-btn");
var timeElement = document.querySelector("#Timer");
var questions = document.getElementById("question-text");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var highscoreScreen = document.getElementById("highscore-screen");
var highscoreList = document.getElementById("highscore-list");
var interval;
// Questions for Quiz and The Answers
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
function startQuiz() {
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
function answerToQuestion(event) {
  console.log(event.target.textContent);
  if (myArray[questionIndex].correctAnswer != event.target.textContent) {
    count -= 10;
  }
  questionIndex++;
  if (questionIndex > myArray.length - 1) {
    console.log("quiz over");
    clearInterval(interval);
    choices.innerHTML = "";
    questions.innerHTML = "";
    saveHighscore();
  } else {
    displayQuestion();
  }
}
var questionIndex = 0;
function displayQuestion() {
  var currentQuestion = myArray[questionIndex];
  questions.textContent = currentQuestion.question;
  console.log(currentQuestion);
  var options = currentQuestion.answers;
  choices.innerHTML = "";
  for (var index = 0; index < options.length; index++) {
    var answerbtn = document.createElement("button");
    answerbtn.textContent = options[index];
    answerbtn.addEventListener("click", answerToQuestion);
    choices.append(answerbtn);
  }
}
var count = 120;
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
function saveHighscore() {
  endScreen.classList.remove("hide");
}
startbtn.addEventListener("click", startQuiz);

function saveHighscore() {
  var userInitials = document.getElementById("user-initials").value;
  var userScore = count; // You can use the remaining time as the user's score

  // Retrieve existing highscores from local storage or initialize an empty array
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Add the new highscore to the array
  highscores.push({ initials: userInitials, score: userScore });

  // Sort the highscores in descending order (highest score first)
  highscores.sort((a, b) => b.score - a.score);

  // Limit the number of highscores to keep (e.g., top 10)
  highscores = highscores.slice(0, 10);

  // Save the updated highscores back to local storage
  localStorage.setItem("highscores", JSON.stringify(highscores));

  // Display the highscores
  displayHighscores();
}

function displayHighscores() {
  // Retrieve highscores from local storage
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Clear the previous highscores
  highscoreList.innerHTML = "";

  // Display each highscore as a list item
  highscores.forEach(function (score, index) {
    var listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
    highscoreList.appendChild(listItem);
  });

  // Show the highscore screen
  highscoreScreen.classList.remove("hide");
}

// Event listeners
document.getElementById("submitbtn").addEventListener("click", saveHighscore);
document
  .getElementById("highscores")
  .addEventListener("click", displayHighscores);
