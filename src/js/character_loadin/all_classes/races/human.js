function ifHumanRace(player, playerRace){
  if (playerRace === "Human"){
    player.characterRace = playerRace;
    player.crit +=2;
  }
}