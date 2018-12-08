function statPopoverLoadin(headerID,bodyID,player){    
  headerID.html(player.characterName +"'s Stats");
  bodyID.html('Critical: '+player.crit+'%<br>'
             +'Block: '+player.block+'%<br>'
             +'Attack Power: '+player.attackPower+'<br>'
             +'Spell Power: '+player.spellPower+'<br>' 
             +'Armor: '+player.equippedArmor+'<br>'
             +'Spirit: '+ player.spirit)
}

function statPopoverHover(activatorSelector, infoSelector){
  activatorSelector.hover(
    function(){
      infoSelector.show();
    }, function(){
      infoSelector.hide();
    }
  )
}

function visualActionButtonDetails(button, ability){
  button.tooltip({title: ability.displayDamage+ " damage | "+ability.manaCost  +" mana Type: "+ ability.type, placement: "right"}); 
  button.text(ability.name);
}

function visualBasicActionButtonDetailsPlayer1(button, ability){
  damage = player1EquippedWeaponDamage.join('-')
  button.tooltip({title: damage+ " damage | "+ability.manaCost  +" mana", placement: "right"}); 
  button.text(ability.name);
}

function visualBasicActionButtonDetailsPlayer2(button, ability){
  damage = player2EquippedWeaponDamage.join('-')
  button.tooltip({title: damage+ " damage | "+ability.manaCost  +" mana", placement: "right"}); 
  button.text(ability.name);
}