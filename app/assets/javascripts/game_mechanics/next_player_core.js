function nextPlayer(){
  if(isGameOn === true){
    $('#player'+activePlayer+'-moves').hide();
    $('.player'+activePlayer+'-card').removeClass('active-player')
    $('#player'+activePlayer+'-turn-arrow').hide()
    $('.player'+activePlayer+'-avatar-photo').addClass('gray-photo')
    activePlayer === 1 ? activePlayer =2 : activePlayer = 1;
    howManyActionsLeftInTurn = totalActionsPerTurn;
    timeLeftInTurn = totalTimePerTurn;
    $('#end-turn-timer').hide();
    $('.attack-actions').removeClass('end-turn-disabled-abilities');
    playerManaRegen();
    abilityAvailabilityChecker();
    anyAvailableActionsAtTurnStart()
    remainingActionsLeftHandler();
    $('.player'+activePlayer+'-avatar-photo').removeClass('gray-photo')
    $('.player'+activePlayer+'-card').addClass('active-player')
    $('#player'+activePlayer+'-moves').show();
    $('#player'+activePlayer+'-turn-arrow').show()
    activePlayerNameDisplay();
    activePlayerMessanger()
  }
}

function playerManaRegen(){
  if (activePlayer === 1){
    player1.remainingMana += player1.spirit;
    if(player1.remainingMana > player1.maxMana){
      player1.remainingMana = player1.maxMana;
    }
    manaBarUpdater($('#player1-mana-bar'), player1.remainingMana, player1.maxMana);
  }else{
    player2.remainingMana += player2.spirit;
    if(player2.remainingMana > player2.maxMana){
      player2.remainingMana = player2.maxMana;
    }
    manaBarUpdater($('#player2-mana-bar'), player2.remainingMana, player2.maxMana);
  }
}


function anyAvailableActionsAtTurnStart(){
  if (activePlayer === 1){
    if (player1TotalMoveCount === $('.ability-disabled-player1').length){
      $('#end-turn-button').removeClass('btn-warning');
      $('#end-turn-button').addClass('btn-success');
    }else{
      $('#actions-left-in-turn').text(howManyActionsLeftInTurn);
      $('#end-turn-button').removeClass('btn-success');
      $('#end-turn-button').addClass('btn-warning');
    }
  }else{
    if (player2TotalMoveCount === $('.ability-disabled-player2').length){
      $('#end-turn-button').removeClass('btn-warning');
      $('#end-turn-button').addClass('btn-success');
    }else{
      $('#actions-left-in-turn').text(howManyActionsLeftInTurn);
      $('#end-turn-button').removeClass('btn-success');
      $('#end-turn-button').addClass('btn-warning');
    }  
  }
}

function activePlayerNameDisplay(){
  if (activePlayer === 1){
    $('#whos-turn').text(player1.characterName+"'s turn");
  }else{
    $('#whos-turn').text(player2.characterName+"'s turn");
  }
}