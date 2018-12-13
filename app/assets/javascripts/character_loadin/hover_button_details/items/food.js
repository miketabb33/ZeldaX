function foodHoverButtonDetails(button, player){
  button.tooltip({title: 'Gains '+player.bag.slot1.item.healthRegen+' health | '+player.bag.slot1.count+' total   Type: '+player.bag.slot1.item.type, placement: "right"}); 
  button.text(player.bag.slot1.item.name);
}