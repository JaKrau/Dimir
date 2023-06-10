// Connecting all html elements we need to JS so we can touch 'em
var scoreHolder = document.getElementById('scoreHolder');
var timerHolder = document.getElementById('timerHolder');
var h1 = document.getElementById('h1');
var words = document.getElementById('words');
var startButton = document.getElementById('btn');
var questionSection = document.getElementById('questions');

// Countdown to Extinction! (good album)
var timer = 90;

// Style settings! (not elegant but I can see it without getting a headache)
scoreHolder.style.fontSize = 'xx-large';
timerHolder.style.fontSize = 'xx-large';
h1.style.fontSize = '75px';
words.style.fontSize = 'xx-large';
words.style.margin = '5px';
questionSection.style.visibility = 'hidden';

// Content! (text and such in variables we can re-use)
h1.textContent = "Coding Quiz";
words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.";
btn.textContent = "Start";

// Behold, the button! Birthing our countdown.
function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}

startButton.addEventListener("click", function() {
    var interval = setInterval(function() {
        startButton.style.visibility = 'hidden';
        questionSection.style.visibility = 'visible';
        words.textContent = "";
        h1.textContent = "Test Question 1";
        timer --;
         
    if (timer <= 0) {
        clearInterval(interval);
    }

    renderTimerToBrowser();

    }, 1000);
});
