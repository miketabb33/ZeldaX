var Mage =Object.create(Character);

Mage.characterClass = 'Mage';
Mage.actionBar = function(playerBarID, playerBarType) {
  playerBarID.html('Mana:'+
  '<div class="progress">'+
    '<div class="progress-bar bg-primary" id="'+playerBarType+'"></div>'+
  '</div>');
};
Mage.abilities = {
  attack:{
    type: 'melee',
    name: 'Attack',
    manaCost: 0,
  },
  fireBoltD:{
    type: 'spell',
    name: 'Fire Bolt',
    manaCost: 15,
    damage: [7,11],
  },
  pyroBlastD: {
    type: 'melee',
    name: 'Ice Punch',
    manaCost: 45,
    damage: [9,13],
  }
}
