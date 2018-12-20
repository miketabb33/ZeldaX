function abilityAvailabilityChecker(player){
    //mage
    if (player.characterClass === "Mage"){ 
      isManaAbilityAvailable(player.remainingMana, 'ability-disabled-player'+player.ID, $('#fireball'+player.ID), player.abilities.fireball);
      isManaAbilityAvailable(player.remainingMana, 'ability-disabled-player'+player.ID, $('#pyro-blast'+player.ID), player.abilities.pyroBlastD);
      isManaAbilityAvailable(player.remainingMana, 'ability-disabled-player'+player.ID, $('#frost-armor'+player.ID), player.abilities.frostArmor);
    }
  }