function weaponAttack(button,attackingPlayer, receivingPlayer,ability,sfx){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
      baseDamage = getRandomArbitrary(attackingPlayer.equippedWeaponDamage[0],attackingPlayer.equippedWeaponDamage[1]);
      var aggregateDamage = baseDamage
      aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
      var blocked = blockAttack(receivingPlayer, ability)
      blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attackingPlayer.crit,ability,aggregateDamage)
      blocked ? $("#block-sfx")[0].play() : $("#"+sfx+"-sfx")[0].play() 
      attackActuator(receivingPlayer,aggregateDamage)
      abilityAvailabilityChecker(activePlayerAccessor)
      anyAvailableActions(activePlayerAccessor);
      remainingActionsLeftHandler(activePlayerAccessor)
      ifTurnIsZero();
      ifTurnIsZeroCoinIgnore(activePlayerAccessor)
      endOfGameChecker(receivingPlayer);
      endOfGame(attackingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
      healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
    }
  });
}

function manaOneHitAttack(button,attackingPlayer, receivingPlayer,ability, damage, sfx){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
    enoughManaChecker(attackingPlayer, ability);
      if(attackingPlayer.enoughMana === true) {
        baseDamage = getRandomArbitrary(damage[0],damage[1]);
        var aggregateDamage = baseDamage;
        aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
        var blocked = blockAttack(receivingPlayer, ability)
        blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attackingPlayer.crit,ability,aggregateDamage)
        manaAttackActuator(attackingPlayer,receivingPlayer,aggregateDamage,ability,actionsLeftInTurn)
        blocked ? $("#block-sfx")[0].play() : $("#"+sfx+"-sfx")[0].play() 
        abilityAvailabilityChecker(activePlayerAccessor)
        anyAvailableActions(activePlayerAccessor);
        remainingActionsLeftHandler(activePlayerAccessor)
        ifTurnIsZero();
        ifTurnIsZeroCoinIgnore(activePlayerAccessor)
        endOfGameChecker(receivingPlayer);
        endOfGame(attackingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
        healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
        manaBarUpdater($('#player'+attackingPlayer.ID+'-mana-bar'), attackingPlayer.remainingMana,attackingPlayer.maxMana);
      } 
    }
  });
}

function manaOneHitAttackWithDot(button,attackingPlayer, receivingPlayer,ability, damage, dotState, dotIcon,sfx){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
    enoughManaChecker(attackingPlayer, ability);
      if(attackingPlayer.enoughMana === true) {
        baseDamage = getRandomArbitrary(damage[0],damage[1]);
        var aggregateDamage = baseDamage;
        aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
        var blocked = blockAttack(receivingPlayer, ability)
        blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attackingPlayer.crit,ability,aggregateDamage)
        blocked ? $("#block-sfx")[0].play() : $("#"+sfx+"-sfx")[0].play() 
        manaAttackActuator(attackingPlayer,receivingPlayer,aggregateDamage,ability,actionsLeftInTurn)
        dotSetter(dotState,ability) 
        dotBuffHotIconHandler(receivingPlayer, '#dot-display-player',ability, dotIcon, ability.dot.name + ' for ' + attackingPlayer.fireballDamageDot.join('-')+ ' damage | lasts '+ability.dot.turns + ' turns')
        dotContainerStyleAdjustChecker(receivingPlayer)
        abilityAvailabilityChecker(activePlayerAccessor)
        anyAvailableActions(activePlayerAccessor);
        remainingActionsLeftHandler(activePlayerAccessor)
        ifTurnIsZero();
        ifTurnIsZeroCoinIgnore(activePlayerAccessor)
        endOfGameChecker(receivingPlayer);
        endOfGame(attackingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
        healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
        manaBarUpdater($('#player'+attackingPlayer.ID+'-mana-bar'), attackingPlayer.remainingMana,attackingPlayer.maxMana);
      } 
    }
  });
}

function dotListener(attackingPlayer, receivingPlayer, ability, dotDamage, dotState, dotIcon,sfx){
  if(isGameOn === true && dotState.active === true){
    baseDamage = getRandomArbitrary(dotDamage[0],dotDamage[1]);
    var aggregateDamage = baseDamage;
    aggregateDamage = damageAfterArmor(aggregateDamage,receivingPlayer)
    var blocked = blockAttack(receivingPlayer, ability)
    blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(attackingPlayer.crit,ability,aggregateDamage)
    blocked ? $("#block-sfx")[0].play() : $("#"+sfx+"-sfx").prop("volume", 0.5)[0].play();
    dotActuator(receivingPlayer,aggregateDamage,dotState)
    isDotExpired(receivingPlayer, dotState, dotIcon)
    endOfGameChecker(receivingPlayer);
    endOfGame(attackingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
    healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
  }
}


function manaAddArmor(button,attackingPlayer,ability, buffState, buffIcon, sfx){
  button.click(function(){
    if(isGameOn === true && actionsLeftInTurn > 0){
    enoughManaChecker(attackingPlayer, ability);
      if(attackingPlayer.enoughMana === true) {
        $('#equipped-armor-player'+attackingPlayer.ID).html(attackingPlayer.equippedArmor+' + '+ability.armorGain)
        armorBuffActuator(attackingPlayer, ability)
        armorBuffSetter(buffState, ability)
        dotBuffHotIconHandler(attackingPlayer, '#buff-hot-display-player', ability, buffIcon, ability.name + ' gives ' + ability.armorGain+ ' additional armor | lasts '+ability.turns + ' turns')
        dotContainerStyleAdjustChecker(attackingPlayer) 
        createMessage(attackingPlayer.characterName +' temporarily gained ' +ability.armorGain+ ' armor',true)
        abilityAvailabilityChecker(activePlayerAccessor)
        anyAvailableActions(activePlayerAccessor);
        remainingActionsLeftHandler(activePlayerAccessor)
        ifTurnIsZero();
        ifTurnIsZeroCoinIgnore(activePlayerAccessor)
        manaBarUpdater($('#player'+attackingPlayer.ID+'-mana-bar'), attackingPlayer.remainingMana,attackingPlayer.maxMana);
        $("#"+sfx+"-sfx")[0].play();
      } 
    }
  });
}

function manaAddArmorListener(attackingPlayer, ability,buffState, buffIcon){
  if(isGameOn === true && buffState.active === true){
    buffState.turnsLeft -= 1
    isBuffExpired(attackingPlayer, ability, buffState, buffIcon)
  }
}

function theCoin(button, attackingPlayer,sfx){
  button.click(function(){
    if(isGameOn === true){
      var messageMana = attackingPlayer.remainingMana;
      gainManaActuator(attackingPlayer)
      ifManaisOverMaxManaHandler(activePlayerAccessor)
      abilityAvailabilityChecker(activePlayerAccessor)
      createMessage('The coin gave '+attackingPlayer.characterName +' '+ (attackingPlayer.remainingMana - messageMana)+' mana ',true)
      manaBarUpdater($('#player'+attackingPlayer.ID+'-mana-bar'), attackingPlayer.remainingMana,attackingPlayer.maxMana);
      button.tooltip('dispose')
      button.remove()
      $("#"+sfx+"-sfx")[0].play();
    }
  });
}