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


function ifEndOfGame(winner, loser, loserID){
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
    $("#cheer-sfx")[0].play();
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

function isDotExpiredView(receivingPlayer, dotState, dotIcon){
  if (dotState.turnsLeft === 0){
    $('#dot-display-player'+receivingPlayer.ID).empty(dotIcon)
    noIconInContainerHandler('#dot-display-player',receivingPlayer)
    dotContainerStyleAdjustChecker(receivingPlayer)
  }
}

function isBuffExpiredView(attackingPlayer, buffState, buffIcon){
  if (buffState.turnsLeft === 0){
    $('#buff-hot-display-player'+attackingPlayer.ID).empty(buffIcon)
    $('#equipped-armor-player'+attackingPlayer.ID).html(attackingPlayer.equippedArmor)
    noIconInContainerHandler('#buff-hot-display-player',attackingPlayer)
    dotContainerStyleAdjustChecker(attackingPlayer) 
  }
}

function displayHealthAdjustmentOverPhoto(player, display,color){
  $('#action-display-player'+ player.ID).append('<div class="display-action-text" style="color:'+color+'">'+display+'</div>')
}

function sfxIsBlockHandler(blocked,sfx){
  blocked ? $("#block-sfx")[0].play() : $("#"+sfx+"-sfx")[0].play() 
}

function sfxPlayer(sfx){
  $("#"+sfx+"-sfx")[0].play();
}

function addArmorGainedToStatPopUp(attackingPlayer,ability, armorBefore){
  $('#equipped-armor-player'+attackingPlayer.ID).html(armorBefore+' + '+ability.armorGain)
}

function attackMessage(blocked, critical, ability, damage){
  if (blocked === true){
    createMessage(ability.name+' blocked', true);
  } else if (critical === true){
    createMessage(ability.name+' critical hit for '+ damage+ ' damage', true);
  } else {
    createMessage(ability.name+' success for '+ damage+ ' damage', true);
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

function ifBlockedNoDotView(blocked, attackingPlayer, receivingPlayer, selector, ability, dotIcon){
  if (blocked === false){
    dotBuffHotIconHandler(receivingPlayer, selector,ability, dotIcon, ability.dot.name + ' for ' + attackingPlayer.fireballDamageDot.join('-')+ ' damage | lasts '+ability.dot.turns + ' turns')
  }
}




