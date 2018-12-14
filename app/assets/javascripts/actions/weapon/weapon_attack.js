function weaponAttack(button,attckingPlayer, receivingPlayer,ability){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
      baseDamage = getRandomArbitrary(attckingPlayer.equippedWeaponDamage[0],attckingPlayer.equippedWeaponDamage[1]);
      var aggregateDamage = baseDamage
      aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
      var blocked = blockAttack(attckingPlayer.block, ability)
      blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attckingPlayer.crit,ability,aggregateDamage)
      receivingPlayer.remainingHealth -= aggregateDamage;
      actionsLeftInTurn -= 1;
      abilityAvailabilityChecker()
      anyAvailableActions();
      remainingActionsLeftHandler()
      ifTurnIsZero();
      endOfGameChecker(receivingPlayer);
      endOfGame(attckingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
      healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
    }
  });
}
