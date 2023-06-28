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
    question: "What makes you most happy?",
    choiceA: "music",
    choiceB: "building",
    choiceC: "structure",
    choiceD: "iPhone",
    correctAnswer: "music",
  },
  {
    question: "What makes you most happy?",
    choiceA: "music",
    choiceB: "building",
    choiceC: "structure",
    choiceD: "iPhone",
    correctAnswer: "music",
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
// To do Items: create a timer option and seperate (function). Need variable to track first question
// Function to write and retreive from local storage. And complete loop inside of startquiz
// grab the current question
// console.log(myArray[0].choiceA); example of how to access each question
