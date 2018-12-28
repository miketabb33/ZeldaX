//business

function calculatePercentage(numerator, denominator){
  return numerator/denominator*100;
}

function ifHealthisOverMaxHealthHandler(player){
  if(player.remainingHealth > player.maxHealth){
    player.remainingHealth = player.maxHealth
  }
} 

function gainManaActuator(player){
  player.remainingMana += player.spirit
}

function ifManaisOverMaxManaHandler(player){
  if(player.remainingMana > player.maxMana){
    player.remainingMana = player.maxMana;
  }
}

function randomNum1to100(){
  return Math.floor(Math.random() *100+1)
}

//visual

function remainingActionsLeftHandler(player){
  if(actionsLeftInTurn === 0 || player.totalMoveCount === $('.ability-disabled-player'+player.ID).length){
    $('#actions-left-in-turn').text('No Actions Left');
  } else if(actionsLeftInTurn === 1){
    $('#actions-left-in-turn').text(actionsLeftInTurn+ ' Action Left');
  }else{
    $('#actions-left-in-turn').text(actionsLeftInTurn+ ' Actions Left');
  }
}

function isManaAbilityAvailable(whoRemainingMana, whoAbilityDisabled, button, ability){
  if(whoRemainingMana >= ability.manaCost){
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
  var percentageMana = calculatePercentage(attackerRemainingMana, attackerTotalMana)
  attackerManaBar.css('width', percentageMana+'%');
  attackerManaBar.text(attackerRemainingMana+'/'+attackerTotalMana);
} 

function healthBarUpdater(receiverHealthBar, receiverRemainingHealth, receiverTotalHealth){
  percentageHealth = calculatePercentage(receiverRemainingHealth, receiverTotalHealth)
  receiverHealthBar.css('width', percentageHealth+'%');
  receiverHealthBar.text(receiverRemainingHealth+'/'+receiverTotalHealth);
}  

//sound
function sfxPlayer(sfx){
  $("#"+sfx+"-sfx")[0].play();
}

