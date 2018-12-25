function enoughManaChecker(attackingPlayer, ability){
  if(attackingPlayer.remainingMana < ability.manaCost){
    attackingPlayer.enoughMana = false;
  } else{
    attackingPlayer.enoughMana = true;
  }
}

function isBlockAttack(receivingPlayer, num){
  if (num <= receivingPlayer.block){
    return true;
  } else{
    return false;
  }
}

function isCriticalHit(player,num){
  if (num <= player.crit){
    return true
  } else{
    return false
  }
}

function getAbsorbedDamageByArmor(receivingPlayer){
  armorAbsorbtionFormula = ((receivingPlayer.totalArmor*receivingPlayer.totalArmor*receivingPlayer.totalArmor)/50000)
  return Math.round(armorAbsorbtionFormula)-2 //the 2 is to offset level 1 armor
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * ((max+1) - min) + min)
}


function criticalActuator(critical,aggregateDamage){
  if (critical){ 
   return aggregateDamage *= 2  
  }else{
    return aggregateDamage;
  }
}

function damageAfterArmor(aggregateDamage, absorbed){
  if((aggregateDamage-absorbed) <=0){
    return 0;
  } else{
    return aggregateDamage-absorbed;
  }
}

function blockActuator(blocked,aggregateDamage){
  if(blocked){ 
    return aggregateDamage = 0 
  }else{ 
    return aggregateDamage;
  }
}

function attackActuator(receivingPlayer,aggregateDamage){
  receivingPlayer.remainingHealth -= aggregateDamage;
  actionsLeftInTurn -= 1;
}

function manaAttackActuator(attackingPlayer,receivingPlayer,aggregateDamage,ability){
  receivingPlayer.remainingHealth -= aggregateDamage;
  attackingPlayer.remainingMana -= ability.manaCost;
  actionsLeftInTurn -= 1;
}

function dotActuator(receivingPlayer,aggregateDamage,dotState){
  receivingPlayer.remainingHealth -= aggregateDamage;
  dotState.turnsLeft -= 1
}

function armorBuffActuator(attackingPlayer, ability){
  attackingPlayer.totalArmor +=ability.armorGain
  attackingPlayer.remainingMana -= ability.manaCost;
  actionsLeftInTurn -= 1;
}

function foodHealthActuator(player){
  player.remainingHealth += player.bag.slot1.item.healthRegen;
  player.bag.slot1.count -= 1
  actionsLeftInTurn -= 1;
}

function endOfGameChecker(receivingPlayer){
  if (receivingPlayer.remainingHealth <= 0){
    receivingPlayer.remainingHealth = 0;
    isGameOn = false;
  }
}

function dotSetter(dotState,ability){
  dotState.active = true;
  dotState.turnsLeft = ability.dot.turns; 
}

function ifBlockedNoDot(blocked,dotState,ability){
  if (blocked === false){
    dotSetter(dotState,ability) 
  }
}

function armorBuffSetter(buffState, ability){
  buffState.active = true;
  buffState.turnsLeft = ability.turns;
}

function isDotExpired(dotState){
  if (dotState.turnsLeft === 0){
    dotState.active = false
  }
}

function isBuffExpired(attackingPlayer, ability, buffState){
  if (buffState.turnsLeft === 0){
    attackingPlayer.totalArmor -=ability.armorGain
    buffState.active = false
  }
}

function buffStateIncrementor(buffState){
  buffState.turnsLeft -= 1
}




