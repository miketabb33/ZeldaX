function mageActionWrapper(attckingPlayer, receivingPlayer){
  if (attckingPlayer.characterLevel >=1){
    //fireball
    $('#player'+attckingPlayer.ID+'-moves').append('<button type="button" id="fireball'+attckingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
    oneHitAttackWithDotHoverButtonDetails($('#fireball'+attckingPlayer.ID), attckingPlayer,attckingPlayer.abilities.fireball, attckingPlayer.fireballDamage, attckingPlayer.fireballDamageDot);
    manaOneHitAttackWithDot($('#fireball'+attckingPlayer.ID),attckingPlayer, receivingPlayer,attckingPlayer.abilities.fireball, attckingPlayer.fireballDamage, receivingPlayer.dotState.fireball);
  
    //frost armor
    $('#player'+attckingPlayer.ID+'-moves').append('<button type="button" id="frost-armor'+attckingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
    manaAddArmorButtonDetails($('#frost-armor'+attckingPlayer.ID),attckingPlayer.abilities.frostArmor);
    manaAddArmor($('#frost-armor'+attckingPlayer.ID),attckingPlayer,attckingPlayer.abilities.frostArmor, attckingPlayer.buffState.frostArmor)
  } 
  if(attckingPlayer.characterLevel >=2){
    //pyroblast
    $('#player'+attckingPlayer.ID+'-moves').append('<button type="button" id="pyro-blast'+attckingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
    oneHitAttackHoverButtonDetails($('#pyro-blast'+attckingPlayer.ID), attckingPlayer.abilities.pyroBlastD, attckingPlayer.pyroBlastDamage);
    manaOneHitAttack($('#pyro-blast'+attckingPlayer.ID), attckingPlayer, receivingPlayer,attckingPlayer.abilities.pyroBlastD, attckingPlayer.pyroBlastDamage);
  }
}