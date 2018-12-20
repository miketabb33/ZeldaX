var isGameOn, actionsLeftInTurn, totalTimePerTurn, timeLeftInTurn, 
t, activePlayer;

function initPreFightVisual(){
  $('#fight-display').hide();
  $('#turn-popup-notifier').hide()
  $('#full-grayed-out-screen').hide()
}

function initFight(){
  isGameOn = true;
  activePlayer = Math.ceil(Math.random()*2);
  activePlayer === 1 ? notActivePlayer = 2 : notActivePlayer = 1;
  activePlayer === 1 ? activePlayerAccessor = player1 : activePlayerAccessor = player2;
  activePlayer === 1 ? notActivePlayerAccessor = player2 : notActivePlayerAccessor = player1;
  player1.enoughMana = true;
  player2.enoughMana = true;
  player1.remainingHealth = player1.maxHealth;
  player1.remainingMana = player1.maxMana;
  player2.remainingHealth = player2.maxHealth;
  player2.remainingMana = player2.maxMana;
  player1.totalMoveCount = $('#player1-moves > button').length;
  player2.totalMoveCount = $('#player2-moves > button').length;
  actionsLeftInTurn = player1.actionsPerTurn;
  totalTimePerTurn = 35;
  timeLeftInTurn = totalTimePerTurn;
  theCoinWrapper(notActivePlayerAccessor, activePlayerAccessor)
}


function initFightVisual(){
  $('#dot-display-player1').hide()
  $('#dot-display-player2').hide()
  $('#buff-hot-display-player1').hide()
  $('#buff-hot-display-player2').hide()
  $('#prefight-display').hide();
  $('#fight-display').show();
  $('#end-turn-timer').hide();
  $('#player'+notActivePlayer+'-moves').hide();
  $('#actions-left-in-turn').text(actionsLeftInTurn+' Actions Left');
  $('#winner-display-turn-board').css('display','none')
  $('#fight-again').hide();
  $('.player2-avatar-photo').addClass('gray-photo')
}

function timerStart(){
  t = setInterval(function(){ 
    timeLeftInTurn -= 1 
    if (timeLeftInTurn === -1){
      nextPlayer()
    }
    if (timeLeftInTurn <= 10){
      $('#end-turn-timer').show()
      $('#end-turn-timer').text(timeLeftInTurn);
    } 
  }, 1000);
}


function firstTurnNotifier(){
  $('#full-grayed-out-screen').show()
  $('#turn-popup-notifier').show()
  $('#turn-popup-notifier').html('<div style="font-size:40px">'+activePlayerAccessor.characterName+'</div> Is first to attack!')
  var popUpTicker = 4;
  popUpTimer = setInterval(function(){ 
     popUpTicker -= 1 
    if (popUpTicker === -1){
      timerStart();
      $('#turn-popup-notifier').hide()
      $('#full-grayed-out-screen').hide()
      createMessage(activePlayerAccessor.characterName+' goes first', false);
      createMessage('Fight!', false);
      healthBarUpdater($('#player2-health-bar'),player2.remainingHealth, player2.maxHealth);
      healthBarUpdater($('#player1-health-bar'),player1.remainingHealth, player1.maxHealth);
      manaBarUpdater($('#player1-mana-bar'), player1.remainingMana,player1.maxMana);
      manaBarUpdater($('#player2-mana-bar'), player2.remainingMana,player2.maxMana);
      $('#whos-turn').text(activePlayerAccessor.characterName+"'s turn");
      $('#player'+activePlayer+'-turn-arrow').show()
      $('.player'+activePlayer+'-card').addClass('active-player')
      $("#match-start-sfx")[0].play();
    }
  }, 1000);
}

