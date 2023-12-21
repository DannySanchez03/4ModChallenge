let questions = ["Commonly used data types DO Not Include:", 
"The condition in an if / else statement is enclosed with ______.", 
"Arrays in javascript is used to store ______.", 
"String values must be enclosed within ______ when being assigned to variables.", 
"A very useful tool used during development and debugging for printing content to the debugger is:"];
let answer = ["alerts", "parenthesis", "all of the above", "quotes", "console.log"];
let questionChoices1 = ["strings", "boolean", "alerts", "numbers"];
let questionChoices2 = ["quotes", "curly brackets", "parenthesis", "square brackets"];
let questionChoices3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
let questionChoices4 = ["commas", "curly brackets", "quotes", "parenthesis"];
let questionChoices5 = ["JavaScript", "terminal/bash", "for loosp", "console.log"];

let h1Prompt = document.querySelector(".h1Prompt")
let startButton = document.getElementsByClassName('startButton')[0];
let pPrompt = document.querySelector(".pPrompt")
let answerChoices = document.querySelector(".answerChoices");

function beginTimer()
{
    var timer = 75;
    let updateTime = document.querySelector('.timer');
    let timerInterval = setInterval(function() {
        timer--;
        updateTime.textContent = "Time: " + timer;
    
        if(timer <= 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          endQuiz();
        }
    }, 1000);
}

function buildLayout(){
    
    for(let i = 0; i < questionChoices1.length; i++)
    {
        let buttons = document.createElement('button');
        answerChoices.append(buttons);
        console.log("I hit this " + i);
    }
}

function askQuestion(){
    for(let i = 0; i < questions.length; i++)
    {
        h1Prompt.textContent = questions[i];
        console.log("I made it past prompting the question");
        for(let j = 0; j < questionChoices1.length; j++)
        {
            answerChoices.children[j].textContent = questionChoices1[j];
            console.log("I made it past putting up the answer choices " + j);
        }
    }
}

function endQuiz(){
    var end;
    console.log("Quiz ended");
}


startButton.addEventListener('click', function() {
    console.log("Im here");
    startButton.classList.add('hidden'); // hide start button
    pPrompt.classList.add('hidden'); // p tag
    console.log("I made it past setAttribute");
    beginTimer(); // start timer
    console.log("I made it past timer");
    buildLayout(); // makes the buttons for the answer choices
    console.log("I made it past making the buttons");
    askQuestion(); // display questions
    console.log("I made it past displaying the questions");
})
// console.log(startButton);