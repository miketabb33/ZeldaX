function mageAttackSpellPowerWrapper(player){
  addSpellPowerFireball(player)
  addSpellPowerFireballDot(player)
  addAttackPowerPyroBlast(player)
}

function addSpellPowerFireball(player){
  power = player.spellPowerMultiplyer * player.spellPower
  player.fireballDamage = player.abilities.fireball.damage.map(x => Math.floor((x * power)+x))
}

function addSpellPowerFireballDot(player){
  power = player.spellPowerMultiplyer * player.spellPower
  player.fireballDamageDot = player.abilities.fireball.dot.damage.map(x => Math.floor((x * power)+x))
}

function addAttackPowerPyroBlast(player){
  attackPower = player.attackPowerMultiplyer * player.attackPower
  player.pyroBlastDamage = player.abilities.pyroBlastD.damage.map(x => Math.floor((x * attackPower)+x))
}