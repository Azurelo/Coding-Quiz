var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-btn');
var questionTable = document.getElementById('questionTable');
//var mainImage = document.getElementById
// Timer that counts down from 75
var timeLeft = 60;
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answerGrid')
var currentQuestionIndex;

function begin() {
  //Display Questions and hide Start button
    questionTable.style.display = 'flex';
    startBtn.classList.add('hide');
    setTimer();
    currentQuestionIndex = 0;
    displayNext();
}

function displayNext(){
  resetQuestions();
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText= answer.choice
    button.classList.add('btn')
    if(answer.isCorrect){
      button.dataset.isCorrect = answer.isCorrect
    }
    button.addEventListener('click', selectAnswer)
    answerElement.appendChild(button)
  })
}

function selectAnswer(e){
  var selectedAnswer = e.target;
  if(selectedAnswer.isCorrect === false){
    timeLeft -= 5;}

    //displayNext();
    else{console.log('oof');}
  }

function resetQuestions(){
  while(answerElement.firstChild)
  {
    answerElement.removeChild(answerElement.firstChild)
  }
}

startBtn.addEventListener('click', begin);

var questions = [
    {
      question: 'Pick the odd one out!',
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

function setTimer(){
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