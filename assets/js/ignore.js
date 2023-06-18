// Connecting all html elements we need to JS so we can touch 'em
var scoreHolder = document.getElementById('scoreHolder');
var timerHolder = document.getElementById('timerHolder');
var h1 = document.getElementById('h1');
var words = document.getElementById('words');
var startButton = document.getElementById('btn');
var questionSection = document.getElementById('questionSection');
var qButton1 = questionSection.children[0];
var qButton2 = questionSection.children[1];
var qButton3 = questionSection.children[2];
var qButton4 = questionSection.children[3];
var qButtons = [qButton1, qButton2, qButton3, qButton4];
var correctAnswer = false;
var resultDisplay = document.getElementById('resultDisplay');
var answerCheatSheet = ["<script>", "myFunction()"]

// Countdown to Extinction! (good album)
var timer = 90;
var score;

// Style settings! (not elegant but I can see it without getting a headache)
scoreHolder.style.fontSize = 'xx-large';
timerHolder.style.fontSize = 'xx-large';
h1.style.fontSize = '75px';
words.style.fontSize = 'xx-large';
words.style.margin = '5px';
questionSection.style.display = 'none';
resultDisplay.style.fontSize = '50px';


// Content! 
h1.textContent = "Coding Quiz";
words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.";
btn.textContent = "Start";

// Behold, the button! Birthing our countdown.
function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}

startButton.addEventListener("click", function() {
    startButton.style.display = 'none';
    questionSection.style.display = 'block';
    words.style.display = 'none';
    
    var interval = setInterval(function() {


        timer --;
         
    if (timer <= 0) {
        clearInterval(interval);
    }

    renderTimerToBrowser();

    }, 1000);
});

function firstQuestion () {
    var question1Contents = ["<link>", "<js>", "<script>", "<coding>"];


    for (i=0;i<qButtons.length;i++) {
    console.log(qButtons[i]);
    qButtons[i].textContent = question1Contents[i];
    
}

function checkCorrect(userPick) {
    if (answerCheatSheet.indexOf(userPick) || userPick) {
        console.log("HELL YEAH BOI")
    } else {
        console.log("OH FUCK");
    }
    }
    checkCorrect();
}

//checkCorrect();
renderTimerToBrowser();
//Early attempt at coding question buttons, ran into quite a few issues.
/*function questionGeneration1() {
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
    h1.textContent = "How do you call myFunction()?";
    qButton1.textContent = "call.myFunction();";
    qButton2.textContent = "executeOrder(66)";
    qButton3.textContent = "#myFunction;";
    qButton4.textContent = "myFunction();";

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
*/

