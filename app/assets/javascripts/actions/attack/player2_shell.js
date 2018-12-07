function player2DamageAbilityGen(button,ability){
  button.click(function(){
    if(isGameOn === true && howManyActionsLeftInTurn > 0){
    enoughManaplayer2Checker(ability,player2RemainingMana);
      if(enoughManaplayer2 === true) {
        var aggregateDamage = criticalHit(player2.crit,ability,ability.damage);
        player1RemainingHealth -= aggregateDamage;
        player2RemainingMana -= ability.manaCost;
        howManyActionsLeftInTurn -= 1;
        abilityAvailabilityChecker()
        anyAvailableActions();
        remainingActionsLeftHandler();
        ifTurnIsZero();
        endOfGameCheckerplayer2Win();
        endOfGame(player2.characterName,player1.characterName,$('#player1-death-indicator'));
        healthBarUpdater($('#player1-health-bar'),player1RemainingHealth, player1.maxHealth);
        manaBarUpdater($('#player2-mana-bar'), player2RemainingMana,player2.maxMana);
      } 
    }
  });
} 

function player2BasicDamageAbilityGen(button,ability){
  button.click(function(){
    baseDamage = getRandomArbitrary(player2EquippedWeaponDamage[0],player2EquippedWeaponDamage[1]);
    if(isGameOn === true && howManyActionsLeftInTurn > 0){
      enoughManaplayer2Checker(ability,player2RemainingMana);
      if(enoughManaplayer2 === true) {
        var aggregateDamage = criticalHit(player2.crit,ability,baseDamage)
        player1RemainingHealth -= aggregateDamage;
        howManyActionsLeftInTurn -= 1;
        abilityAvailabilityChecker()
        anyAvailableActions();
        remainingActionsLeftHandler();
        ifTurnIsZero();
        endOfGameCheckerplayer2Win();
        endOfGame(player2.characterName,player1.characterName,$('#player1-death-indicator'));
        healthBarUpdater($('#player1-health-bar'),player1RemainingHealth, player1.maxHealth);
      } 
    }
  });
}

