function nextPlayer(){
  if(isGameOn === true){
    $('#player'+activePlayer+'-moves').hide();
    activePlayer === 1 ? activePlayer =2 : activePlayer = 1;
    howManyActionsLeftInTurn = totalActionsPerTurn;
    timeLeftInTurn = totalTimePerTurn;
    $('#end-turn-timer').hide();
    $('.attack-actions').removeClass('end-turn-disabled-abilities');
    playerManaRegen();
    abilityAvailabilityChecker();
    anyAvailableActionsAtTurnStart()
    remainingActionsLeftHandler();
    $('#player'+activePlayer+'-moves').show();
    activePlayerNameDisplay();
    activePlayerMessanger()
  }
}

function playerManaRegen(){
  if (activePlayer === 1){
    player1RemainingMana += player1.spirit;
    if(player1RemainingMana > player1.maxMana){
      player1RemainingMana = player1.maxMana;
    }
    visualBarUpdater($('#player1-mana-bar'), player1RemainingMana, player1.maxMana, $('#player2-health-bar'),player2RemainingHealth, player2.maxHealth);
  }else{
    player2RemainingMana += player2.spirit;
    if(player2RemainingMana > player2.maxMana){
      player2RemainingMana = player2.maxMana;
    }
    visualBarUpdater($('#player2-mana-bar'), player2RemainingMana, player2.maxMana, $('#player1-health-bar'),player1RemainingHealth,player1.maxHealth);
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