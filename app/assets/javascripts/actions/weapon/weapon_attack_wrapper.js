function weaponAttackWrapper(attckingPlayer, receivingPlayer){
  $('#player'+attckingPlayer.ID+'-moves').append('<button type="button" id="attack'+attckingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
  weaponAttack($('#attack'+attckingPlayer.ID),attckingPlayer.abilities.attack, attckingPlayer, receivingPlayer);
  oneHitAttackHoverButtonDetails($('#attack'+attckingPlayer.ID), attckingPlayer.abilities.attack, attckingPlayer.equippedWeaponDamage);
}