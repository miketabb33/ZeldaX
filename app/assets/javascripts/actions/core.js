function enoughManaChecker(attackingPlayer, ability){
  if(attackingPlayer.remainingMana < ability.manaCost){
    attackingPlayer.enoughMana = false;
    createMessage('Not enough mana', false);
  } else{
    attackingPlayer.enoughMana = true;
  }
}

function ifTurnIsZero(){
  if(actionsLeftInTurn === 0){
    $('#end-turn-button').removeClass('btn-warning');
    $('#end-turn-button').addClass('btn-success');
    $('.attack-actions').addClass('end-turn-disabled-abilities');
  }
}

function ifTurnIsZeroCoinIgnore(player){
  $('#the-coin'+player.ID).removeClass('end-turn-disabled-abilities')
  $('#the-coin'+player.ID).addClass('btn-success');
}

function endOfGameChecker(receivingPlayer){
  if (receivingPlayer.remainingHealth <= 0){
    receivingPlayer.remainingHealth = 0;
    isGameOn = false;
  }
}


function endOfGame(winner, loser, loserID){
  if (isGameOn === false){
    clearInterval(t);
    loserID.css('visibility', 'visible');
    $('.attack-actions').addClass('disabled');
    createMessage(loser+' has died', false);
    createMessage(winner+ ' has won!', false);
    $('#turn-board-controls').css('display', 'none');
    $('#winner-display-turn-board').css('display','inline');
    $('#winner-display-turn-board').html('<h1>'+winner+' has won!</h1>');
    $('#fight-again').show();
    $("#win-sfx")[0].play();
  }
}

function anyAvailableActions(player){
  if (player.totalMoveCount === $('.ability-disabled-player'+player.ID).length){
    $('#end-turn-button').removeClass('btn-warning');
    $('#end-turn-button').addClass('btn-success');
  }    
}

function itemAvailabilityChecker(player, button){
  if (player.bag.slot1.count == 0){
    button.removeClass('btn-success');
    button.addClass('ability-disabled-player'+player.ID);
    button.addClass('btn-secondary');
  }
}

function ifItemIsUnavailable(player){
  if (player.bag.slot1.count == 0 && actionsLeftInTurn > 0){
    createMessage('No more '+ player.bag.slot1.item.name,false)
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

function isDotExpired(receivingPlayer, dotState, dotIcon){
  if (dotState.turnsLeft === 0){
    dotState.active = false
    $('#dot-display-player'+receivingPlayer.ID).empty(dotIcon)
    noIconInContainerHandler('#dot-display-player',receivingPlayer)
    dotContainerStyleAdjustChecker(receivingPlayer) 
  }
}

function dotSetter(dotState,ability){
  dotState.active = true;
  dotState.turnsLeft = ability.dot.turns; 
}

function armorBuffActuator(attackingPlayer, ability){
  attackingPlayer.equippedArmor +=ability.armorGain
  attackingPlayer.remainingMana -= ability.manaCost;
  actionsLeftInTurn -= 1;
}

function armorBuffSetter(buffState, ability){
  buffState.active = true;
  buffState.turnsLeft = ability.turns;
}

function isBuffExpired(attackingPlayer, ability, buffState, buffIcon){
  if (buffState.turnsLeft === 0){
    attackingPlayer.equippedArmor -=ability.armorGain
    buffState.active = false
    $('#buff-hot-display-player'+attackingPlayer.ID).empty(buffIcon)
    $('#equipped-armor-player'+attackingPlayer.ID).html(attackingPlayer.equippedArmor)
    noIconInContainerHandler('#buff-hot-display-player',attackingPlayer)
    dotContainerStyleAdjustChecker(attackingPlayer) 
  }
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * ((max+1) - min) + min)
}

function criticalHit(crit, ability, damage){
  var num = Math.floor(Math.random() *100+1)
  if (num <= crit){
    createMessage(ability.name+' critical hit for '+ (damage * 2)+ ' damage', true);
    return (damage * 2)
  } else{
    createMessage(ability.name+' success for '+ damage+ ' damage', true);
    return damage
  }
}

function blockAttack(block, ability){
  var num = Math.floor(Math.random() *100+1)
  if (num <= block){
    createMessage(ability.name+' blocked', true);
    return true;
  } else{
    return false;
  }
}

function damageAfterArmor(damage, player){
  var absorbed = Math.round(player.equippedArmor/8)
  if((damage-absorbed) <=0){
    return 0;
  } else{
    return damage-absorbed;
  }
}

function dotBuffHotIconHandler(player, selector, ability, icon, msg){
  if($(selector+player.ID+' > .'+icon).length === 0){
    $(selector+player.ID).append('<i class="fas '+icon+'"></i>')
    dotBuffIconHover($('.'+icon), msg)
    $(selector+player.ID).show()
  }
}

function noIconInContainerHandler(selector,player){
  if ($(selector+player.ID+' > i').length === 0){
    $(selector+player.ID).hide()
  }
}

function dotContainerStyleAdjustChecker(player){
  if($('#buff-hot-display-player'+player.ID + ' > i').length > 0){
    $('#dot-display-player'+player.ID).css('top', '55px')
  } else{
    $('#dot-display-player'+player.ID).css('top', '20px')
  }
}

function foodHealthActuator(player){
  player.remainingHealth += player.bag.slot1.item.healthRegen;
  player.bag.slot1.count -= 1
  actionsLeftInTurn -= 1;
}

function gainManaActuator(player){
  player.remainingMana += player.spirit
}




