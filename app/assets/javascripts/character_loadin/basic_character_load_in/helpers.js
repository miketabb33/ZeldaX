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

function basicCharacterLoadIn(player,playerID){
  $('.'+playerID+'-character-name').text(player.characterName);
  $('.'+playerID+'-character-race').text(player.characterRace);
  $('.'+playerID+'-character-class').text(player.characterClass);
  $('.'+playerID+'-character-level').text(player.characterLevel);
  statPopoverLoadin($('#'+playerID+'-stat-popover-header'),$('#'+playerID+'-stat-popover-body'),player);
  $('#'+playerID+'-stat-info-popover').hide();
  statPopoverHover($('#'+playerID+'-stat-info-activator'), $('#'+playerID+'-stat-info-popover'))
}

function hoverButtonDetails(button, ability, damage){
  damage = damage.join('-')
  button.tooltip({title: damage+ " damage | "+ability.manaCost  +" mana Type: "+ ability.type, placement: "right"}); 
  button.text(ability.name);
}