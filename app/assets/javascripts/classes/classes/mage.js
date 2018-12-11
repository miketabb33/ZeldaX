var Mage =Object.create(Character);

Mage.characterClass = 'Mage';
Mage.actionsPerTurn = 2;
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
  fireball:{
    type: 'spell',
    name: 'Fireball',
    manaCost: 30*2,
    damage: [14,22],
  },
  pyroBlastD: {
    type: 'melee',
    name: 'Ice Punch',
    manaCost: 45,
    damage: [9,13],
  }
}
