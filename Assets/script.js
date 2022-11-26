var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-btn');
var questionTable = document.getElementById('questionTable');
// Timer that counts down from 75

function begin() {
    console.log('start');
    questionTable.style.display = 'flex';
    startBtn.style.display = 'none';
    //disable button
    startBtn.disabled = true;
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
      // Call the `displayMessage()` function
      //displayMessage();
      //re-enable button
      startBtn.disabled = false;
    }
    
  }, 1000);
}


startBtn.addEventListener('click', begin);