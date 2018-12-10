function weaponAttack(button,ability,attckingPlayer, receivingPlayer, attckingPlayerID, receivingPlayerID){
  button.click(function(){
    if(isGameOn === true && howManyActionsLeftInTurn > 0){
      baseDamage = getRandomArbitrary(attckingPlayer.equippedWeaponDamage[0],attckingPlayer.equippedWeaponDamage[1]);
      var aggregateDamage = baseDamage
      aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
      var blocked = blockAttack(attckingPlayer.block, ability)
      blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attckingPlayer.crit,ability,aggregateDamage)
      receivingPlayer.remainingHealth -= aggregateDamage;
      howManyActionsLeftInTurn -= 1;
      abilityAvailabilityChecker()
      anyAvailableActions();
      remainingActionsLeftHandler()
      ifTurnIsZero();
      endOfGameChecker(receivingPlayer);
      endOfGame(attckingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayerID+'-death-indicator'))
      healthBarUpdater($('#'+receivingPlayerID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
    }
  });
}

function manaUserOneHitAttack(button,ability, damage, attckingPlayer, receivingPlayer, attckingPlayerID, receivingPlayerID){
  button.click(function(){
    if(isGameOn === true && howManyActionsLeftInTurn > 0){
    enoughManaChecker(ability,attckingPlayer.remainingMana, attckingPlayer);
      if(attckingPlayer.enoughMana === true) {
        baseDamage = getRandomArbitrary(damage[0],damage[1]);
        var aggregateDamage = baseDamage;
        var blocked = blockAttack(attckingPlayer.block, ability)
        blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attckingPlayer.crit,ability,aggregateDamage)
        receivingPlayer.remainingHealth -= aggregateDamage;
        attckingPlayer.remainingMana -= ability.manaCost;
        howManyActionsLeftInTurn -= 1;
        abilityAvailabilityChecker()
        anyAvailableActions();
        remainingActionsLeftHandler()
        ifTurnIsZero();
        endOfGameChecker(receivingPlayer);
        endOfGame(attckingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayerID+'-death-indicator'))
        healthBarUpdater($('#'+receivingPlayerID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
        manaBarUpdater($('#'+attckingPlayerID+'-mana-bar'), attckingPlayer.remainingMana,attckingPlayer.maxMana);
      } 
    }
  });
}
