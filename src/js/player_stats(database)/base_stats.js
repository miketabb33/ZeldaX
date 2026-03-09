function player1BaseStatWrapper(){
  ifHumanBaseStatsPlayer1()
  ifDwarfBaseStatsPlayer1() 
  ifNightElfBaseStatsPlayer1()
  ifGnomeBaseStatsPlayer1()
  ifOrcBaseStatsPlayer1() 
  ifUndeadBaseStatsPlayer1() 
  ifTaurenBaseStatsPlayer1()
  ifTrollBaseStatsPlayer1()
}

function player2BaseStatWrapper(){
  ifHumanBaseStatsPlayer2()
  ifDwarfBaseStatsPlayer2()
  ifNightElfBaseStatsPlayer2()
  ifGnomeBaseStatsPlayer2()
  ifOrcBaseStatsPlayer2()
  ifUndeadBaseStatsPlayer2()
  ifTaurenBaseStatsPlayer2()
  ifTrollBaseStatsPlayer2()
}

//Human
function ifHumanBaseStatsPlayer1(){
  if(player1Race === 'Human'){
    player1BaseStamina = 20;
    player1BaseStrength = 20;
    player1BaseAgility = 20;
    player1BaseIntellect = 20;
    player1BaseSpirit= 20;
  }
}

function ifHumanBaseStatsPlayer2(){
  if(player2Race === 'Human'){
    player2BaseStamina = 20;
    player2BaseStrength = 20;
    player2BaseAgility = 20;
    player2BaseIntellect = 20;
    player2BaseSpirit= 20;
  }
}

//Dwarf
function ifDwarfBaseStatsPlayer1(){
  if(player1Race === 'Dwarf'){
    player1BaseStamina = 23;
    player1BaseStrength = 22;
    player1BaseAgility = 16;
    player1BaseIntellect = 19;
    player1BaseSpirit= 19;
  }
}

function ifDwarfBaseStatsPlayer2(){
  if(player2Race === 'Dwarf'){
    player2BaseStamina = 23;
    player2BaseStrength = 22;
    player2BaseAgility = 16;
    player2BaseIntellect = 19;
    player2BaseSpirit= 19;
  }
}

//Night Elf
function ifNightElfBaseStatsPlayer1(){
  if(player1Race === 'Night Elf'){
    player1BaseStamina = 19;
    player1BaseStrength = 17;
    player1BaseAgility = 25;
    player1BaseIntellect = 20;
    player1BaseSpirit= 20;
  }
}

function ifNightElfBaseStatsPlayer2(){
  if(player2Race === 'Night Elf'){
    player2BaseStamina = 19;
    player2BaseStrength = 17;
    player2BaseAgility = 25;
    player2BaseIntellect = 20;
    player2BaseSpirit= 20;
  }
}

//Gnome
function ifGnomeBaseStatsPlayer1(){
  if(player1Race === 'Gnome'){
    player1BaseStamina = 19;
    player1BaseStrength = 15;
    player1BaseAgility = 23;
    player1BaseIntellect = 24;
    player1BaseSpirit= 20;
  }
}

function ifGnomeBaseStatsPlayer2(){
  if(player2Race === 'Gnome'){
    player2BaseStamina = 19;
    player2BaseStrength = 15;
    player2BaseAgility = 23;
    player2BaseIntellect = 24;
    player2BaseSpirit= 20;
  }
}

//Orc
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

//Undead
function ifUndeadBaseStatsPlayer1(){
  if(player1Race === 'Undead'){
    player1BaseStamina = 21;
    player1BaseStrength = 19;
    player1BaseAgility = 18;
    player1BaseIntellect = 18;
    player1BaseSpirit= 25;
  }
}

function ifUndeadBaseStatsPlayer2(){
  if(player2Race === 'Undead'){
    player2BaseStamina = 21;
    player2BaseStrength = 19;
    player2BaseAgility = 18;
    player2BaseIntellect = 18;
    player2BaseSpirit= 25;
  }
}

//Tauren
function ifTaurenBaseStatsPlayer1(){
  if(player1Race === 'Tauren'){
    player1BaseStamina = 22;
    player1BaseStrength = 25;
    player1BaseAgility = 15;
    player1BaseIntellect = 15;
    player1BaseSpirit= 22;
  }
}

function ifTaurenBaseStatsPlayer2(){
  if(player2Race === 'Tauren'){
    player2BaseStamina = 22;
    player2BaseStrength = 25;
    player2BaseAgility = 15;
    player2BaseIntellect = 15;
    player2BaseSpirit= 22;
  }
}

//Troll
function ifTrollBaseStatsPlayer1(){
  if(player1Race === 'Troll'){
    player1BaseStamina = 21;
    player1BaseStrength = 21;
    player1BaseAgility = 12;
    player1BaseIntellect = 16;
    player1BaseSpirit= 21;
  }
}

function ifTrollBaseStatsPlayer2(){
  if(player2Race === 'Troll'){
    player2BaseStamina = 21;
    player2BaseStrength = 21;
    player2BaseAgility = 12;
    player2BaseIntellect = 16;
    player2BaseSpirit= 21;
  }
}
