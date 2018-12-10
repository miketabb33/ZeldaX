function mageAttackSpellPowerWrapper(player){
  addSpellPowerFireBolt(player)
  addAttackPowerPyroBlast(player)
}

function addSpellPowerFireBolt(player){
  spellPower = player.spellPowerMultiplyer * player.spellPower
  player.fireBoltDamage = player.abilities.fireBoltD.damage.map(x => Math.floor(x * spellPower))
}

function addAttackPowerPyroBlast(player){
  attackPower = player.attackPowerMultiplyer * player.attackPower
  player.pyroBlastDamage = player.abilities.pyroBlastD.damage.map(x => Math.floor(x * attackPower))
}