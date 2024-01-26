var questionsData = {
    questionChoices1: ["strings", "boolean", "alerts", "numbers"],
    questionChoices2: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    questionChoices3: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    questionChoices4: ["commas", "curly brackets", "quotes", "parenthesis"],
    questionChoices5: ["JavaScript", "terminal/bash", "for loop", "console.log"],
    answers: ["alerts", "parenthesis", "all of the above", "quotes", "console.log"],
    questions: ["Commonly used data types DO Not Include:", 
    "The condition in an if / else statement is enclosed with ______.", 
    "Arrays in javascript is used to store ______.", 
    "String values must be enclosed within ______ when being assigned to variables.", 
    "A very useful tool used during development and debugging for printing content to the debugger is:"]
};

let wholeDiv = document.querySelector(".wholeDiv");
let upperDiv = document.querySelector(".upperDiv");
let highScoreButton = document.querySelector("#highScoreButton");
let quizPrompt = document.querySelector(".quizPrompt")
let startingPromptDiv = document.querySelector(".startingPromptDiv")
let h1Prompt = document.querySelector(".h1Prompt");
let pPrompt = document.querySelector(".pPrompt");
let highScorePTag = document.querySelector(".highScorePTag");
let initialsDiv = document.querySelector(".initialsDiv");
let intitalsBtn = document.querySelector(".intitalsBtn");
let userName = document.querySelector(".userName");

let resetBtn = document.querySelector(".resetBtn");
let startButton = document.getElementsByClassName('startButton')[0];
let answerChoices = document.querySelector(".answerChoices");
let answerSubmitted = document.querySelector(".answerSubmitted");
let checkAnswer = document.querySelector(".checkAnswer");

let currentAnswer = questionsData.answers[0];
let currentQuestion = 1;
let HighScore = 0;
let timerInterval;

let updateTime = document.querySelector('.timer');
let timerRunning = false; // Declare outside the function
let timer = 75; // Declare outside the function

function beginTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(function () {
            timer--;
            updateTime.textContent = "Time: " + timer;

            if (timer <= 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // results();
                stopTimer()
                // console.log("Ive passed this")
            }

        }, 1000);

        timerRunning = true;
    }
}

function stopTimer() {
    HighScore = timer;
    // clearInterval(timerInterval);
    timerRunning = false;
    HighScore = timer;
    results();
}

function handleButtonClick(event) {
    var clickedButton = event.target;
    
    if(clickedButton.textContent !== currentAnswer)
    {
        if(timer < 10)
        {
            timer = 0;
        }
        else
        {
            timer-=10;
        }
        
        if(answerSubmitted.classList.contains('hidden'))
        {
            answerSubmitted.classList.remove('hidden');
        }
        checkAnswer.textContent = "Wrong!";
    }
    else
    {
        if(answerSubmitted.classList.contains('hidden'))
        {
            answerSubmitted.classList.remove('hidden');
        }
        checkAnswer.textContent = "Correct!";
    }
    
    if(currentQuestion === 1)
    Question2();
    else if(currentQuestion === 2)
    Question3();
    else if(currentQuestion === 3)
    Question4();
    else if(currentQuestion === 4)
    Question5();
    else
    {
        stopTimer();
    }
    
    // results();
  }

function buildLayout(){
    
    for(let i = 0; i < questionsData.questionChoices1.length; i++)
    {
        let buttons = document.createElement('button');
        buttons.addEventListener('click', handleButtonClick);
        answerChoices.append(buttons);
        console.log("I hit this " + i);
    }
}

function Question1(){
    currentAnswer = questionsData.answers[0];
    h1Prompt.textContent = questionsData.questions[0];
    console.log("I made it past prompting the question #1");
    for(let j = 0; j < questionsData.questionChoices1.length; j++)
    {
        answerChoices.children[j].textContent = questionsData.questionChoices1[j];
        // console.log("I made it past putting up the answer choices " + j);
    }
}

function Question2(){
    currentAnswer = questionsData.answers[1];
    h1Prompt.textContent = questionsData.questions[1];
    console.log("I made it past prompting the question #2");
    for(let j = 0; j < questionsData.questionChoices2.length; j++)
    {
        answerChoices.children[j].textContent = questionsData.questionChoices2[j];
        // console.log("I made it past putting up the answer choices " + j);
    }
    currentQuestion++;
}

function Question3(){
    currentAnswer = questionsData.answers[2];
    h1Prompt.textContent = questionsData.questions[2];
    console.log("I made it past prompting the question #3");
    for(let j = 0; j < questionsData.questionChoices3.length; j++)
    {
        answerChoices.children[j].textContent = questionsData.questionChoices3[j];
        // console.log("I made it past putting up the answer choices " + j);
    }
    currentQuestion++;
}

function Question4(){
    currentAnswer = questionsData.answers[3];
    h1Prompt.textContent = questionsData.questions[3];
    console.log("I made it past prompting the question #4");
    for(let j = 0; j < questionsData.questionChoices4.length; j++)
    {
        answerChoices.children[j].textContent = questionsData.questionChoices4[j];
        // console.log("I made it past putting up the answer choices " + j);
    }
    currentQuestion++;
}

function Question5(){
    currentAnswer = questionsData.answers[4];
    h1Prompt.textContent = questionsData.questions[4];
    console.log("I made it past prompting the question #5");
    for(let j = 0; j < questionsData.questionChoices5.length; j++)
    {
        answerChoices.children[j].textContent = questionsData.questionChoices5[j];
        // console.log("I made it past putting up the answer choices " + j);
    }
    currentQuestion++;
}

function results(){
    // prepare to save to localstorage
    h1Prompt.textContent = 'All Done'
    answerChoices.classList.add('hidden');
    highScorePTag.classList.remove('hidden');
    initialsDiv.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
    highScorePTag.textContent = 'Your final score is ' + HighScore + '.';
    console.log("Results page");
}

startButton.addEventListener('click', function() {
    console.log("Im here");
    startButton.classList.add('hidden'); // hide start button
    pPrompt.classList.add('hidden'); // p tag
    answerSubmitted.classList.add('hidden');
    // console.log("I made it past setAttribute");
    beginTimer(); // start timer
    // console.log("I made it past timer");
    buildLayout(); // makes the buttons for the answer choices
    // console.log("I made it past making the buttons");
    Question1(); // display questions
    console.log("I made it past displaying the questions");
})

function reset() {
    wholeDiv.classList.remove('hidden');
    upperDiv.classList.remove('hidden');
    quizPrompt.classList.remove('hidden');
    startingPromptDiv.classList.remove('hidden');
    h1Prompt.textContent = "Coding Quiz Challenge";
    h1Prompt.classList.remove('hidden');
    pPrompt.classList.remove('hidden');
    startButton.classList.remove('hidden');
    while(answerChoices.firstChild)
    {
        answerChoices.removeChild(answerChoices.firstChild);
    }
    answerChoices.classList.add('hidden');
    answerSubmitted.classList.add('hidden');
    checkAnswer.classList.add('hidden');
    initialsDiv.classList.add('hidden');
    checkAnswer.classList.add('hidden');
    highScorePTag.classList.add('hidden');
    currentAnswer = questionsData.answers[0];
    currentQuestion = 1
    timer = 75;
}

intitalsBtn.addEventListener('click', function() {
    let saveInitials = userName.value;
    console.log(saveInitials);

    let data = localStorage.getItem('highScore');
    let parsedData;

    if (data) {
        parsedData = JSON.parse(data);
        let position = -1;
        for (let i = 0; i < parsedData.score.length; i++) {
            if (HighScore > parsedData.score[i]) {
                position = i;
                break;
            }
        }
        if (position !== -1) {
            parsedData.name.splice(position, 0, saveInitials);
            parsedData.score.splice(position, 0, HighScore);
        } else {
            parsedData.name.push(saveInitials);
            parsedData.score.push(HighScore);
        }
    } else {
        parsedData = {
            name: [saveInitials],
            score: [HighScore]
        };
    }

    let setKey = JSON.stringify(parsedData);
    localStorage.setItem('highScore', setKey);

    console.log(parsedData);
    console.log(setKey);

    window.location = './highScores.html';
});

// backBtn.addEventListener('click', function() {
//     window.location = './index.html';
// })

// startButton.addEventListener('click', function() {
    
// })

// let myArray = [10, 20, 30, 50];
// let newPosition = 2; // The position where you want to insert the new element
// let newElement = 4; // The element you want to insert

// // Use splice() to insert the new element at the specified position
// myArray.splice(newPosition, 0, newElement);

// console.log(myArray); // Output: [1, 2, 3, 4, 5]