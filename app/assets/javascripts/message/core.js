function createMessage(msg,playerAction){
  if(activePlayer === 1 && playerAction === true){
    document.getElementById('combat-message').innerHTML += '<div class="player1-message">' +msg + '</div>';
    autoScrollToBottom()
  } else if(activePlayer === 2 && playerAction === true){
    document.getElementById('combat-message').innerHTML += '<div class="player2-message">' +msg + '</div>';
    autoScrollToBottom()
  } else{
  document.getElementById('combat-message').innerHTML += '<div>'+msg+'</div>';
  autoScrollToBottom()
  }
}
   
function autoScrollToBottom(){
  $('#combat-message').animate({
    scrollTop: $('#combat-message').get(0).scrollHeight
  }, 1);
}     

function activePlayerMessanger(){
  if (activePlayer === 1){
    createMessage(player1.characterName+"'s turn:", false);
  }else{
    createMessage(player2.characterName+"'s turn:", false);
  }
} 