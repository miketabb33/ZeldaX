function enoughManaPlayer1Checker(ability, remainingMana){
  if(remainingMana < ability.manaCost){
    enoughManaPlayer1 = false;
    createMessage('Not enough mana', false);
  } else{
    enoughManaPlayer1 = true;
  }
}

function enoughManaplayer2Checker(ability, remainingMana){
  if(remainingMana < ability.manaCost){
    enoughManaplayer2 = false;
    createMessage('Not enough mana', false);
  }else{
    enoughManaplayer2 = true;
  }

}

function ifTurnIsZero(){
  if(howManyActionsLeftInTurn === 0){
    $('#end-turn-button').removeClass('btn-warning');
    $('#end-turn-button').addClass('btn-success');
    $('.attack-actions').addClass('end-turn-disabled-abilities');
  }
}

function endOfGameCheckerPlayer1Win(){
  if (player2RemainingHealth <= 0){
    player2RemainingHealth = 0;
    isGameOn = false;
  }
}

function endOfGameCheckerplayer2Win(){
  if (player1RemainingHealth <= 0){
    player1RemainingHealth = 0;
    isGameOn = false;
  }
}

function endOfGame(winner, loser, loserSelector){
  if (isGameOn === false){
    winCounter(winner);
    loserSelector.css('visibility', 'visible');
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
  console.log('roll: '+num)
  console.log('crit chance: '+crit)
  if (num <= crit){
    createMessage(ability.name+' critical hit for '+ damage * 2+ ' damage', true);
    return damage * 2
  } else{
    createMessage(ability.name+' success for '+ damage+ ' damage', true);
    return damage
  }
}