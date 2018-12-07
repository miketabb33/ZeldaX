function player1DamageAbilityGen(button,ability){
  button.click(function(){
    if(isGameOn === true && howManyActionsLeftInTurn > 0){
    enoughManaPlayer1Checker(ability,player1RemainingMana);
      if(enoughManaPlayer1 === true) {
        var aggregateDamage = criticalHit(player1.crit,ability,ability.damage);
        player2RemainingHealth -= aggregateDamage
        player1RemainingMana -= ability.manaCost;
        howManyActionsLeftInTurn -= 1;
        abilityAvailabilityChecker()
        anyAvailableActions();
        remainingActionsLeftHandler()
        ifTurnIsZero();
        endOfGameCheckerPlayer1Win();
        endOfGame(player1.characterName,player2.characterName,$('#player2-death-indicator'))
        healthBarUpdater($('#player2-health-bar'),player2RemainingHealth, player2.maxHealth)
        manaBarUpdater($('#player1-mana-bar'), player1RemainingMana,player1.maxMana);
      } 
    }
  });
}

function player1BasicDamageAbilityGen(button,ability){
  button.click(function(){
    baseDamage = getRandomArbitrary(player1EquippedWeaponDamage[0],player1EquippedWeaponDamage[1]);
    if(isGameOn === true && howManyActionsLeftInTurn > 0){
      enoughManaPlayer1Checker(ability,player1RemainingMana);
      if(enoughManaPlayer1 === true) {
        var aggregateDamage = criticalHit(player1.crit,ability,baseDamage)
        player2RemainingHealth -= aggregateDamage;
        howManyActionsLeftInTurn -= 1;
        abilityAvailabilityChecker()
        anyAvailableActions();
        remainingActionsLeftHandler()
        ifTurnIsZero();
        endOfGameCheckerPlayer1Win();
        endOfGame(player1.characterName,player2.characterName,$('#player2-death-indicator'))
        healthBarUpdater($('#player2-health-bar'),player2RemainingHealth, player2.maxHealth)
      } 
    }
  });
}