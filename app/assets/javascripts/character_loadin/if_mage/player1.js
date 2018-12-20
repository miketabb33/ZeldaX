if (player1Class === 'Mage'){
  var player1 =Object.create(Mage);

  characterBase(player1,player1ID,player1Name,player1Race,player1AvatarPhoto,player1Level,
                         player1BaseHealth,player1MaxMana,player1BaseStamina,
                         player1EquippedStamina,player1BaseStrength,player1EquippedStrength,
                         player1BaseAgility,player1EquippedAgility,player1BaseIntellect,
                         player1EquippedIntellect,player1BaseSpirit,player1EquippedSpirit,player1BaseCrit,player1EquippedCrit,
                         player1EquippedAttackPower,player1EquippedSpellPower,
                         player1EquippedWeaponDamage,player1EquippedArmor,player1BaseBlock,
                         player1EquippedBlock)

  mageStatBoost(player1)
  derivedStats(player1)
  ifHumanRaceStatBoost(player1)
  ifOrcRaceStatBoost(player1)
  addAttackPowerToWeaponDamage(player1,player1EquippedWeaponDamage)
  mageAttackSpellPowerWrapper(player1)
  player1BagLoadIn()

  console.log(player1)

  $(document).ready(function(){
    player1.actionBar($('#player1-action-bar'),'player1-mana-bar');  
    weaponAttackWrapper(player1,player2)
    mageActionWrapper(player1,player2)
    //ifHumanRaceActionLoadIn()
    //ifOrcRaceActionLoadIn(player1, player1Race)
    foodItemAction(player1)
  })

  ifHumanRace(player1, player1Race)
  ifHumanActions()
}
