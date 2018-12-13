function manaOneHitAttack(button,ability, damage, attckingPlayer, receivingPlayer){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
    enoughManaChecker(ability,attckingPlayer.remainingMana, attckingPlayer);
      if(attckingPlayer.enoughMana === true) {
        baseDamage = getRandomArbitrary(damage[0],damage[1]);
        var aggregateDamage = baseDamage;
        aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
        var blocked = blockAttack(receivingPlayer, ability)
        blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attckingPlayer.crit,ability,aggregateDamage)
        receivingPlayer.remainingHealth -= aggregateDamage;
        attckingPlayer.remainingMana -= ability.manaCost;
        actionsLeftInTurn -= 1;
        abilityAvailabilityChecker()
        anyAvailableActions();
        remainingActionsLeftHandler()
        ifTurnIsZero();
        endOfGameChecker(receivingPlayer);
        endOfGame(attckingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
        healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
        manaBarUpdater($('#player'+attckingPlayer.ID+'-mana-bar'), attckingPlayer.remainingMana,attckingPlayer.maxMana);
      } 
    }
  });
}

function manaOneHitAttackWithDot(button,ability, damage, attckingPlayer, receivingPlayer){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
    enoughManaChecker(ability,attckingPlayer.remainingMana, attckingPlayer);
      if(attckingPlayer.enoughMana === true) {
        baseDamage = getRandomArbitrary(damage[0],damage[1]);
        var aggregateDamage = baseDamage;
        aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
        var blocked = blockAttack(receivingPlayer, ability)
        blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attckingPlayer.crit,ability,aggregateDamage)
        receivingPlayer.remainingHealth -= aggregateDamage;
        attckingPlayer.remainingMana -= ability.manaCost;
        actionsLeftInTurn -= 1;
        receivingPlayer.dotState.fireball.active = true;
        receivingPlayer.dotState.fireball.turnsLeft = Mage.abilities.fireball.dot.turns;
        $('#active-action-state-player'+receivingPlayer.ID).html('<i class="fas fa-fire"></i>')
        abilityAvailabilityChecker()
        anyAvailableActions();
        remainingActionsLeftHandler()
        ifTurnIsZero();
        endOfGameChecker(receivingPlayer);
        endOfGame(attckingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
        healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
        manaBarUpdater($('#player'+attckingPlayer.ID+'-mana-bar'), attckingPlayer.remainingMana,attckingPlayer.maxMana);
      } 
    }
  });
}

function dotListener(attckingPlayer, receivingPlayer, ability, damage){
  if(isGameOn === true && receivingPlayer.dotState.fireball.active === true){
    baseDamage = getRandomArbitrary(damage[0],damage[1]);
    var aggregateDamage = baseDamage;
    aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
    var blocked = blockAttack(receivingPlayer.block, ability)
    blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attckingPlayer.crit,ability,aggregateDamage)
    receivingPlayer.remainingHealth -= aggregateDamage;
    receivingPlayer.dotState.fireball.turnsLeft -= 1
    if (receivingPlayer.dotState.fireball.turnsLeft === 0){
      receivingPlayer.dotState.fireball.active = false
      $('#active-action-state-player'+receivingPlayer.ID).text('')
    }
    endOfGameChecker(receivingPlayer);
    endOfGame(attckingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
    healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
  }
}
