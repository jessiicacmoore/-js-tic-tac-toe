document.addEventListener('DOMContentLoaded', function(){
  const squares = document.querySelectorAll('.square');
  const modal = document.querySelector('.game-over-modal')
  const resetBtn = document.querySelector('.resetBtn');
  var mark = 'X';

  function isGameOver() {
    let x = document.querySelectorAll('.mark-x').length;
    let o = document.querySelectorAll('.mark-o').length;

    if (x + o >= 9) {
      modal.style.display = 'flex';
    }

  }

  function squareTaken(sq) {
    return sq.classList.contains('mark-x') || sq.classList.contains('mark-o') 
  }

  squares.forEach(square => {
    square.addEventListener('click', () => {
      if (squareTaken(square)) {
        alert("That square is taken, choose another square!");
      } else {
        if (mark === 'X') {
          console.log(mark);
          square.classList.add('mark-x');
          square.firstElementChild.innerText = mark;
          mark = 'O';
        } else {
          console.log(mark);
          square.classList.add('mark-o');
          square.firstElementChild.innerText = mark;
          mark = 'X';
        }
        isGameOver();
      };
    })
  })
  
  resetBtn.addEventListener('click', () => {
    squares.forEach(square => {
      square.innerText = "";
      square.classList.remove('mark-x');
      square.classList.remove('mark-o');
      modal.style.display = "none";
    })
  })
});