$(document).ready(function(){
  $('.player1-character-name').text(player1.characterName);
  $('.player1-character-race').text(player1.characterRace);
  $('.player1-character-class').text(player1.characterClass);
  $('.player1-character-level').text(player1.characterLevel);
  statPopoverLoadin($('#player1-stat-popover-header'),$('#player1-stat-popover-body'),player1);
  $('#player1-stat-info-popover').hide();
  statPopoverHover($('#player1-stat-info-activator'), $('#player1-stat-info-popover'))
})