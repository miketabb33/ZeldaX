function ifOrcRaceStatBoost(player){
  if (player.characterRace === "Orc"){
    player.attackPower = Math.ceil(player.attackPower *1.05);
    player.spellPower = Math.ceil(player.spellPower *1.05);
  }
}

function ifHumanRaceStatBoost(player){
  if (player.characterRace === "Human"){
    player.baseCrit += 2;
  }
}