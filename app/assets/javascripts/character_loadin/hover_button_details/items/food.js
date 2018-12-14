function foodHoverButtonDetails(button, player){
  button.tooltip({title: 'Gains '+player.bag.slot1.item.healthRegen+' health | <span id="slot1ID-player'+player.ID+'">'+player.bag.slot1.count+'</span> left  <br> Type: '+player.bag.slot1.item.type, placement: "right"}); 
  button.text(player.bag.slot1.item.name);
}