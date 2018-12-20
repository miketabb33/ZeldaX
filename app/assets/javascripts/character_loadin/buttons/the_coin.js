function theCoinWrapper(firstPlayer,secondPlayer){
  if(activePlayer == secondPlayer.ID){
    $('#player'+firstPlayer.ID+'-moves').append('<button type="button" id="the-coin'+firstPlayer.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
    theCoinDetails($('#the-coin'+firstPlayer.ID), firstPlayer);
    theCoin($('#the-coin'+firstPlayer.ID), firstPlayer,'the-coin')
  }
}