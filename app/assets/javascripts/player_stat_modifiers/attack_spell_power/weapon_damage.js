function addAttackPowerToWeaponDamage(player, baseWeaponDamage){
  attackPower = player.attackPowerMultiplyer * player.attackPower
  player.equippedWeaponDamage = baseWeaponDamage.map(x => Math.floor(x * attackPower))
}
