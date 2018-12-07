function characterBase(player,playerName,playerAvatarPhoto,playerLevel,playerBaseHealth,playerMaxMana,playerBaseStamina,playerEquippedStamina,playerBaseStrength,playerEquippedStrength,playerBaseAgility,playerEquippedAgility,playerBaseIntellect,playerEquippedIntellect,playerBaseCrit,playerEquippedCrit,playerEquippedAttackPower,playerEquippedSpellPower,playerEquippedWeaponDamage,playerEquippedArmor,playerBaseBlock,playerEquippedBlock){
  player.characterName(playerName);
  player.characterAvatarPhoto(playerAvatarPhoto);
  player.characterLevel(playerLevel);
  player.baseHealth(playerBaseHealth);
  player.maxMana(playerMaxMana);
  player.baseStamina(playerBaseStamina);
  player.equippedStamina(playerEquippedStamina);
  player.baseStrength(playerBaseStrength);
  player.equippedStrength(playerEquippedStrength);
  player.baseAgility(playerBaseAgility);
  player.equippedAgility(playerEquippedAgility);
  player.baseIntellect(playerBaseIntellect);
  player.equippedIntellect(playerEquippedIntellect);
  player.baseCrit(playerBaseCrit);
  player.equippedCrit(playerEquippedCrit);
  player.equippedAttackPower(playerEquippedAttackPower);
  player.equippedSpellPower(playerEquippedSpellPower);
  player.equippedWeaponDamage(playerEquippedWeaponDamage);
  player.equippedArmor(playerEquippedArmor);
  player.baseBlock(playerBaseBlock);
  player.equippedBlock(playerEquippedBlock);
  //derived stats
  player.stamina = player.baseStamina+player.equippedStamina;
  player.strength = player.baseStrength + player.equippedStrength;
  player.agility = player.baseAgility + player.equippedAgility;
  player.intellect = player.baseIntellect+ player.equippedIntellect;
  //other derived attr.
  player.staminaMultiplyer = player.stamina *5.7;
  player.strengthMultiplyer = player.strength*1.1;
  player.agilityMultiplyer = player.agility*1.2;
  player.intellectMultiplyer = player.intellect*1.2;
  player.attackPower = Math.ceil(player.strengthMultiplyer + player.agilityMultiplyer + player.equippedAttackPower)
  player.spellPower = Math.ceil(player.equippedSpellPower+ player.intellectMultiplyer)
  player.block = player.baseBlock + player.equippedBlock;
  player.crit = player.baseCrit+ player.equippedCrit;
  player.maxHealth = Math.round(player.baseHealth +player.staminaMultiplyer);
}