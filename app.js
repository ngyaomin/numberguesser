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
  console.log(guessInput.value);
});
