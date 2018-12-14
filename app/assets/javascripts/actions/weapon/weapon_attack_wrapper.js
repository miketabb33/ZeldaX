function weaponAttackWrapper(attckingPlayer, receivingPlayer){
  $('#player'+attckingPlayer.ID+'-moves').append('<button type="button" id="attack'+attckingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
  oneHitAttackHoverButtonDetails($('#attack'+attckingPlayer.ID), attckingPlayer.abilities.attack, attckingPlayer.equippedWeaponDamage);
  weaponAttack($('#attack'+attckingPlayer.ID),attckingPlayer, receivingPlayer,attckingPlayer.abilities.attack);
}