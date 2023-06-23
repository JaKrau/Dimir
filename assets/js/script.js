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

//Question/Answer array of objects
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
Global variables tracked during the quiz, 
no value changes until startButton event.
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


// Setting some text content for our HTML elements in JS
// The words variable needed to be dynamic, the rest could honestly be done on the HTML side


// Function to display the player's remaining time.
function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}

// Behold, the button! Birthing our countdown.
startButton.addEventListener("click", function() {
    startButton.style.visibility = 'hidden';
    questionSection.style.visibility = 'visible';
    resultDisplay.style.visibility = 'visible';
    timerHolder.style.visibility = 'visible';
    goToHighScores.style.visibility = 'visible';
    //gameState = true;
    console.log(words);
    questionIndex = 0;
    words.textContent = questions[questionIndex];
    setQuestionSection();
    
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

trueButton.addEventListener("click", function() {
    answerQuestion(true);
});

falseButton.addEventListener("click", function() {
    answerQuestion(false);   
});

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

function setQuestionSection() {
    let question = questions[questionIndex];
    words.textContent = question.text
}

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

class scoreSave{
    constructor(initials, score){
        this.initials = initials;
        this.score = score;
    }
}

finalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputScore = new scoreSave(initials.value, score);
    submitScore(inputScore);
    printHighScores();
});

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

function getOldScores() {
    let oldScores = JSON.parse(localStorage.getItem("highScores"));
    if (oldScores == null) {
        return;
    } else {
        localStorage.removeItem("highScores");
    }
    return oldScores;
}

function setNewScores(newScores) {
    localStorage.setItem("highScores", JSON.stringify(newScores));
}

function cleanSlate() {
    localStorage.removeItem("highScores");
    printHighScores();
}

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

renderTimerToBrowser();
