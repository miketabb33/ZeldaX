function remainingActionsLeftHandler(){
  if (activePlayer === 1){
    if(actionsLeftInTurn === 0 || player1TotalMoveCount === $('.ability-disabled-player1').length){
      $('#actions-left-in-turn').text('No ');
    } else{
      $('#actions-left-in-turn').text(actionsLeftInTurn);
    }
  }else{
    if(actionsLeftInTurn === 0 || player2TotalMoveCount === $('.ability-disabled-player2').length){
      $('#actions-left-in-turn').text('No ');
    } else{
      $('#actions-left-in-turn').text(actionsLeftInTurn);
    }
  }
}

function isManaAbilityAvailable(whoRemainingMana, whoAbilityDisabled, button, ability){
  if(whoRemainingMana > ability.manaCost){
    button.removeClass('btn-secondary');
    button.removeClass(whoAbilityDisabled);
    button.addClass('btn-success');
  } else if(whoRemainingMana < ability.manaCost){
    button.removeClass('btn-success');
    button.addClass('btn-secondary');
    button.addClass(whoAbilityDisabled);
  }
}


function manaBarUpdater(attackerManaBar,attackerRemainingMana, attackerTotalMana){
  percentageMana = attackerRemainingMana/attackerTotalMana*100;
  attackerManaBar.css('width', percentageMana+'%');
  attackerManaBar.text(attackerRemainingMana+'/'+attackerTotalMana);
} 

function healthBarUpdater(receiverHealthBar, receiverRemainingHealth, receiverTotalHealth){
  percentageHealth = receiverRemainingHealth/receiverTotalHealth* 100; 
  receiverHealthBar.css('width', percentageHealth+'%');
  receiverHealthBar.text(receiverRemainingHealth+'/'+receiverTotalHealth);
}   