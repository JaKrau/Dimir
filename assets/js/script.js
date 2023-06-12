// Connecting all html elements we need to JS so we can touch 'em
var scoreHolder = document.getElementById('scoreHolder');
var timerHolder = document.getElementById('timerHolder');
var h1 = document.getElementById('h1');
var words = document.getElementById('words');
var startButton = document.getElementById('btn');
var questionSection = document.getElementById('questionSection');
var firstQuestion = document.getElementById('question1');
var qButton1 = questionSection.children[0];
var qButton2 = questionSection.children[1];
var qButton3 = questionSection.children[2];
var qButton4 = questionSection.children[3];

// Countdown to Extinction! (good album)
var timer = 90;
var score = 0;

// Style settings! (not elegant but I can see it without getting a headache)
scoreHolder.style.fontSize = 'xx-large';
timerHolder.style.fontSize = 'xx-large';
h1.style.fontSize = '75px';
words.style.fontSize = 'xx-large';
words.style.margin = '5px';
questionSection.style.display = 'none';

// Content! 
h1.textContent = "Coding Quiz";
words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.";
btn.textContent = "Start";

// Behold, the button! Birthing our countdown.
function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}

startButton.addEventListener("click", function() {
    var interval = setInterval(function() {
        startButton.style.display = 'none';
        firstQuestion.style.display = 'block';
        words.textContent = "";

        timer --;
         
    if (timer <= 0) {
        clearInterval(interval);
    }

    renderTimerToBrowser();
    questionGeneration1();

    }, 1000);
});

// Parent 'questions' div needs children with purpose! This seems like a mess of code, but I can't think of how to clean it up efficiently. If anyone reads this and has suggestions, please tell.
function questionGeneration1() {
    h1.textContent = "Which HTML element is used for in-line JavaScript?";
    qButton1.textContent = "<link>";
    qButton2.textContent = "<js>";
    qButton3.textContent = "<script>";
    qButton4.textContent = "<coding>";

    qButton1.addEventListener("click", function() {
        timer = timer -10;
        h1.textContent = '';
        qButton1.textContent = '';
        questionGeneration2();
    });
    qButton2.addEventListener("click", function() {
        timer = timer -10;
        h1.textContent = '';
        qButton2.textContent = '';
        questionGeneration2();
    });
    qButton3.addEventListener("click", function() {
        score = score + 1;
        console.log(score);
        questionGeneration2();
    });
    qButton4.addEventListener("click", function() {
        timer = timer -10;
        h1.textContent = '';
        qButton4.textContent = '';
        questionGeneration2();
    });


} 

function questionGeneration2() {
    h1.textContent = "How do you write comments in JavaScript?";
    qButton1.textContent = "\\";
    qButton2.textContent = "<!-- -->";
    qButton3.textContent = "#";
    qButton4.textContent = "//";

    qButton1.addEventListener("click", function() {
        timer = timer -10;
        h1.textContent = '';
        qButton1.textContent = '';
    });
    qButton2.addEventListener("click", function() {
        timer = timer -10;
        h1.textContent = '';
        qButton2.textContent = '';
    });
    qButton3.addEventListener("click", function() {
        timer = timer -10;
        h1.textContent = '';
        qButton4.textContent = '';
    });
    qButton4.addEventListener("click", function() {
        score = score + 1;
        console.log(score);
    });
    
}

renderTimerToBrowser();

