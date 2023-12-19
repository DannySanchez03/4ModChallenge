var questions = ["Commonly used data types DO Not Include:", 
"The condition in an if / else statement is enclosed with ______.", 
"Arrays in javascript is used to store ______.", 
"String values must be enclosed within ______ when being assigned to variables.", 
"A very useful tool used during development and debugging for printing content to the debugger is:"];
var answer = ["alerts", "parenthesis", "all of the above", "quotes", "console.log"];
var questionChoices1 = ["strings", "boolean", "alerts", "numbers"];
var questionChoices2 = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var questionChoices3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var questionChoices4 = ["commas", "curly brackets", "quotes", "parenthesis"];
var questionChoices5 = ["JavaScript", "terminal/bash", "for loosp", "console.log"];

var promptQuestion = document.querySelector(".starting-prompt-h1")
var startButton = document.getElementsByClassName('start-button')[0];
// let startButton = document.querySelector(".start-button").children("button");
function begin()
{
    var timer = 75;
    var updateTime = document.querySelector('.timer');
    var timerInterval = setInterval(function() {
        timer--;
        updateTime.textContent = "Time: " + timer;
    
        if(timer === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          endQuiz();
        }
    }, 1000);
}

function endQuiz(){
    var end;
}

startButton.addEventListener('click', function() {
    console.log("Im here");
    begin();
})
// console.log(startButton);
