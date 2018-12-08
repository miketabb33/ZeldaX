function ifHumanBaseStatsPlayer1(){
  if(player1Race === 'Human'){
    player1BaseStamina = 20;
    player1BaseStrength = 20;
    player1BaseAgility = 20;
    player1BaseIntellect = 20;
    player1BaseSpirit= 21;
    //racials
    player1BaseCrit +=2
  }
}

function ifHumanBaseStatsPlayer2(){
  if(player2Race === 'Human'){
    player2BaseStamina = 20;
    player2BaseStrength = 20;
    player2BaseAgility = 20;
    player2BaseIntellect = 20;
    player2BaseSpirit= 20;
    //racials
    player1BaseCrit +=2
  }
}

function ifOrcBaseStatsPlayer1(){
  if(player1Race === 'Orc'){
    player1BaseStamina = 22;
    player1BaseStrength = 23;
    player1BaseAgility = 17;
    player1BaseIntellect = 17;
    player1BaseSpirit= 23;
  }
}

function ifOrcBaseStatsPlayer2(){
  if(player2Race === 'Orc'){
    player2BaseStamina = 22;
    player2BaseStrength = 23;
    player2BaseAgility = 17;
    player2BaseIntellect = 17;
    player2BaseSpirit= 23;
  }
}