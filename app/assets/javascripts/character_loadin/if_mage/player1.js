if (player1Class === 'Mage'){
  var player1 =Object.create(Mage);
  player1.ID = 'player1'

  characterBase(player1,player1Name,player1Race,player1AvatarPhoto,player1Level,
                         player1BaseHealth,player1MaxMana,player1BaseStamina,
                         player1EquippedStamina,player1BaseStrength,player1EquippedStrength,
                         player1BaseAgility,player1EquippedAgility,player1BaseIntellect,
                         player1EquippedIntellect,player1BaseSpirit,player1EquippedSpirit,player1BaseCrit,player1EquippedCrit,
                         player1EquippedAttackPower,player1EquippedSpellPower,
                         player1EquippedWeaponDamage,player1EquippedArmor,player1BaseBlock,
                         player1EquippedBlock)
  racialStatBoostWrapper(player1)

  addAttackPowerToWeaponDamage(player1,player1EquippedWeaponDamage)
  mageAttackSpellPowerWrapper(player1)
  
  console.log(player1)

  $(document).ready(function(){
    player1.actionBar($('#player1-action-bar'),'player1-mana-bar');
   
    if (player1.characterLevel >=1){
      //attack
      $('#player1-moves').append('<button type="button" id="attack1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      weaponAttack($('#attack1'),player1.abilities.attack, player1, player2,player1.ID,player2.ID);
      visualActionButtonDetails($('#attack1'), player1.abilities.attack, player1.equippedWeaponDamage);
      //firebolt
      $('#player1-moves').append('<button type="button" id="fire-bolt1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      manaUserOneHitAttack($('#fire-bolt1'),player1.abilities.fireBoltD, player1.fireBoltDamage, player1, player2,player1.ID,player2.ID);
      visualActionButtonDetails($('#fire-bolt1'), player1.abilities.fireBoltD, player1.fireBoltDamage);
    } 
    if(player1.characterLevel >=2){
      //pyroblast
      $('#player1-moves').append('<button type="button" id="pyro-blast1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      manaUserOneHitAttack($('#pyro-blast1'),player1.abilities.pyroBlastD, player1.pyroBlastDamage, player1, player2,player1.ID,player2.ID);
      visualActionButtonDetails($('#pyro-blast1'), player1.abilities.pyroBlastD, player1.pyroBlastDamage);
    }
    //ifHumanRaceActionLoadIn()
    //ifOrcRaceActionLoadIn(player1, player1Race)
  })
}

