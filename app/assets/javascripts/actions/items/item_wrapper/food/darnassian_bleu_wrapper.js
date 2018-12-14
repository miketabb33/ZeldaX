function foodItemAction(player){
  $('#player'+player.ID+'-moves').append('<button type="button" id="darnassian-bleu-food'+player.ID+'" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip" data-html="true"></button>');
  foodHoverButtonDetails($('#darnassian-bleu-food'+player.ID), player);
  foodRegenAction($('#darnassian-bleu-food'+player.ID),player);
}