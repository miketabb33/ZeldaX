
function nextPlayer(){
  if(isGameOn === true){
    //business
    dotListenerWrapper()
    activePlayerSwitcher()
    activePlayerVariablesSetter()
    timeLeftInTurn = totalTimePerTurn;
    actionsLeftInTurn = activePlayerAccessor.actionsPerTurn
    gainManaActuator(activePlayerAccessor)
    ifManaisOverMaxManaHandler(activePlayerAccessor)
    buffListenerWrapper(activePlayerAccessor) 
    //Visual
    manaBarUpdater($('#player'+activePlayerAccessor.ID+'-mana-bar'), activePlayerAccessor.remainingMana, activePlayerAccessor.maxMana);
    abilityAvailabilityChecker(activePlayerAccessor);
    anyAvailableActionsAtTurnStart(activePlayerAccessor)
    remainingActionsLeftHandler(activePlayerAccessor);
    lastPlayerVisualRemover()
    activePlayerVisualAdder()
    activePlayerNameDisplay(activePlayerAccessor);
    activePlayerMessanger()
    //sound
    $("#clock-sfx")[0].pause();
    $("#clock-sfx")[0].currentTime = 0
  }
}










