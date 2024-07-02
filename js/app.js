/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6] 
];

/*---------------------------- Variables (state) ----------------------------*/
let board = ['X','X','X','O','X','O','O','X','O']
let turn = 'X'
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl= document.getElementById('#message')

/*-------------------------------- Functions --------------------------------*/
const test= () => {
   console.log('test')
}

const init =() =>
{

render ();
}


const render= ()=>{
  updateBoard();
  updateMessage();
}



const updateBoard = ()=> {
  board.forEach((element,index) =>{
      if (element === "X"){
          squareEls[index].innerText = "X";
      }
      else if (element === "O"){
          squareEls[index].innerText = "O";
      }
     else {
          squareEls[index].innerText = "";
      }
  })
}

  const updateMessage=() => {
    if (!winner && !tie) {
      messageEl.textContent = `Player ${turn}'s turn`;
      } else if (!winner && tie) {
        messageEl.textContent = "It's a tie!";
      } 
    }

    function placePiece(index) {
      board[index] = turn;
      console.log(board);
    }
    


    
    function handleSquareClick(index) {
      if (board[index] === '' && !winner && !tie) {
        placePiece(index);
        checkForWinner();
        switchPlayer();
      }
    }
    function checkForTie() {
  if (winner) {
    return;
  }
  
  let tie = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      tie = false;
      break;
    }
  }
}
function switchPlayerTurn() {
  if (winner) {
    return;
  }
   if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }

}



/*----------------------------- Event Listeners -----------------------------*/


//squareEls.addEventListener('click',test)

squareEls.forEach(square => {
   square.addEventListener('click', test);
 }); 

render();























 

