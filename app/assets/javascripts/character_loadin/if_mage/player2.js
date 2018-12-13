if (player2Class === 'Mage'){
  var player2 =Object.create(Mage);

  characterBase(player2,player2ID,player2Name,player2Race,player2AvatarPhoto,player2Level,
                         player2BaseHealth,player2MaxMana,player2BaseStamina,
                         player2EquippedStamina,player2BaseStrength,player2EquippedStrength,
                         player2BaseAgility,player2EquippedAgility,player2BaseIntellect,
                         player2EquippedIntellect, player2BaseSpirit, player2EquippedSpirit, player2BaseCrit,player2EquippedCrit,
                         player2EquippedAttackPower,player2EquippedSpellPower,
                         player2EquippedWeaponDamage,player2EquippedArmor,player2BaseBlock,
                         player2EquippedBlock)
  //These will be calculated by databases and loaded into basestats
  mageStatBoost(player2)
  //
  derivedStats(player2)
  ifHumanRaceStatBoost(player2)
  ifOrcRaceStatBoost(player2)

  addAttackPowerToWeaponDamage(player2, player2EquippedWeaponDamage)
  mageAttackSpellPowerWrapper(player2)

  player2BagLoadIn()

  console.log(player2)

  $(document).ready(function(){
    player2.actionBar($('#player2-action-bar'),'player2-mana-bar');
    //action loadin
    weaponAttackWrapper(player2,player1)
    mageActionWrapper(player2,player1)

    //ifHumanRaceActionLoadIn(player2, player2Race)
    //ifOrcRaceActionLoadIn(player2.characterRace)

    //item loadin
    foodItemAction(player2)
  })
}


