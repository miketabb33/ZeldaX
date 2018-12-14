function oneHitAttackHoverButtonDetails(button, ability, damage){
  damage = damage.join('-')
  button.tooltip({title: damage+ " damage | "+ability.manaCost  +" mana <br> Type: "+ ability.type, placement: "right"}); 
  button.text(ability.name);
}

function oneHitAttackWithDotHoverButtonDetails(button, player,ability, mainDamage, dotDamage){
  mainDamage = mainDamage.join('-')
  dotDamage = dotDamage.join('-')
  button.tooltip({title: mainDamage+ " damage | "+ability.manaCost  +" mana <br>Type: "+ ability.type+"<br><small>Deals "+dotDamage+" damage at the end of this and the next attacking turn. </small><br>", placement: "right"}); 
  button.text(ability.name);
}

function manaAddArmorButtonDetails(button,ability){
  button.tooltip({title: "Gains " +ability.armorGain+ " armor for the next " + ability.turns+" turns | "+ability.manaCost  +" mana <br>Type: "+ ability.type, placement: "right"}); 
  button.text(ability.name);
}
