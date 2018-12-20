$(document).ready(function(){
  initPreFightVisual();

  $('#start-fight-button').on('click', function(){ 
    initFight();
    initFightVisual();
    firstTurnNotifier()
    $("#click-sfx")[0].play();
    $("#bg-music1-sfx").prop("volume", 0.8)[0].play();
  });

  $('#end-turn-button').on('click',function(){
    nextPlayer();
  });
})