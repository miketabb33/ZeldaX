function ifOrcRaceStatBoost(player){
  if (player.characterRace === "Orc"){
    //blood fury: 5% increase of attack and spell power
    player.attackPower = Math.round(player.attackPower *1.05);
    player.spellPower = Math.round(player.spellPower *1.05);
  }
}

function ifHumanRaceStatBoost(player){
  if (player.characterRace === "Human"){
    //human spirit: 5% increase of spirit and 2% addition to critical hit chance
    player.crit += 2;
    player.spirit = Math.round(player.spirit *1.05)
  }
}