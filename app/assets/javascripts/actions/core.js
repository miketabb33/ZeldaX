function enoughManaChecker(attckingPlayer, ability){
  if(attckingPlayer.remainingMana < ability.manaCost){
    attckingPlayer.enoughMana = false;
    createMessage('Not enough mana', false);
  } else{
    attckingPlayer.enoughMana = true;
  }
}

function ifTurnIsZero(){
  if(actionsLeftInTurn === 0){
    $('#end-turn-button').removeClass('btn-warning');
    $('#end-turn-button').addClass('btn-success');
    $('.attack-actions').addClass('end-turn-disabled-abilities');
  }
}

function endOfGameChecker(receivingPlayer){
  if (receivingPlayer.remainingHealth <= 0){
    receivingPlayer.remainingHealth = 0;
    isGameOn = false;
  }
}


function endOfGame(winner, loser, loserID){
  if (isGameOn === false){
    winCounter(winner);
    loserID.css('visibility', 'visible');
    $('.attack-actions').addClass('disabled');
    createMessage(loser+' has died', false);
    createMessage(winner+ ' has won!', false);
    $('#turn-board-controls').css('display', 'none');
    $('#winner-display-turn-board').css('display','inline');
    $('#winner-display-turn-board').html('<h1>'+winner+' has won!</h1>');
    $('#fight-again-button').show();
    clearInterval(t);
  }
}

function anyAvailableActions(){
  if (activePlayer === 1){
    if (player1TotalMoveCount === $('.ability-disabled-player1').length){
      $('#end-turn-button').removeClass('btn-warning');
      $('#end-turn-button').addClass('btn-success');
    }    
  }else{
    if (player2TotalMoveCount === $('.ability-disabled-player2').length){
      $('#end-turn-button').removeClass('btn-warning');
      $('#end-turn-button').addClass('btn-success');
    }  
  }
}

function winCounter(winner){
  if(winner === player1.characterName){
    player1WinCount += 1;
  } else if(winner ===player2.characterName){
    player2WinCount += 1;
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
  var absorbed = player.equippedArmor/5

  //var num = Math.ceil(damage * (1-(player.equippedArmor*0.0005)))
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




