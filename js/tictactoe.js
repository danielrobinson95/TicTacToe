
function startGame(){
  for(var i = 1; i <= 9; i++){
    document.getElementById('square' + i).innerText = '';
  }
  document.player = 'X';
  updateMessage(000);
  document.TerminateApp = false;
}

function fillSquare(square){

if(!document.TerminateApp){
  if(!checkIfSquareIsFilled(square)){
    square.innerText = document.player;
    if(calculateWinner()){
      updateMessage(003);
    } else{
      switchPlayer();
      checkIfAllSquaresAreFilled();
    }
  }
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
  else if (statusCode == 003) {
    document.getElementById('message').innerText = 'Congrats ' + document.player + ' you won!';
  }
  else if (statusCode == 004) {
    document.getElementById('message').innerText = 'Looks like all squares are filled, Why dont you play again?';
  }
}

function calculateWinner(){
  var winnerExists = false;

  if(checkSquares()){
    winnerExists = true;
    document.TerminateApp = true;
  }
  return winnerExists;
}

function checkSquares(){
  if(document.getElementById('square1').innerText == document.player &&
     document.getElementById('square2').innerText == document.player &&
     document.getElementById('square3').innerText == document.player){
       return true;
     } else if(document.getElementById('square4').innerText == document.player &&
               document.getElementById('square5').innerText == document.player &&
               document.getElementById('square6').innerText == document.player){
                 return true;
               } else if (document.getElementById('square7').innerText == document.player &&
                         document.getElementById('square8').innerText == document.player &&
                         document.getElementById('square9').innerText == document.player){
                           return true;
                         } else if (document.getElementById('square1').innerText == document.player &&
                                   document.getElementById('square4').innerText == document.player &&
                                   document.getElementById('square7').innerText == document.player){
                                     return true;
                                   } else if (document.getElementById('square2').innerText == document.player &&
                                             document.getElementById('square5').innerText == document.player &&
                                             document.getElementById('square8').innerText == document.player){
                                               return true;
                                             } else if(document.getElementById('square3').innerText == document.player &&
                                                       document.getElementById('square6').innerText == document.player &&
                                                       document.getElementById('square9').innerText == document.player){
                                                         return true;
                                                       } else if(document.getElementById('square1').innerText == document.player &&
                                                                 document.getElementById('square5').innerText == document.player &&
                                                                 document.getElementById('square9').innerText == document.player){
                                                                   return true;
                                                       } else if(document.getElementById('square3').innerText == document.player &&
                                                                 document.getElementById('square5').innerText == document.player &&
                                                                 document.getElementById('square7').innerText == document.player){
                                                                   return true;
                                                                 }
}

function checkIfAllSquaresAreFilled(){
  var numberOfSquaresFilled = 0;
  for(var i = 1; i <= 9; i++){
    if(document.getElementById('square' + i).innerText == 'X' ||
       document.getElementById('square' + i).innerText == 'O'){
      numberOfSquaresFilled++;    
    }
  }
  if(numberOfSquaresFilled == 9){
    updateMessage(004);
    document.terminateApp = true;
  }

}
