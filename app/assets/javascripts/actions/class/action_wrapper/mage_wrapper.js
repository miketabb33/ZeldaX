function mageActionWrapper(attckingPlayer, receivingPlayer){
  if (attckingPlayer.characterLevel >=1){
    //fireball
    $('#player'+attckingPlayer.ID+'-moves').append('<button type="button" id="fireball'+attckingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
    manaOneHitAttackWithDot($('#fireball'+attckingPlayer.ID),attckingPlayer.abilities.fireball, attckingPlayer.fireballDamage, attckingPlayer, receivingPlayer);
    oneHitAttackHoverButtonDetails($('#fireball'+attckingPlayer.ID), attckingPlayer.abilities.fireball, attckingPlayer.fireballDamage);
  } 
  if(attckingPlayer.characterLevel >=2){
    //pyroblast
    $('#player'+attckingPlayer.ID+'-moves').append('<button type="button" id="pyro-blast'+attckingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
    manaOneHitAttack($('#pyro-blast'+attckingPlayer.ID),attckingPlayer.abilities.pyroBlastD, attckingPlayer.pyroBlastDamage, attckingPlayer, receivingPlayer);
    oneHitAttackHoverButtonDetails($('#pyro-blast'+attckingPlayer.ID), attckingPlayer.abilities.pyroBlastD, attckingPlayer.pyroBlastDamage);
  }
}