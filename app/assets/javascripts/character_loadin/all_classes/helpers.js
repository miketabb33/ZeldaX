function statPopoverLoadin(headerID,bodyID,player){    
  headerID.html(player.characterName +"'s Stats");
  bodyID.html('Stamina: '+player.stamina+'<br>'
             +'Strength: '+player.strength+'<br>'
             +'Agility: '+player.agility+'<br>'
             +'Intellect: '+player.intellect+'<br>'
             +'-Critical: '+player.crit+'%<br>'
             +'-Armor: '+player.equippedArmor+'<br>'
             +'-Spirit: '+ player.spirit)
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
  button.tooltip({title: ability.damage+ " damage | "+ability.manaCost  +" mana", placement: "right"}); 
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