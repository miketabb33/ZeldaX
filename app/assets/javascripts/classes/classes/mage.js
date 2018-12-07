var Mage =Object.create(Character);

Mage.characterClass = 'Mage';
Mage.baseSpirit = 12;
Mage.actionBar = function(playerBarID, playerBarType) {
  playerBarID.html('Mana:'+
  '<div class="progress">'+
    '<div class="progress-bar bg-primary" id="'+playerBarType+'"></div>'+
  '</div>');
};
Mage.abilities = {
  attack:{
    name: 'Attack',
    manaCost: 0,
  },
  fireBoltD:{
    name: 'Fire Bolt',
    manaCost: 15,
    damage: 9
  },
  pyroBlastD: {
    name: 'Pyro Blast',
    manaCost: 45,
    damage: 45
  }
}
