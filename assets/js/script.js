var startbtn = document.querySelector("#startbtn");
var myArray = [
  {
    question: "What is the first thing you do when you receive the ball?",
    choiceA: "Hit the ball",
    choiceB: "Bump",
    choiceC: "Look at the ball",
    choiceD: "nothing",
    correctAnswer: "Bump",
  },
  {
    question: "What do the refs say when the ball hits the line?",
    choiceA: "In",
    choiceB: "Out",
    choiceC: "Double",
    choiceD: "None of the above",
    correctAnswer: "In",
  },
  {
    question:
      "How many people are required to be on an indoor volleyball court?",
    choiceA: "2",
    choiceB: "4",
    choiceC: "6",
    choiceD: "10",
    correctAnswer: "6",
  },
  {
    question: "What is one way to win a point?",
    choiceA: "Hit the ball over and it touch on the opposite side",
    choiceB: "Bump it and it goes over and hits outside the line",
    choiceC: "Touch it and it hits the antenna",
    choiceD: "None of the above",
    correctAnswer: "Hit the ball over and it touch on the opposite side",
  },
  {
    question:
      "What happens when the team you're on hits the ball more than 3 times?",
    choiceA: "Nothing",
    choiceB: "The other team gets a point",
    choiceC: "You get a point",
    choiceD: "Choice A and C",
    correctAnswer: "The other team gets a point",
  },
];
function startquiz() {
  console.log("Hello");
  questions.textContent = myArray[0].question;
  // for (let index = 0; index < 4; index++) {
  //   var choice = document.createElement("button");
  //   choice.textContent = index;
  //   choices.appendChild(choice);
  // }
}
var questions = document.getElementById("question-text");
var choices = document.getElementById("choices");
startbtn.addEventListener("click", startquiz);
var count = 60; = setInterval.count
// To do Items: create a timer option and seperate (function). Need variable to track first question
// Function to write and retreive from local storage. And complete loop inside of startquiz
// grab the current question
// console.log(myArray[0].choiceA); example of how to access each question
function ClockTick() {
  setInterval(clockTick, 60);
}
