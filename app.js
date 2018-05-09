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
    setMessage(`please enter a number btw ${min} and ${max}`, 'red');
  }
  
  // check to see if is winning Number
  if(guess  === winningNum){
    
    gameOver(true, `${winningNum} is correct, you Won!!!`);
    
  } else {
    guessesLeft -= 1;
    
    if(guessesLeft === 0){
      gameOver(false, `Game over. the correct ans was ${winningNum}`)
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = '';
      setMessage(`${guess} is not the correct number, ${guessesLeft} guesses left`, 'red');
    }
  }  
});

// gameover
function gameOver(won, msg) {
  let color;
  won === true ?  color = 'green' : color = 'red';
  
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);
}


// set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}


