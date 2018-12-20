function weaponAttackWrapper(attackingPlayer, receivingPlayer){
  $('#player'+attackingPlayer.ID+'-moves').append('<button type="button" id="attack'+attackingPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
  oneHitAttackHoverButtonDetails($('#attack'+attackingPlayer.ID), attackingPlayer.abilities.attack, attackingPlayer.equippedWeaponDamage);
  weaponAttack($('#attack'+attackingPlayer.ID),attackingPlayer, receivingPlayer,attackingPlayer.abilities.attack, 'attack');
}