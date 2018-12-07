$(document).ready(function(){
  $('.player2-character-name').text(player2.characterName);
  $('.player2-character-race').text(player2.characterRace);
  $('.player2-character-class').text(player2.characterClass);
  $('.player2-character-level').text(player2.characterLevel);
  statPopoverLoadin($('#player2-stat-popover-header'),$('#player2-stat-popover-body'),player2);
  $('#player2-stat-info-popover').hide();
  statPopoverHover($('#player2-stat-info-activator'), $('#player2-stat-info-popover'))
})