function weaponAttack(button,attackingPlayer, receivingPlayer,ability,sfx){
  button.click(function(){
    if(isGameOn && actionsLeftInTurn > 0){
      //business
      var blocked = isBlockAttack(receivingPlayer, randomNum1to100())
      var critical = isCriticalHit(attackingPlayer, randomNum1to100())
      var absorbed = getAbsorbedDamageByArmor(receivingPlayer)
      var aggregateDamage = getRandomArbitrary(attackingPlayer.equippedWeaponDamage[0],attackingPlayer.equippedWeaponDamage[1]);
      aggregateDamage = criticalActuator(critical,aggregateDamage)
      aggregateDamage = damageAfterArmor(aggregateDamage, absorbed)
      aggregateDamage = blockActuator(blocked,aggregateDamage)
      attackActuator(receivingPlayer,aggregateDamage)
      endOfGameChecker(receivingPlayer);
      //visual
      displayHealthAdjustmentOverPhoto(receivingPlayer, aggregateDamage, "gold")
      attackMessage(blocked, critical, ability, aggregateDamage)
      remainingActionsLeftHandler(activePlayerAccessor)
      abilityAvailabilityChecker(activePlayerAccessor)
      anyAvailableActions(activePlayerAccessor);
      ifTurnIsZero();
      ifTurnIsZeroCoinIgnore(activePlayerAccessor)
      ifEndOfGame(attackingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
      healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
      //sound
      sfxIsBlockHandler(blocked,sfx)
    }
  });
}


function manaOneHitAttack(button,attackingPlayer, receivingPlayer,ability, damage, sfx){
  button.click(function(){
    if(isGameOn && actionsLeftInTurn > 0){
    enoughManaChecker(attackingPlayer, ability);
      if(attackingPlayer.enoughMana) {
        //business
        var blocked = isBlockAttack(receivingPlayer, randomNum1to100())
        var critical = isCriticalHit(attackingPlayer, randomNum1to100()) 
        var absorbed = getAbsorbedDamageByArmor(receivingPlayer)
        var aggregateDamage = getRandomArbitrary(damage[0],damage[1]);
        aggregateDamage = criticalActuator(critical,aggregateDamage)
        aggregateDamage = damageAfterArmor(aggregateDamage, absorbed)
        aggregateDamage = blockActuator(blocked,aggregateDamage)
        manaAttackActuator(attackingPlayer,receivingPlayer,aggregateDamage,ability)
        endOfGameChecker(receivingPlayer);
        //visual
        displayHealthAdjustmentOverPhoto(receivingPlayer, aggregateDamage, "gold")
        attackMessage(blocked, critical, ability, aggregateDamage)
        remainingActionsLeftHandler(activePlayerAccessor)
        abilityAvailabilityChecker(activePlayerAccessor)
        anyAvailableActions(activePlayerAccessor);
        ifTurnIsZero();
        ifTurnIsZeroCoinIgnore(activePlayerAccessor)
        ifEndOfGame(attackingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
        healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
        manaBarUpdater($('#player'+attackingPlayer.ID+'-mana-bar'), attackingPlayer.remainingMana,attackingPlayer.maxMana);
        //sound
        sfxIsBlockHandler(blocked,sfx)
      }else{
        createMessage('Not enough mana', false);
      }
    }
  });
}

function manaOneHitAttackWithDot(button,attackingPlayer, receivingPlayer,ability, damage, dotState, dotIcon,sfx){
  button.click(function(){
    if(isGameOn && actionsLeftInTurn > 0){
    enoughManaChecker(attackingPlayer, ability);
      if(attackingPlayer.enoughMana) {
        //business
        var blocked = isBlockAttack(receivingPlayer, randomNum1to100())
        var critical = isCriticalHit(attackingPlayer, randomNum1to100()) 
        var absorbed = getAbsorbedDamageByArmor(receivingPlayer)
        var aggregateDamage = getRandomArbitrary(damage[0],damage[1]);
        aggregateDamage = criticalActuator(critical,aggregateDamage)
        aggregateDamage = damageAfterArmor(aggregateDamage, absorbed)
        aggregateDamage = blockActuator(blocked,aggregateDamage)
        manaAttackActuator(attackingPlayer,receivingPlayer,aggregateDamage,ability,actionsLeftInTurn)
        ifBlockedNoDot(blocked,dotState,ability)
        endOfGameChecker(receivingPlayer);
        //viausl
        displayHealthAdjustmentOverPhoto(receivingPlayer, aggregateDamage, "gold")
        attackMessage(blocked, critical, ability, aggregateDamage)
        remainingActionsLeftHandler(activePlayerAccessor)
        abilityAvailabilityChecker(activePlayerAccessor)
        anyAvailableActions(activePlayerAccessor);
        ifTurnIsZero();
        ifTurnIsZeroCoinIgnore(activePlayerAccessor)
        ifEndOfGame(attackingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
        healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
        manaBarUpdater($('#player'+attackingPlayer.ID+'-mana-bar'), attackingPlayer.remainingMana,attackingPlayer.maxMana);
        //dot visual
        ifBlockedNoDotView(blocked, attackingPlayer, receivingPlayer, '#dot-display-player', ability, dotIcon)
        dotContainerStyleAdjustChecker(receivingPlayer)
        //sound
        sfxIsBlockHandler(blocked,sfx)
      }else{
        createMessage('Not enough mana', false);
      }
    }
  });
}

function dotListener(attackingPlayer, receivingPlayer, ability, dotDamage, dotState, dotIcon,sfx){
  if(isGameOn && dotState.active){
    //business
    var blocked = isBlockAttack(receivingPlayer, randomNum1to100())
    var critical = isCriticalHit(attackingPlayer, randomNum1to100()) 
    var absorbed = getAbsorbedDamageByArmor(receivingPlayer)
    var aggregateDamage = getRandomArbitrary(dotDamage[0],dotDamage[1]);
    aggregateDamage = criticalActuator(critical,aggregateDamage)
    aggregateDamage = damageAfterArmor(aggregateDamage, absorbed)
    aggregateDamage = blockActuator(blocked,aggregateDamage)
    dotActuator(receivingPlayer,aggregateDamage,dotState)
    isDotExpired(dotState)
    endOfGameChecker(receivingPlayer);
    //visual
    displayHealthAdjustmentOverPhoto(receivingPlayer, aggregateDamage, "gold")
    attackMessage(blocked, critical, ability, aggregateDamage)
    isDotExpiredView(receivingPlayer, dotState, dotIcon)
    ifEndOfGame(attackingPlayer.characterName,receivingPlayer.characterName,$('#'+receivingPlayer.ID+'-death-indicator'))
    healthBarUpdater($('#player'+receivingPlayer.ID+'-health-bar'),receivingPlayer.remainingHealth, receivingPlayer.maxHealth)
    //sound
    sfxIsBlockHandler(blocked,sfx)
  }
}


function manaAddArmor(button,attackingPlayer,ability, buffState, buffIcon, sfx){
  button.click(function(){
    if(isGameOn && actionsLeftInTurn > 0){
    enoughManaChecker(attackingPlayer, ability);
      if(attackingPlayer.enoughMana) {
        var armorBeforeBuff = attackingPlayer.totalArmor
        //business
        armorBuffActuator(attackingPlayer, ability)
        armorBuffSetter(buffState, ability)
        //visual
        addArmorGainedToStatPopUp(attackingPlayer,ability, armorBeforeBuff)
        createMessage(attackingPlayer.characterName +' temporarily gained ' +ability.armorGain+ ' armor',true)
        remainingActionsLeftHandler(activePlayerAccessor)
        abilityAvailabilityChecker(activePlayerAccessor)
        anyAvailableActions(activePlayerAccessor);
        ifTurnIsZero();
        ifTurnIsZeroCoinIgnore(activePlayerAccessor)
        manaBarUpdater($('#player'+attackingPlayer.ID+'-mana-bar'), attackingPlayer.remainingMana,attackingPlayer.maxMana);
        //buff visual
        dotBuffHotIconHandler(attackingPlayer, '#buff-hot-display-player', ability, buffIcon, ability.name + ' gives ' + ability.armorGain+ ' additional armor | lasts '+ability.turns + ' turns')
        dotContainerStyleAdjustChecker(attackingPlayer) 
        //sound
        sfxPlayer(sfx)
      }else{
        createMessage('Not enough mana', false);
      }
    }
  });
}

function manaAddArmorListener(attackingPlayer, ability,buffState, buffIcon){
  if(isGameOn && buffState.active){
    //business
    buffStateIncrementor(buffState)
    isBuffExpired(attackingPlayer, ability, buffState)
    //visual
    isBuffExpiredView(attackingPlayer, buffState, buffIcon)
  }
}

function theCoin(button, attackingPlayer,sfx){
  button.click(function(){
    if(isGameOn){
      var messageMana = attackingPlayer.remainingMana;
      //business
      gainManaActuator(attackingPlayer)
      ifManaisOverMaxManaHandler(activePlayerAccessor)
      //visual
      createMessage('The coin gave '+attackingPlayer.characterName +' '+ (attackingPlayer.remainingMana - messageMana)+' mana ',true)
      abilityAvailabilityChecker(activePlayerAccessor)
      manaBarUpdater($('#player'+attackingPlayer.ID+'-mana-bar'), attackingPlayer.remainingMana,attackingPlayer.maxMana);
      button.tooltip('dispose')
      button.remove()
      //sound
      sfxPlayer(sfx)
    }
  });
}