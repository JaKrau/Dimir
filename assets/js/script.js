var timerHolder = document.getElementById('timerHolder');
timerHolder.style.fontSize = 'xx-large';
// Our timer has a text size

function renderTimerToBrowser() {
    timerHolder.textContent = "Time left: ";
}


var h1 = document.getElementById('h1');
h1.textContent = "Coding Quiz";
h1.style.fontSize = '75px';


var words = document.getElementById('words');
words.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.";
words.style.fontSize = 'xx-large';
words.style.margin = '5px';


var startButton = document.getElementById('btn');
btn.textContent = "Start";


/**/


renderTimerToBrowser();