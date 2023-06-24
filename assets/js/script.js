// Connecting our html elements to JS.
let navItems = document.getElementById('navItems');
let timerHolder = document.getElementById('timerHolder');
let title = document.getElementById('title');
let words = document.getElementById('words');
let startButton = document.getElementById('startButton');
let questionSection = document.getElementById('questionSection');
let trueButton = document.getElementById('trueButton');
let falseButton = document.getElementById('falseButton');
let resultDisplay = document.getElementById('resultDisplay');
let finalForm = document.getElementById('finalForm');
let initials = document.getElementById('initials');
let scoreView = document.getElementById('scoreView');
let goToHighScores = document.getElementById('goToHighScores');
let quizReturn = document.getElementById('quizReturn');
let scoreBoardInstructions = document.getElementById('scoreBoardInstructions');
let cleanSlateButton = document.getElementById('cleanSlateButton');

// Question/Answer array of objects
let questions = [
    { answer: false, text: "You cannot apply css styles via JavaScript." },
    { answer: true, text: "There are two methods to comment your code in JS." },
    { answer: false, text: ".getElementById( ) can be used to grab HTML elements by class." },
    { answer: false, text: ".push will push an item to the beginning of the referenced array." },
    { answer: false, text: "Elon Musk invented JavaScript." },
    { answer: true, text: "! is the logical not operator." },
    { answer: false, text: ".addEventListener can only add one event per element." },
    { answer: true, text: `'false' !== false` },
    { answer: false, text: "Your <script> with src=/script.js should be at the very top of your html file" },
    { answer: true, text: "setInterval() only tracks miliseconds" },
    { answer: false, text: "This quiz has 10 questions" },
];

/* 
Global variables tracked during the quiz. 
No value changes occur until the startButton event.
*/
let timer = 90;
let score = 0;
let questionIndex = 0;



/* 
Style settings, done in JS because enough of these values needed 
to be dynamic that I just went ahead and set almost everything this way.
*/
navItems.style.fontSize = 'xx-large';
timerHolder.style.fontSize = 'xx-large';
title.style.fontSize = '75px';
words.style.fontSize = 'xx-large';
words.style.margin = '5px';
questionSection.style.visibility = 'hidden';
resultDisplay.style.fontSize = '40px';
resultDisplay.style.color = "white";
resultDisplay.style.visibility = 'hidden';
navItems.style.visibility = 'visible';
scoreView.style.visibility = 'hidden';
quizReturn.style.visibility = 'hidden';
finalForm.style.visibility = 'hidden';
startButton.style.visibility = 'relative';
cleanSlateButton.style.visibility = 'hidden';
scoreBoardInstructions.style.visibility = 'hidden';
scoreBoardInstructions.style.fontSize = 'xx-large';
words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds. Your final score will be a calculation of correct answers and time remaining.";
startButton.textContent = "Start";
trueButton.textContent = "True";
falseButton.textContent = "False";


// Function to display the player's remaining time.
function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}

// Start button event listener. Display settings and questionIndex are set/reset here for the quiz.
startButton.addEventListener("click", function() {
    startButton.style.visibility = 'hidden';
    questionSection.style.visibility = 'visible';
    resultDisplay.style.visibility = 'visible';
    timerHolder.style.visibility = 'visible';
    goToHighScores.style.visibility = 'visible';
    questionIndex = 0;
    words.textContent = questions[questionIndex];
    setQuestionSection();
// timer countdown, triggering the highScoreSectionDisplay function if the timer reaches 0 before all questions have been answered.
    let interval = setInterval(function() {
        timer--;  
        if (timer <= 0) {
            clearInterval(interval);
            timer = 0;
            highScoreSectionDisplay();
        }
        renderTimerToBrowser();
    }, 1000);
});

// True button - triggers answerQuestion()
trueButton.addEventListener("click", function() {
    answerQuestion(true);
});

// False button - triggers answerQuestion()
falseButton.addEventListener("click", function() {
    answerQuestion(false);   
});

// This function tracks the questions/answers and updates the score or decrements the time remaining based on user selection.
// This function also triggers the highScoreSectionDisplay if the user is out of questions to answer.
function answerQuestion(answer) {
    let question = questions[questionIndex];
    if (question.answer === answer) {
        score++;
        resultDisplay.textContent = "Correct!";
    } else {
        timer -= 10;
        resultDisplay.textContent = "Incorrect.";
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        highScoreSectionDisplay();        
    } else {
        setQuestionSection();
    }
  
}

// This function displays the current question to the user.
function setQuestionSection() {
    let question = questions[questionIndex];
    words.textContent = question.text
}

// This is the end state for our quiz, almost entirely comprised of css settings getting updated. 
// The score is displayed to the user at this point.
function highScoreSectionDisplay() {
    words.style.visibility = 'hidden';
    timerHolder.style.visibility = 'hidden';
    goToHighScores.style.visibility = 'hidden';
    questionSection.style.visibility = 'hidden';
    scoreBoardInstructions.style.visibility = 'visible';
    quizReturn.style.visibility = 'visible';
    scoreView.style.visibility = 'visible';
    finalForm.style.visibility = 'visible';
    resultDisplay.style.color = 'black';
    resultDisplay.innerHTML = "Finale Score: " + score;
    cleanSlateButton.style.visibility = 'visible';
    
}

// Container for user initials/score.
class scoreSave{
    constructor(initials, score){
        this.initials = initials;
        this.score = score;
    }
}

// Adding an event listener to our HTML form. 
// Adds data to scoreSave.
// Calls submitScore() and printHighScores().
finalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputScore = new scoreSave(initials.value, score);
    submitScore(inputScore);
    printHighScores();
});

// Function for holding user scores.
function submitScore (newScore) {
    let oldScores = getOldScores();
    let revisedScores = [];
    let index = 0;
    let scoreInserted = false;
    if (oldScores == null) {
        revisedScores.push(newScore);
    } else {
        while (index < oldScores.length) {
            if(newScore.score > oldScores[index].score) {
                revisedScores.push(newScore);
                scoreInserted = true;
                index++
                break;
            } else {
                revisedScores.push(oldScores[index]);
                index++;
            }
        }
        while (index < oldScores.length + 1) {
            if (scoreInserted) {
                revisedScores.push(oldScores[index - 1]);

                index++;
            } else {
                revisedScores.push(newScore);
                scoreInserted = true;
                index++;
            }
        }
    }
    setNewScores(revisedScores);
}

// Parsing old scores from local storage.
function getOldScores() {
    let oldScores = JSON.parse(localStorage.getItem("highScores"));
    if (oldScores == null) {
        return;
    } else {
        localStorage.removeItem("highScores");
    }
    return oldScores;
}

// Placing user score in local storage.
function setNewScores(newScores) {
    localStorage.setItem("highScores", JSON.stringify(newScores));
}

// Clears local storage.
function cleanSlate() {
    localStorage.removeItem("highScores");
    printHighScores();
}

// Creates the HTML elements to display user scores.
function printHighScores() {
    scoreView.innerHTML = "";
    let currentScores = getOldScores();
    if (currentScores == null) {
        return;
    }
    setNewScores(currentScores);
    for (record of currentScores) {
        let newLine = document.createElement("p");
        newLine.innerHTML = record.initials + ": " + record.score;
        scoreView.appendChild(newLine);
    }
}

// A function to reset/restart the quiz.
// Our global variables are returned to their initial value.
// CSS styling gets reset with this function.
function returnToQuiz() {
    questionIndex = 0;
    timer = 90;
    score = 0;
    initials.value = '';
    resultDisplay.textContent = '';
    navItems.style.visibility = 'visible';
    scoreView.style.visibility = 'hidden';
    quizReturn.style.visibility = 'hidden';
    finalForm.style.visibility = 'hidden';
    title.style.visibility = 'visible';
    words.style.visibility = 'visible';
    startButton.style.visibility = 'visible';
    startButton.style.position = 'relative';
    cleanSlateButton.style.visibility = 'hidden';
    scoreBoardInstructions.style.visibility = 'hidden';
    scoreBoardInstructions.style.fontSize = 'xx-large';
    words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds. Your final score will be a calculation of correct answers and time remaining.";
    startButton.textContent = "Start";
    trueButton.textContent = "True";
    falseButton.textContent = "False";
}

// A call for our timer.
renderTimerToBrowser();
