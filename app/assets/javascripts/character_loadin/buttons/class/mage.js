function mageActionWrapper(attackingPlayer, receivingPlayer){
  if (attackingPlayer.characterLevel >=1){
    //fireball
    $('#player'+attackingPlayer.ID+'-moves').append('<button type="button" id="fireball'+attackingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
    oneHitAttackWithDotHoverButtonDetails($('#fireball'+attackingPlayer.ID), attackingPlayer,attackingPlayer.abilities.fireball, attackingPlayer.fireballDamage, attackingPlayer.fireballDamageDot);
    manaOneHitAttackWithDot($('#fireball'+attackingPlayer.ID),attackingPlayer, receivingPlayer,attackingPlayer.abilities.fireball, attackingPlayer.fireballDamage, receivingPlayer.dotState.fireball, 'fa-fire',"fireball");
  
    //frost armor
    $('#player'+attackingPlayer.ID+'-moves').append('<button type="button" id="frost-armor'+attackingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
    manaAddArmorButtonDetails($('#frost-armor'+attackingPlayer.ID),attackingPlayer.abilities.frostArmor);
    manaAddArmor($('#frost-armor'+attackingPlayer.ID),attackingPlayer,attackingPlayer.abilities.frostArmor, attackingPlayer.buffState.frostArmor, 'fa-shield-alt', 'frost-armor')
  } 
  if(attackingPlayer.characterLevel >=2){
    //pyroblast
    $('#player'+attackingPlayer.ID+'-moves').append('<button type="button" id="pyro-blast'+attackingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
    oneHitAttackHoverButtonDetails($('#pyro-blast'+attackingPlayer.ID), attackingPlayer.abilities.pyroBlastD, attackingPlayer.pyroBlastDamage);
    manaOneHitAttack($('#pyro-blast'+attackingPlayer.ID), attackingPlayer, receivingPlayer,attackingPlayer.abilities.pyroBlastD, attackingPlayer.pyroBlastDamage, "ice-punch");
  }
}