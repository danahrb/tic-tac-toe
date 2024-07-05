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
let board = ['','','','','','','','','']
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
  board.forEach((element,i) =>{
      squareEls[i].innerText=board[i];
})}

  const updateMessage=() => {
    if (!winner && !tie) {
      messageEl.textContent = `Player ${turn}'s turn`;
      } else if (!winner && tie) {
        messageEl.textContent = "It's a tie!";
      } else 
      {
        messageEl.textContent= `The winner is ${winner}`
      }
    }

    function placePiece(i) {
    board[i] = turn;
    console.log(board);
    }
    
    function handleSquareClick(i) {
      let index= i;
      if (board[index] ==='X'|| board[index]==='O'|| winner){
        return  }
        else
      placePiece(i);
      checkForWinner();
          }
    

function checkForWinner(){
  winningCombos.forEach(combo => {
    if (board[combo[0]]!==''&& board[combo[0]]===board[combo[1]]&& board[combo[0]]===board[combo[2]])
winner=true
    }    )
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



squareEls.forEach(square => {
   square.addEventListener('click', handleSquareClick(index));
 }); 

render();























 

