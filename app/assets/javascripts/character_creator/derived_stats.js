function derivedStats(player){
    //derived stats
  player.stamina = player.baseStamina + player.equippedStamina;
  player.strength = player.baseStrength + player.equippedStrength;
  player.agility = player.baseAgility + player.equippedAgility;
  player.intellect = player.baseIntellect+ player.equippedIntellect;
  player.spirit = player.baseSpirit+ player.equippedSpirit;

  //other derived attr.
  player.staminaMultiplyer = ((player.stamina *player.stamina)/8)-40;
  
  player.strengthMultiplyer = player.strength*0.2;
  player.agilityMultiplyer = player.agility*0.3;
  player.intellectMultiplyer = player.intellect*0.5;
  player.attackPower = Math.round(player.strengthMultiplyer + player.agilityMultiplyer + player.equippedAttackPower)
  player.spellPower = Math.round(player.equippedSpellPower+ player.intellectMultiplyer)
  player.block = player.baseBlock + player.equippedBlock;
  player.crit = player.baseCrit+ player.equippedCrit;
  player.maxHealth = Math.round((player.baseHealth+player.staminaMultiplyer));

  player.totalArmor = player.baseArmor + player.equippedArmor;
  
  //attackPower and spell power multiplyers
  player.attackPowerMultiplyer = 0.01
  player.spellPowerMultiplyer = 0.01
}