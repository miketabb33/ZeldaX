function addAttackPowerToWeaponDamage(player, baseWeaponDamage){
  power = player.attackPowerMultiplyer * player.attackPower
  player.equippedWeaponDamage = baseWeaponDamage.map(x => Math.round((x * power)+x+2.5))
}
