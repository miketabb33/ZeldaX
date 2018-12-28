function createMessage(msg,playerAction){
  if(playerAction === true){
    document.getElementById('combat-message').innerHTML += '<div class="player'+activePlayer+'-message">' +msg + '</div>';
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
  createMessage(activePlayerAccessor.characterName+"'s turn:", false);
} 