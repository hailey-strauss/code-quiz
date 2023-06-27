var startbtn = document.querySelector("#startbtn");
function startquiz() {
  console.log("Hello");
  questions.textContent = "you have made it";
  for (let index = 0; index < 4; index++) {
    var choice = document.createElement("button");
    choice.textContent = index;
    choices.appendChild(choice);
  }
}
var questions = document.getElementById("question-text");
var choices = document.getElementById("choices");
startbtn.addEventListener("click", startquiz);
