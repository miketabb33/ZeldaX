function player2DamageAbilityGen(button,ability){
  button.click(function(){
    if(isGameOn === true && howManyActionsLeftInTurn > 0){
    enoughManaplayer2Checker(ability,player2RemainingMana);
      if(enoughManaplayer2 === true) {
        baseDamage = getRandomArbitrary(ability.damage[0],ability.damage[1]);
        var aggregateDamage = baseDamage;
        aggregateDamage = attackPowerSpellPower(aggregateDamage,player2,ability)
        aggregateDamage = damageAfterArmor(aggregateDamage,player1)
        var blocked = blockAttack(player2.block, ability)
        blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(player2.crit,ability,aggregateDamage);
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
    if(isGameOn === true && howManyActionsLeftInTurn > 0){
      enoughManaplayer2Checker(ability,player2RemainingMana);
      if(enoughManaplayer2 === true) {
        baseDamage = getRandomArbitrary(player2EquippedWeaponDamage[0],player2EquippedWeaponDamage[1]);
        var aggregateDamage = baseDamage;
        aggregateDamage = damageAfterArmor(aggregateDamage,player1)
        var blocked = blockAttack(player2.block, ability)
        blocked ? aggregateDamage = 0 : aggregateDamage = criticalHit(player2.crit,ability,aggregateDamage)
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

