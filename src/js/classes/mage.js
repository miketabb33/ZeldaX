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
    manaCost: 60,
    damage: [14,22],
    dot: {
      name: 'Fireball burn',
      damage:[2,6],
      turns: 2
    },
  },
  pyroBlastD: {
    type: 'melee',
    name: 'Ice Punch',
    manaCost: 90,
    damage: [22,34],
  },
  frostArmor: {
    type: 'buff',
    name: 'Frost Armor',
    manaCost: 100,
    armorGain: 60,
    turns: 2
  }
}