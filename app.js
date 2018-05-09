// Game Values
let min  = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;
    
// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
      
// Assign UI Min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  
  // validate input
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`please enter a number btw ${min} and ${max}`);
  }
});

// set message
function setMessage(msg){
  message.style.color = 'red';
  message.textContent = msg;
}
