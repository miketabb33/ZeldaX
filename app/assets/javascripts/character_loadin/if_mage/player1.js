if (player1Class === 'Mage'){
  var player1 =Object.create(Mage);

  characterBase(player1,player1Name,player1Race,player1AvatarPhoto,player1Level,
                         player1BaseHealth,player1MaxMana,player1BaseStamina,
                         player1EquippedStamina,player1BaseStrength,player1EquippedStrength,
                         player1BaseAgility,player1EquippedAgility,player1BaseIntellect,
                         player1EquippedIntellect,player1BaseSpirit,player1EquippedSpirit,player1BaseCrit,player1EquippedCrit,
                         player1EquippedAttackPower,player1EquippedSpellPower,
                         player1EquippedWeaponDamage,player1EquippedArmor,player1BaseBlock,
                         player1EquippedBlock)

  $(document).ready(function(){
    player1.actionBar($('#player1-action-bar'),'player1-mana-bar');
    
    if (player1.characterLevel >=1){
      //attack
      $('#player1-moves').append('<button type="button" id="attack1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player1BasicDamageAbilityGen($('#attack1'),player1.abilities.attack);
      visualBasicActionButtonDetailsPlayer1($('#attack1'), player1.abilities.attack);
      //firebolt
      $('#player1-moves').append('<button type="button" id="fire-bolt1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player1DamageAbilityGen($('#fire-bolt1'),player1.abilities.fireBoltD);
      visualActionButtonDetails($('#fire-bolt1'), player1.abilities.fireBoltD);
    } 
      
    if(player1.characterLevel >=2){
      //pyroblast
      $('#player1-moves').append('<button type="button" id="pyro-blast1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player1DamageAbilityGen($('#pyro-blast1'),player1.abilities.pyroBlastD);
      visualActionButtonDetails($('#pyro-blast1'), player1.abilities.pyroBlastD);
    }
    //ifHumanRaceActionLoadIn(player1, player1Race)
    
  })
  ifOrcRaceActionLoadIn(player1, player1Race)
}

