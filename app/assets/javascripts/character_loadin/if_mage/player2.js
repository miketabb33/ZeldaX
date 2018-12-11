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
  //mageStatBoost(player2)
  ifHumanRaceStatBoost(player2)
  //
  derivedStats(player2)
  ifOrcRaceStatBoost(player1)

  addAttackPowerToWeaponDamage(player2, player2EquippedWeaponDamage)
  mageAttackSpellPowerWrapper(player2)


  // console.log('stamina: '+player2.stamina)
  // console.log('strength: '+player2.strength)
  // console.log('agility: '+player2.agility)
  // console.log('intellect: '+player2.intellect)
  // console.log('spirit: '+player2.spirit)
  console.log(player2)

  $(document).ready(function(){
    player2.actionBar($('#player2-action-bar'),'player2-mana-bar');

    if (player2.characterLevel >=1){
      //attack
      $('#player2-moves').append('<button type="button" id="attack2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      weaponAttack($('#attack2'),player2.abilities.attack,player2,player1,player2.ID,player1.ID);
      hoverButtonDetails($('#attack2'), player2.abilities.attack, player2.equippedWeaponDamage);
      //fireball
      $('#player2-moves').append('<button type="button" id="fireball2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      manaUserOneHitAttack($('#fireball2'),player2.abilities.fireball, player2.fireballDamage, player2,player1,player2.ID,player1.ID);
      hoverButtonDetails($('#fireball2'), player2.abilities.fireball, player2.fireballDamage); 
    } 
    if(player2.characterLevel >=2){
      //pyroblast
      $('#player2-moves').append('<button type="button" id="pyro-blast2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      manaUserOneHitAttack($('#pyro-blast2'),player2.abilities.pyroBlastD,player2.pyroBlastDamage, player2,player1,player2.ID,player1.ID);
      hoverButtonDetails($('#pyro-blast2'), player2.abilities.pyroBlastD,player2.pyroBlastDamage);
    }
    //ifHumanRaceActionLoadIn(player2, player2Race)
    //ifOrcRaceActionLoadIn(player2.characterRace)
  })
}


