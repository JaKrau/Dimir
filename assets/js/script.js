// Connecting all of the html elements we need to JS.
var scoreHolder = document.getElementById('scoreHolder');
var timerHolder = document.getElementById('timerHolder');
var h1 = document.getElementById('h1');
var words = document.getElementById('words');
var startButton = document.getElementById('btn');
var questionSection = document.getElementById('questionSection');
var trueButton = questionSection.children[0];
var falseButton = questionSection.children[1];
var resultDisplay = document.getElementById('resultDisplay');
var viewHighScores = document.getElementById('viewHighScores');

//Questions! (we all have'em) In a handy array.
questions = [
"You cannot apply css styles via JavaScript.", 
"There are two methods to comment your code in JS.", 
".getElementById( ) can be used to grab HTML elements by class.", 
".push will push an item to the beginning of the referenced array.", 
"Elon Musk invented JavaScript.", 
"! is the logical not operator.", 
".addEventListener can only add one event per element.", 
"\'false\' !== false", 
"Your <script> with src=/script.js should be at the very top of your html file", "setInterval() only tracks miliseconds", 
"This quiz has 10 questions"];
console.log(questions);

// Just some lovely global variables.
var timer = 90;
let score = 0;
let i = 0;
let gameState = false;


// Style settings! (such elegant)
scoreHolder.style.fontSize = 'xx-large';
timerHolder.style.fontSize = 'xx-large';
h1.style.fontSize = '75px';
words.style.fontSize = 'xx-large';
words.style.margin = '5px';
questionSection.style.display = 'none';
resultDisplay.style.fontSize = '40px';
resultDisplay.style.color = "white";
viewHighScores.style.display = 'none';

// Content! (much content)
h1.textContent = "Coding Quiz";
words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.";
btn.textContent = "Start";
trueButton.textContent = "True"
falseButton.textContent = "False"

// The Timer! (on display)
function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}
// Behold, the button! Birthing our countdown.
startButton.addEventListener("click", function() {
    startButton.style.display = 'none';
    questionSection.style.display = 'block';
    gameState = true;
    console.log(words);
    words.textContent = questions[0];
    console.log(words);
    console.log(questions[0]);
    quizGo();
    
    var interval = setInterval(function() {
    timer --;  
    if (timer <= 0) {
        clearInterval(interval);
        questionSection.style.display = 'none';
        viewHighScores.style.display = 'block';
        resultDisplay.style.display = 'none';
        !gameState
    }
    renderTimerToBrowser();
    }, 1000);
});

//Our answer-button functions! 
function quizGo() { 
    if (i < questions.length) {
        console.log(i);
        console.log(questions[i]);
        console.log(words);
        function qTB1() {
            trueButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "The .style property allows you to create css styling within JavaScript.";
                    timer -= 10;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB2() {
            trueButton.addEventListener("click", function() {
                    resultDisplay.textContent = "Correct!";
                    score ++;
                    console.log(i);
                    trueButton.removeEventListener;
                })}; 
        function qTB3() {
            trueButton.addEventListener("click", function() { 
                    resultDisplay.textContent = ".getElementById() can only reach HTML elements with an id";
                    timer -= 10;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB4() {
            trueButton.addEventListener("click", function() {
                    resultDisplay.textContent = ".push will push to the end of the array."
                    timer -= 10;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB5() {
            trueButton.addEventListener("click", function() {
                    resultDisplay.textContent = "JavaScript was designed by Brendan Eich.";
                    timer -= 10;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB6() {
            trueButton.addEventListener("click", function() {
                    resultDisplay.textContent = "Correct!";
                    score ++;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB7() {
            trueButton.addEventListener("click", function() {
                    resultDisplay.textContent = ".addEventListener can add multiple events per element."
                    timer -= 10;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB8() {
            trueButton.addEventListener("click", function() {
                    resultDisplay.textContent = "Correct!";
                    score ++;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB9() {
            trueButton.addEventListener("click", function() {
                    resultDisplay.textContent = "The <script> should be at the bottom of your page unless deferred."
                    timer -= 10;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB10() {
            trueButton.addEventListener("click", function() {
                    resultDisplay.textContent = "Correct!";
                    score ++;
                    console.log(i);
                    trueButton.removeEventListener;
                })};
        function qTB11() {
            trueButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "This is the 11th question."
                    timer -= 10;
                    console.log(i);
                    trueButton.removeEventListener;
                    !gameState;
                })};
        function qFB1() {
            falseButton.addEventListener("click", function() {
                    console.log(words);
                    resultDisplay.textContent = "Correct!"
                    score ++;
                    console.log(score);
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB2() {
            falseButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "// or /* */ can be used to comment your code.";
                    timer -= 10;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB3() {
            falseButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "Correct!";
                    score ++;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB4() {
            falseButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "Correct!";
                    score ++;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB5() {
            falseButton.addEventListener("click", function() {
                    resultDisplay.textContent = "Correct!";
                    score ++;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB6() {
            falseButton.addEventListener("click", function() {
                    resultDisplay.textContent = "The correct answer is !false.";
                    timer -= 10;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB7() {
            falseButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "Correct!";
                    score ++;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB8() {
            falseButton.addEventListener("click", function() {
                    resultDisplay.textContent = "The string \'false\' is not === to the boolean false.";
                    timer -= 10;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB9() {
            falseButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "Correct!"
                    score ++;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB10() {
            falseButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "setInterval is set with miliseconds.";
                    timer -= 10;
                    console.log(i);
                    falseButton.removeEventListener;
                })};
        function qFB11() {
            falseButton.addEventListener("click", function() { 
                    resultDisplay.textContent = "Correct!"
                    score ++;
                    console.log(i);
                    falseButton.removeEventListener;
                    !gameState;
            })}
        for (i=0; i<questions.length;) {
                if (i=0) {
                    words.textContent = questions[0];
                    qTB1();
                    qFB1();
                }
                if (i=1) {
                    words.textContent = questions[1];
                    qTB2();
                    qFB2();
                }
                if (i=3) {
                    words.textContent = questions[2];
                    qTB3();
                    qFB3();
                }
                if (i=4) {
                    words.textContent = questions[3];
                    qTB4();
                    qFB4();
                }
                if (i=5) { 
                    words.textContent = questions[4];
                    qTB5();
                    qFB5();
                }
                if (i=6) {
                    words.textContent = questions[5];
                    qTB6();
                    qFB6();
                }
                if (i=7) {
                    words.textContent = questions[6];
                    qTB7();
                    qFB7();
                }
                if (i=8) {
                    words.textContent = questions[7];
                    qTB8();
                    qFB8();
                }
                if (i=9) {
                    words.textContent = questions[8];
                    qTB9();
                    qFB9();
                }
                if (i=10) {
                    words.textContent = questions[9];
                    qTB10();
                    qFB10();
                }
                if (i=11) {
                    words.textContent = questions[10];
                    qTB11();
                    qFB11();
                }
            }
        }
    } 


function indexUppies() {
        i++;
        console.log(i);
    }
//var trueButtonIndex = [qTB1(), qTB2(), qTB3(), qTB4(), qTB5(), qTB6(), qTB7(), qTB8(), qTB9(), qTB10(), qTB11()];
//var falseButtonIndex = [qFB1(), qFB2(), qFB3(), qFB4(), qFB5(), qFB6(), qFB7(), qFB8(), qFB9(), qFB10(), qFB11()];

/*
function firstQuestion () {
words.textContent = questions[0];
words.style.display = 'block'
    
}
*/

renderTimerToBrowser();
