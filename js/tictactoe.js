
function startGame(){
  document.player = 'X';
  updateMessage(000);
}

function fillSquare(square){

  if(calculateWinner()){
    console.log('you won');
  } else if(!checkIfSquareIsFilled(square)){
      square.innerText = document.player;
      switchPlayer();
    } else {
      updateMessage(002)
    }


}

function switchPlayer(){
  if(document.player == 'X'){
    document.player = 'O';
  } else {
    document.player = 'X';
  }
  updateMessage(001);
}

function checkIfSquareIsFilled(square){
  var squareIsFilled = false;

  if((square.innerText == 'O') ||
     (square.innerText == 'X')){
    squareIsFilled = true;
  }
  return squareIsFilled;
}

function updateMessage(statusCode){
  //Status code dictionary found in readme.md
  if(statusCode == 000){
    document.getElementById('message').innerText = 'Player ' + document.player +
    ' get\'s to start. Good luck!';
  } else if (statusCode == 001){
    document.getElementById('message').innerText = 'It\'s ' + document.player +
    '\'s turn.';
  } else if (statusCode == 002){
    document.getElementById('message').innerText = 'You cant go there, try again.'
  }
  else if (statuscode == 003) {
    document.getElementById('message').innerText = 'we have a winner, handle it';
  }
}

function calculateWinner(){

  var winnerExists = false;

  if(checkSquares()){
    winnerExists = true;
  }



  return winnerExists;
}

function checkSquares(){

  if(document.getElementById('square1').innerText == document.player &&
     document.getElementById('square2').innerText == document.player &&
     document.getElementById('square3').innerText == document.player){
       return true;
     }







}
