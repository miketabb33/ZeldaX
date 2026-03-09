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

function foodHoverButtonDetails(button, player){
  button.tooltip({title: 'Gains '+player.bag.slot1.item.healthRegen+' health <br> Starts with '+player.bag.slot1.count+'<br> Type: '+player.bag.slot1.item.type, placement: "right"}); 
  button.text(player.bag.slot1.item.name);
}

function theCoinDetails(button,player){
  button.tooltip({title: 'Gains '+ player.spirit+' mana <br> The Coin does not cost an action.', placement: "right"}); 
  button.text('The Coin');
}