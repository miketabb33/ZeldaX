function baseCharacterLoadIn(player,playerID){
  $('.player'+playerID+'-character-name').text(player.characterName);
  $('.player'+playerID+'-character-race').text(player.characterRace);
  $('.player'+playerID+'-character-class').text(player.characterClass);
  $('.player'+playerID+'-character-level').text(player.characterLevel);
  statPopoverLoadin($('#player'+playerID+'-stat-popover-header'),$('#player'+playerID+'-stat-popover-body'),player);
  $('#player'+playerID+'-stat-info-popover').hide();
  statPopoverHover($('#player'+playerID+'-stat-info-activator'), $('#player'+playerID+'-stat-info-popover'))
}

function statPopoverLoadin(headerID,bodyID,player){    
  headerID.html(player.characterName +"'s Stats");
  bodyID.html('Critical: '+player.crit+'%<br>'
             +'Block: '+player.block+'%<br>'
             +'Attack Power: '+player.attackPower+'<br>'
             +'Spell Power: '+player.spellPower+'<br>' 
             +'Armor: <span id="equipped-armor-player'+player.ID+'">'+player.equippedArmor+'</span><br>'
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



