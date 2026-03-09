//init
function initPreFightVisual(){
  $('#fight-display').hide();
  $('#turn-popup-notifier').hide()
  $('#full-grayed-out-screen').hide()
}

function initFightVisual(){
  $('#dot-display-player1').hide()
  $('#dot-display-player2').hide()
  $('#buff-hot-display-player1').hide()
  $('#buff-hot-display-player2').hide()
  $('#prefight-display').hide();
  $('#fight-display').show();
  $('#end-turn-timer').hide();
  $('#actions-left-in-turn').text(actionsLeftInTurn+' Actions Left');
  $('#winner-display-turn-board').css('display','none')
  $('#fight-again').hide();
  $('#player1-moves').hide();
  $('#player2-moves').hide();
}

//nextplayer
function lastPlayerVisualRemover(){
  $('#player'+notActivePlayer+'-moves').hide();
  $('.player'+notActivePlayer+'-card').removeClass('active-player')
  $('#player'+notActivePlayer+'-turn-arrow').hide()
  $('.player'+activePlayer+'-avatar-photo').removeClass('gray-photo')
  $('#end-turn-timer').hide();
  $('.attack-actions').removeClass('end-turn-disabled-abilities');
}

function activePlayerVisualAdder(){
  $('.player'+notActivePlayer+'-avatar-photo').addClass('gray-photo')
  $('.player'+activePlayer+'-card').addClass('active-player')
  $('#player'+activePlayer+'-moves').show();
  $('#player'+activePlayer+'-turn-arrow').show()
}

function activePlayerNameDisplay(player){
  $('#whos-turn').text(player.characterName+"'s turn");
}

function anyAvailableActionsAtTurnStart(player){
  if (player.totalMoveCount === $('.ability-disabled-player1').length){
    $('#end-turn-button').removeClass('btn-warning');
    $('#end-turn-button').addClass('btn-success');
  }else{
    $('#actions-left-in-turn').text(actionsLeftInTurn);
    $('#end-turn-button').removeClass('btn-success');
    $('#end-turn-button').addClass('btn-warning');
  }
}