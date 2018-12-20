function dotListenerWrapper(){
  if (activePlayer === 1){
      dotListener(player1, player2,player1.abilities.fireball.dot, player1.fireballDamageDot, player2.dotState.fireball, 'fa fire', 'burn')
  } else {
      dotListener(player2, player1,player2.abilities.fireball.dot, player2.fireballDamageDot, player1.dotState.fireball, 'fa fire', 'burn')
  }
}