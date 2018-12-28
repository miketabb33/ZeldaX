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
    if (timeLeftInTurn <= 10 && timeLeftInTurn%2 === 0){
      $("#tick1-sfx").prop("volume", 0.5)[0].play();
    } else if (timeLeftInTurn <= 10 && !timeLeftInTurn%2 === 0){
      $("#tick2-sfx").prop("volume", 0.5)[0].play();
    } 
    if (timeLeftInTurn < 7){
      $("#clock-sfx")[0].play();
    }    
  }, 1000);
}