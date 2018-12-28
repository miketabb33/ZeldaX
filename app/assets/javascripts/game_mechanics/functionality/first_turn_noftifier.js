function firstTurnNotifier(){
  $('#full-grayed-out-screen').show()
  $('#turn-popup-notifier').show()
  $('#turn-popup-notifier').html('<div style="font-size:40px">'+activePlayerAccessor.characterName+'</div> Is first to attack!')
  var popUpTicker = 4;
  popUpTimer = setInterval(function(){ 
     popUpTicker -= 1 
    if (popUpTicker === -1){
      timerStart();
      $('#turn-popup-notifier').hide()
      $('#full-grayed-out-screen').hide()
      createMessage(activePlayerAccessor.characterName+' goes first', false);
      createMessage('Fight!', false);
      healthBarUpdater($('#player2-health-bar'),player2.remainingHealth, player2.maxHealth);
      healthBarUpdater($('#player1-health-bar'),player1.remainingHealth, player1.maxHealth);
      manaBarUpdater($('#player1-mana-bar'), player1.remainingMana,player1.maxMana);
      manaBarUpdater($('#player2-mana-bar'), player2.remainingMana,player2.maxMana);
      activePlayerNameDisplay(activePlayerAccessor)
      activePlayerVisualAdder()
      clearInterval(popUpTimer);
      sfxPlayer('match-start')
    }
  }, 1000);
}