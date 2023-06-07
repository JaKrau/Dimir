var scoreHolder = document.getElementById('scoreHolder');
var timerHolder = document.getElementById('timerHolder');
var h1 = document.getElementById('h1');
var words = document.getElementById('words');
var startButton = document.getElementById('btn');
var questionSection = document.getElementById('questions');

var timer = 90;

scoreHolder.style.fontSize = 'xx-large';
timerHolder.style.fontSize = 'xx-large';
h1.style.fontSize = '75px';
words.style.fontSize = 'xx-large';
words.style.margin = '5px';
//questionSection.style.visibility = 'hidden';

h1.textContent = "Coding Quiz";
words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.";
btn.textContent = "Start";


function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: " + timer;
}

startButton.addEventListener("click", function() {
    var interval = setInterval(function() {
        
        timer --;
         
    if (timer <= 0) {
        clearInterval(interval);
    }

    renderTimerToBrowser();

    }, 1000);
});





renderTimerToBrowser();