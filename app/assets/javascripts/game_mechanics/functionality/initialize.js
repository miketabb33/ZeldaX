var isGameOn, actionsLeftInTurn, totalTimePerTurn, timeLeftInTurn, 
t, activePlayer,notActivePlayer, activePlayerAccessor, notActivePlayerAccessor;

function initFight(){
  isGameOn = true;
  initActivePlayer()
  activePlayerVariablesSetter()
  player1.enoughMana = true;
  player2.enoughMana = true;
  player1.remainingHealth = player1.maxHealth;
  player1.remainingMana = player1.maxMana;
  player2.remainingHealth = player2.maxHealth;
  player2.remainingMana = player2.maxMana;
  player1.totalMoveCount = $('#player1-moves > button').length;
  player2.totalMoveCount = $('#player2-moves > button').length;
  actionsLeftInTurn = activePlayerAccessor.actionsPerTurn;
  totalTimePerTurn = 35;
  timeLeftInTurn = totalTimePerTurn;
  theCoinWrapper(notActivePlayerAccessor, activePlayerAccessor)
}


