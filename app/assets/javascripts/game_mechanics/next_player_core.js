function nextPlayer(){
  if(isGameOn === true){
    dotListenerWrapper()
    buffListenerWrapper()
    //next player functionality
    $('#player'+activePlayer+'-moves').hide();
    $('.player'+activePlayer+'-card').removeClass('active-player')
    $('#player'+activePlayer+'-turn-arrow').hide()
    $('.player'+activePlayer+'-avatar-photo').addClass('gray-photo')
    activePlayerSwitcher()
    timeLeftInTurn = totalTimePerTurn;
    $('#end-turn-timer').hide();
    $('.attack-actions').removeClass('end-turn-disabled-abilities');
    playerManaRegen(activePlayerAccessor);
    abilityAvailabilityChecker(activePlayerAccessor);
    anyAvailableActionsAtTurnStart(activePlayerAccessor)
    remainingActionsLeftHandler(activePlayerAccessor);
    $('.player'+activePlayer+'-avatar-photo').removeClass('gray-photo')
    $('.player'+activePlayer+'-card').addClass('active-player')
    $('#player'+activePlayer+'-moves').show();
    $('#player'+activePlayer+'-turn-arrow').show()
    activePlayerNameDisplay(activePlayerAccessor);
    activePlayerMessanger()
    $("#next-player-sfx")[0].play();
  }
}

function playerManaRegen(player){
  player.remainingMana += player.spirit;
  ifManaisOverMaxManaHandler(player)
  manaBarUpdater($('#player'+player.ID+'-mana-bar'), player.remainingMana, player.maxMana);
}


function anyAvailableActionsAtTurnStart(player){
  if (player.totalMoveCount === $('.ability-disabled-player1').length){
    $('#end-turn-button').removeClass('btn-warning');
    $('#end-turn-button').addClass('btn-success');
  }else{
    $('#actions-left-in-turn').text(actionsLeftInTurn);
    $('#end-turn-button').removeClass('btn-success');
    $('#end-turn-button').addClass('btn-warning');
  }
}

function activePlayerNameDisplay(player){
  $('#whos-turn').text(player.characterName+"'s turn");
}

function activePlayerSwitcher(){
  activePlayer === 1 ? activePlayer =2: activePlayer = 1;   
  activePlayer === 1 ? actionsLeftInTurn = player1.actionsPerTurn : actionsLeftInTurn = player2.actionsPerTurn;
  activePlayerAccessor === player1 ? activePlayerAccessor =player2:  activePlayerAccessor = player1;  
}







