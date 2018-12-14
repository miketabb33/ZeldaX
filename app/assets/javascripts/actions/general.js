function manaOneHitAttack(button,attckingPlayer, receivingPlayer,ability, damage){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
    enoughManaChecker(attckingPlayer, ability);
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
function manaOneHitAttackWithDot(button,attckingPlayer, receivingPlayer,ability, damage, dotState){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
    enoughManaChecker(attckingPlayer, ability);
      if(attckingPlayer.enoughMana === true) {
        baseDamage = getRandomArbitrary(damage[0],damage[1]);
        var aggregateDamage = baseDamage;
        aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
        var blocked = blockAttack(receivingPlayer, ability)
        blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attckingPlayer.crit,ability,aggregateDamage)
        receivingPlayer.remainingHealth -= aggregateDamage;
        attckingPlayer.remainingMana -= ability.manaCost;
        actionsLeftInTurn -= 1;
        dotState.active = true;
        dotState.turnsLeft = ability.dot.turns; 
        dotBuffHotIconHandler(receivingPlayer, '#dot-display-player',ability, 'fa-fire', ability.dot.name + ' for ' + ability.dot.damage.join('-')+ ' damage | lasts '+ability.dot.turns + ' turns')
        dotContainerStyleAdjustCheckerForDot(receivingPlayer)
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

function dotListener(attckingPlayer, receivingPlayer, ability, dotDamage, dotState){
  if(isGameOn === true && dotState.active === true){
    baseDamage = getRandomArbitrary(dotDamage[0],dotDamage[1]);
    var aggregateDamage = baseDamage;
    aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
    var blocked = blockAttack(receivingPlayer.block, ability)
    blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attckingPlayer.crit,ability,aggregateDamage)
    receivingPlayer.remainingHealth -= aggregateDamage;
    dotState.turnsLeft -= 1
    if (dotState.turnsLeft === 0){
      dotState.active = false
      $('#dot-display-player'+receivingPlayer.ID).empty('fa-fire')
      noIconInContainerHandler('#dot-display-player',receivingPlayer)
      dotContainerStyleAdjustCheckerForDot(receivingPlayer) //?
    }
    endOfGameChecker(receivingPlayer);
    endOfGame(attckingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
    healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
  }
}


function manaAddArmor(button,attckingPlayer,ability, buffState){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
    enoughManaChecker(attckingPlayer, ability);
      if(attckingPlayer.enoughMana === true) {
        $('#equipped-armor-player'+attckingPlayer.ID).html(attckingPlayer.equippedArmor+' + '+ability.armorGain)
        attckingPlayer.equippedArmor +=ability.armorGain
        attckingPlayer.remainingMana -= ability.manaCost;
        actionsLeftInTurn -= 1;
        buffState.active = true;
        buffState.turnsLeft = ability.turns;
        dotBuffHotIconHandler(attckingPlayer, '#buff-hot-display-player', ability, 'fa-shield-alt', ability.name + ' gives ' + ability.armorGain+ ' additional armor | lasts '+ability.turns + ' turns')
        dotContainerStyleAdjustCheckerForDot(attckingPlayer) //?
        abilityAvailabilityChecker()
        anyAvailableActions();
        remainingActionsLeftHandler()
        ifTurnIsZero();
        manaBarUpdater($('#player'+attckingPlayer.ID+'-mana-bar'), attckingPlayer.remainingMana,attckingPlayer.maxMana);
      } 
    }
  });
}

function manaAddArmorListener(attckingPlayer, ability,buffState){
  if(isGameOn === true && buffState.active === true){
    buffState.turnsLeft -= 1
    if (buffState.turnsLeft === 0){
      attckingPlayer.equippedArmor -=ability.armorGain
      buffState.active = false
      $('#buff-hot-display-player'+attckingPlayer.ID).empty('fa-shield-alt')
      $('#equipped-armor-player'+attckingPlayer.ID).html(attckingPlayer.equippedArmor)
      noIconInContainerHandler('#buff-hot-display-player',attckingPlayer)
      dotContainerStyleAdjustCheckerForDot(attckingPlayer) //?
    }
  }
}