function buffListenerWrapper(){
  if (activePlayer === 1){
    manaAddArmorListener(player2, player2.abilities.frostArmor,player2.buffState.frostArmor, 'fa-shield-alt')    
  } else {
    manaAddArmorListener(player1, player1.abilities.frostArmor,player1.buffState.frostArmor, 'fa-shield-alt')  
  }
}