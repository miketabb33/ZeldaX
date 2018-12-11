function mageAttackSpellPowerWrapper(player){
  addSpellPowerFireball(player)
  addAttackPowerPyroBlast(player)
}

function addSpellPowerFireball(player){
  power = player.spellPowerMultiplyer * player.spellPower
  console.log(power)
  player.fireballDamage = player.abilities.fireball.damage.map(x => Math.floor((x * power)+x))
}

function addAttackPowerPyroBlast(player){
  attackPower = player.attackPowerMultiplyer * player.attackPower
  player.pyroBlastDamage = player.abilities.pyroBlastD.damage.map(x => Math.floor((x * attackPower)+x))
}