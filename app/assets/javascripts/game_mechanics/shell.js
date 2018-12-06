initPreFight()
initPreFightVisual();

$('#start-fight-button').on('click', function(){ 
  initFight();
  initFightVisual();
  timerStart();
});

$('#fight-again-button').on('click',function(){
  resetGame();
  resetMessageBoard();
});

$('#end-turn-button').on('click',function(){
  nextPlayer();
});