function foodRegenAction(button,player){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0 && player.bag.slot1.count > 0){
      var messageHealth = player.remainingHealth
      player.remainingHealth += player.bag.slot1.item.healthRegen;
      if(player.remainingHealth > player.maxHealth){
        player.remainingHealth = player.maxHealth
      }
      player.bag.slot1.count -= 1
      actionsLeftInTurn -= 1;
      createMessage(player.characterName+' gained '+ (player.remainingHealth - messageHealth)+' health',true)
      remainingActionsLeftHandler()
      ifTurnIsZero();

      healthBarUpdater($('#player'+player.ID+'-health-bar'),player.remainingHealth, player.maxHealth)
      if (player.bag.slot1.count == 0){
        button.removeClass('btn-success');
        button.addClass('ability-disabled-player'+player.ID);
        button.addClass('btn-secondary');
      }
    } 
    else if (player.bag.slot1.count == 0 && actionsLeftInTurn > 0){
      createMessage('No more '+ player.bag.slot1.item.name,false)
    }
    console.log(player1)
    console.log(player2)
  });
}