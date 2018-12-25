function foodRegenAction(button,player,sfx){
  button.click(function(){
    if(isGameOn && actionsLeftInTurn > 0 && player.bag.slot1.count > 0){
      var messageHealth = player.remainingHealth
      //business
      foodHealthActuator(player)
      ifHealthisOverMaxHealthHandler(player)
      //visual
      displayHealthAdjustmentOverPhoto(player, player.remainingHealth - messageHealth, "#00FF00")
      createMessage(player.characterName+' gained '+ (player.remainingHealth - messageHealth)+' health',true)
      remainingActionsLeftHandler(activePlayerAccessor)
      itemAvailabilityChecker(player, button)
      ifTurnIsZero();
      ifTurnIsZeroCoinIgnore(activePlayerAccessor)
      healthBarUpdater($('#player'+player.ID+'-health-bar'),player.remainingHealth, player.maxHealth)
      //sound
      sfxPlayer(sfx)
    } 
    else {
      ifItemIsUnavailable(player)
    }
  });
}