var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-btn');
var questionTable = document.getElementById('questionTable');
var mainImage = document.getElementById
// Timer that counts down from 75

function begin() {
    questionTable.style.display = 'flex';
    startBtn.style.display = 'none';

  var timeLeft = 60;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds

  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1

    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;

    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft;
      timeLeft--;

    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '0';
      // Use `clearInterval()` to stop the timer

      clearInterval(timeInterval);

    }
    
  }, 1000);
}


function selectAnswer(){

}

startBtn.addEventListener('click', begin);

var Questions = [
    {
      answers: [
        {choice: 'JavaScript', isCorrect: false},
        {choice: 'HTML', isCorrect: false },
        {choice: 'CSS', isCorrect: false },
        {choice: 'YouTube', isCorrect: true }
      ]
    },

    {
      answers: [
        {choice: 'Fruit Punched', isCorrect: true},
        {choice: 'Frost Bite', isCorrect: false },
        {choice: 'Code Red', isCorrect: false },
        {choice: 'Fruit Quake', isCorrect: false }
      ]
    },
    {
      answers: [
        {choice: 'let', isCorrect: false},
        {choice: 'set', isCorrect: true },
        {choice: 'const', isCorrect: false },
        {choice: 'var', isCorrect: false }
      ]
    },
    {
      answers: [
        {choice: 'wireframe', isCorrect: false},
        {choice: 'blueprint', isCorrect: false },
        {choice: 'outline', isCorrect: false },
        {choice: 'result', isCorrect: true }
      ]
    },
    {
      answers: [
        {choice: 'Error', isCorrect: false},
        {choice: 'Bug', isCorrect: false },
        {choice: 'Mistake', isCorrect: false },
        {choice: 'Feature ;)', isCorrect: true }
      ]
    },
    {
      answers: [
        {choice: 'Functional', isCorrect: false},
        {choice: 'Object Oriented', isCorrect: false },
        {choice: 'Google', isCorrect: true },
        {choice: 'Logic', isCorrect: false}
      ]
    },
]