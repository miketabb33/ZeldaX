if (player2Class === 'Mage'){
  var player2 =Object.create(Mage);

  characterBase(player2,player2Name,player2Race,player2AvatarPhoto,player2Level,
                         player2BaseHealth,player2MaxMana,player2BaseStamina,
                         player2EquippedStamina,player2BaseStrength,player2EquippedStrength,
                         player2BaseAgility,player2EquippedAgility,player2BaseIntellect,
                         player2EquippedIntellect, player2BaseSpirit, player2EquippedSpirit, player2BaseCrit,player2EquippedCrit,
                         player2EquippedAttackPower,player2EquippedSpellPower,
                         player2EquippedWeaponDamage,player2EquippedArmor,player2BaseBlock,
                         player2EquippedBlock)

  $(document).ready(function(){
    player2.actionBar($('#player2-action-bar'),'player2-mana-bar');

    if (player2.characterLevel >=1){
      //attack
      $('#player2-moves').append('<button type="button" id="attack2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player2BasicDamageAbilityGen($('#attack2'),player2.abilities.attack);
      visualBasicActionButtonDetailsPlayer2($('#attack2'), player2.abilities.attack);
      //firebolt
      $('#player2-moves').append('<button type="button" id="fire-bolt2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player2DamageAbilityGen($('#fire-bolt2'),player2.abilities.fireBoltD);
      visualActionButtonDetails($('#fire-bolt2'), player2.abilities.fireBoltD); 
    } 

    if(player2.characterLevel >=2){
      //pyroblast
      $('#player2-moves').append('<button type="button" id="pyro-blast2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player2DamageAbilityGen($('#pyro-blast2'),player2.abilities.pyroBlastD);
      visualActionButtonDetails($('#pyro-blast2'), player2.abilities.pyroBlastD);
    }
    //ifHumanRaceActionLoadIn(player2, player2Race)
    
  })
  ifOrcRaceActionLoadIn(player2, player2Race)
}


