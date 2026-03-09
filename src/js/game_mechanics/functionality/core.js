//init
function initActivePlayer(){
  activePlayer = Math.ceil(Math.random()*2);
}

//next player
function activePlayerSwitcher(){
  activePlayer === 1 ? activePlayer = 2: activePlayer = 1;   
}

//init and next player
function activePlayerVariablesSetter(){
  activePlayer === 1 ? notActivePlayer = 2 : notActivePlayer = 1;
  activePlayer === 1 ? activePlayerAccessor = player1 : activePlayerAccessor = player2;
  activePlayer === 1 ? notActivePlayerAccessor = player2 : notActivePlayerAccessor = player1;
}
