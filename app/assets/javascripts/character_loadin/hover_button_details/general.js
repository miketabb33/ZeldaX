function oneHitAttackHoverButtonDetails(button, ability, damage){
  damage = damage.join('-')
  button.tooltip({title: damage+ " damage | "+ability.manaCost  +" mana Type: "+ ability.type, placement: "right"}); 
  button.text(ability.name);
}