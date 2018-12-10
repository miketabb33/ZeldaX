function abilityAvailabilityChecker(){
    //player1
    if (player1.characterClass === "Mage"){ 
      isManaAbilityAvailable(player1.remainingMana, 'ability-disabled-player1', $('#fire-bolt1'), player1.abilities.fireBoltD);
      isManaAbilityAvailable(player1.remainingMana, 'ability-disabled-player1', $('#pyro-blast1'), player1.abilities.pyroBlastD);
    }
    //player2
      //mage
    if (player2.characterClass === "Mage"){  
      isManaAbilityAvailable(player2.remainingMana, 'ability-disabled-player2', $('#fire-bolt2'), player2.abilities.fireBoltD);
      isManaAbilityAvailable(player2.remainingMana, 'ability-disabled-player2', $('#pyro-blast2'), player2.abilities.pyroBlastD);
    }
  }