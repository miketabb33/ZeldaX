function foodRegenAction(button,player,sfx){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0 && player.bag.slot1.count > 0){
      var messageHealth = player.remainingHealth
      foodHealthActuator(player)
      ifHealthisOverMaxHealthHandler(player)
      createMessage(player.characterName+' gained '+ (player.remainingHealth - messageHealth)+' health',true)
      remainingActionsLeftHandler(activePlayerAccessor)
      ifTurnIsZero();
      ifTurnIsZeroCoinIgnore(activePlayerAccessor)
      healthBarUpdater($('#player'+player.ID+'-health-bar'),player.remainingHealth, player.maxHealth)
      itemAvailabilityChecker(player, button)
      $("#"+sfx+"-sfx")[0].play();
    } 
    else {
      ifItemIsUnavailable(player)
    }
  });
}