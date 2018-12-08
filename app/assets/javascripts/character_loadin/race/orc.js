//Blood Fury: orcs get 5% boost on booth attack power and spell power

function ifOrcRace(player, playerRace){
  if (playerRace === "Orc"){
    player.characterRace = playerRace
    player.attackPower = Math.ceil(player.attackPower *1.05);
    player.spellPower = Math.ceil(player.spellPower *1.05);
  }
}

// $(document).ready(function(){
//   $('#player2-moves').append('<button type="button" id="attack2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
//   player2BasicDamageAbilityGen($('#attack2'),player2.abilities.attack);
//   visualBasicActionButtonDetailsPlayer2($('#attack2'), player2.abilities.attack);
// })