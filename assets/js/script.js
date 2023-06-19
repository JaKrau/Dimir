// Connecting all of the html elements we need to JS.
let scoreHolder = document.getElementById('scoreHolder');
let timerHolder = document.getElementById('timerHolder');
let title = document.getElementById('title');
let words = document.getElementById('words');
let startButton = document.getElementById('startButton');
let questionSection = document.getElementById('questionSection');
let trueButton = document.getElementById('trueButton');
let falseButton = document.getElementById('falseButton');
let resultDisplay = document.getElementById('resultDisplay');
let viewHighScores = document.getElementById('viewHighScores');

//Questions! (we all have'em) In a handy array.
let questions = [
    { answer: true, text: "You cannot apply css styles via JavaScript." },
    { answer: true, text: "There are two methods to comment your code in JS." },
    { answer: true, text: ".getElementById( ) can be used to grab HTML elements by class." },
    { answer: true, text: ".push will push an item to the beginning of the referenced array." },
    { answer: true, text: "Elon Musk invented JavaScript." },
    { answer: true, text: "! is the logical not operator." },
    { answer: true, text: ".addEventListener can only add one event per element." },
    { answer: true, text: `'false' !== false` },
    { answer: true, text: "Your <script> with src=/script.js should be at the very top of your html file" },
    { answer: true, text: "setInterval() only tracks miliseconds" },
    { answer: true, text: "This quiz has 10 questions" },
];
console.log(questions);

// Just some lovely global variables.
let timer = 90;
let score = 0;
let i = 0;
//let gameState = false;


// Style settings! (such elegant)
scoreHolder.style.fontSize = 'xx-large';
timerHolder.style.fontSize = 'xx-large';
title.style.fontSize = '75px';
words.style.fontSize = 'xx-large';
words.style.margin = '5px';
questionSection.style.display = 'none';
resultDisplay.style.fontSize = '40px';
resultDisplay.style.color = "white";
viewHighScores.style.display = 'none';

// Content! (much content)
title.textContent = "Coding Quiz";
words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.";
startButton.textContent = "Start";
trueButton.textContent = "True";
falseButton.textContent = "False";

// The Timer! (on display)
function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}
// Behold, the button! Birthing our countdown.
startButton.addEventListener("click", function() {
    startButton.style.display = 'none';
    questionSection.style.display = 'block';
    //gameState = true;
    console.log(words);
    i = 0;
    words.textContent = questions[i];
    console.log(words);
    console.log(questions[i]);
    setQuestionSection();
    
    let interval = setInterval(function() {
        timer--;  
        if (timer <= 0) {
            clearInterval(interval);
            timer = 0;
            words.style.display = 'none';
            questionSection.style.display = 'none';
            viewHighScores.style.display = 'block';
            resultDisplay.style.display = 'none';
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
    let question = questions[i];
    if (question.answer === answer) {
        score++;
    } else {
        timer -= 10;
    }
    i++;
    if (i === questions.length) {
        questionSection.style.display = 'none';
        viewHighScores.style.display = 'block';     
        words.style.display = 'none';
    } else {
        setQuestionSection();
    }
  
}

function setQuestionSection() {
    let question = questions[i];
    words.textContent = question.text
}



//Our answer-button functions! 

//var trueButtonIndex = [qTB1(), qTB2(), qTB3(), qTB4(), qTB5(), qTB6(), qTB7(), qTB8(), qTB9(), qTB10(), qTB11()];
//var falseButtonIndex = [qFB1(), qFB2(), qFB3(), qFB4(), qFB5(), qFB6(), qFB7(), qFB8(), qFB9(), qFB10(), qFB11()];

/*
function firstQuestion () {
words.textContent = questions[0];
words.style.display = 'block'
    
}
*/

renderTimerToBrowser();
