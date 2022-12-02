var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start-btn');
var questionTable = document.getElementById('questionTable');
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answerGrid')
var currentQuestionIndex;
var timeLeft;
var timeInterval = null;
function begin() {
  timeLeft = 15;
 
    questionTable.style.display = 'flex';
    startBtn.classList.add('hide');
    setTimer();
    currentQuestionIndex = 0
    displayNext();
}

function displayNext(){
  resetQuestions();
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question){
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
  console.log('hi')
  var selectedAnswer = e.target
  var correct = selectedAnswer.dataset.isCorrect

  if(questions.length > currentQuestionIndex + 1){
   currentQuestionIndex++
   displayNext()
  }else{
    questionTable.classList.add('hide')
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
    clearInterval(timeInterval);
}
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
var timeInterval = setInterval(function () {
  if (timeLeft > 0 ) {
    timerEl.textContent = timeLeft;
    timeLeft--;
  } else {
    timerEl.textContent = '0';
    clearInterval(timeInterval);
    
  }
  
}, 1000);
}
