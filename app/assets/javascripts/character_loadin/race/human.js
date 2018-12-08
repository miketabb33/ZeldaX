//The Human Spirit: humans get a 2% addition to total crit

function ifHumanRace(player, playerRace){
  if (playerRace === "Human"){
    player.characterRace = playerRace
    player.crit += 2;
  }
}

// $(document).ready(function(){
//   $('#player1-moves').append('<button type="button" id="smash1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
//   player1BasicDamageAbilityGen($('#smash1'),player1.abilities.attack);
//   visualBasicActionButtonDetailsPlayer1($('#shash1'), player1.abilities.attack);
// })