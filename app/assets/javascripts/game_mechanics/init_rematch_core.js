var isGameOn, enoughManaPlayer1, enoughManaplayer2, player1RemainingHealth, 
player1RemainingMana, player2RemainingHealth, player2RemainingMana,
totalActionsPerTurn, howManyActionsLeftInTurn, totalTimePerTurn, timeLeftInTurn,
player1TotalMoveCount, player2TotalMoveCount, t, player1WinCount, player2WinCount,
activePlayer;

function initFight(){
  isGameOn = true;
  enoughManaPlayer1 = true;
  enoughManaplayer2 = true;
  activePlayer = 1;
  player1RemainingHealth = player1.maxHealth;
  player1RemainingMana = player1.maxMana;
  player2RemainingHealth = player2.maxHealth;
  player2RemainingMana = player2.maxMana;
  totalActionsPerTurn = 2;
  howManyActionsLeftInTurn = totalActionsPerTurn;
  totalTimePerTurn = 30;
  timeLeftInTurn = totalTimePerTurn;
  player1TotalMoveCount = $('#player1-moves > button').length;
  player2TotalMoveCount = $('#player2-moves > button').length;
}

function initFightVisual(){
  $('.player'+activePlayer+'-card').addClass('active-player')
  $('#prefight-display').hide();
  $('#fight-display').show();
  $('#end-turn-timer').hide();
  $('#whos-turn').text(player1.characterName+"'s turn");
  $('#player2-moves').hide();
  $('#actions-left-in-turn').text(howManyActionsLeftInTurn);
  $('#winner-display-turn-board').css('display','none')
  $('#fight-again-button').hide();
  healthBarUpdater($('#player2-health-bar'),player2RemainingHealth, player2.maxHealth);
  healthBarUpdater($('#player1-health-bar'),player1RemainingHealth, player1.maxHealth);
  manaBarUpdater($('#player1-mana-bar'), player1RemainingMana,player1.maxMana);
  manaBarUpdater($('#player2-mana-bar'), player2RemainingMana,player2.maxMana);
  createMessage(player1.characterName+' goes first', false);
  createMessage('Fight!', false);
}

function initPreFight(){
  player1WinCount = 0;
  player2WinCount = 0;
}

function initPreFightVisual(){
  $('#fight-display').hide();
  $('#player1-win-count').text(player1WinCount);
  $('#player2-win-count').text(player2WinCount);
}

function timerStart(){
  t = setInterval(function(){ 
    timeLeftInTurn -= 1 
    if (timeLeftInTurn === -1){
      nextPlayer()
    }
    if (timeLeftInTurn <= 10){
      $('#end-turn-timer').show()
      $('#end-turn-timer').text(timeLeftInTurn);
    } 
  }, 1000);
}

function resetGame(){
  $('.player'+activePlayer+'-card').removeClass('active-player')
  $('#fight-display').hide();
  $('#prefight-display').show();
  $('#player1-win-count').text(player1WinCount);
  $('#player2-win-count').text(player2WinCount);
  $('.attack-actions').removeClass('disabled');
  $('.attack-actions').removeClass('ability-disabled-player1');
  $('.attack-actions').removeClass('end-turn-disabled-abilities');
  $('end-turn-button').removeClass('btn-success');
  $('.attack-actions').addClass('btn-success');
  $('end-turn-button').addClass('btn-warning');
  $('#player2-death-indicator').hide();
  $('#player1-death-indicator').hide();
  $('#turn-board-controls').show();
  $('#player1-moves').show();
  $('#player2-moves').show();
  }