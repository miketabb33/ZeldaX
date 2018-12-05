$(document).ready(function(){

  /*
  TO DO:
  Build out the character stats - reference wow
  (check)change volcan/player2 variables to player1/player2 
  build out real moves
  build out warrior class
  (check)set up rematch button
  */

  /*
  BUGS:
  The end turn button is sometimes green on first turn after rematch 
  */

  /*
  NOTES:
  Use switch statement for class load in
  */
  

    
  // Player 1 class load in
  if (player1Class === 'Mage'){
    var player1 =Object.create(Mage);

    characterBase(player1,player1Name,player1AvatarPhoto,player1Level,
                               player1BaseHealth,player1MaxMana,player1BaseStamina,
                               player1EquippedStamina,player1BaseStrength,player1EquippedStrength,
                               player1BaseAgility,player1EquippedAgility,player1BaseIntellect,
                               player1EquippedIntellect,player1BaseCrit,player1EquippedCrit,
                               player1EquippedAttackPower,player1EquippedSpellPower,
                               player1EquippedWeaponDamage,player1EquippedArmor,player1BaseBlock,
                               player1EquippedBlock)

    player1.equippedSpirit = player1TotlaEquippedStats.spirit;
    player1.spirit = player1.baseSpirit + player1.equippedSpirit;

    player1.actionBar($('#player1-action-bar'),'player1-mana-bar');
    
    if (player1.characterLevel >=1){
      //attack
      $('#player1-moves').append('<button type="button" id="attack1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player1DamageAbilityGen($('#attack1'),player1.abilities.attack);
      visualActionButtonDetails($('#attack1'), player1.abilities.attack);
      //firebolt
      $('#player1-moves').append('<button type="button" id="fire-bolt1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player1DamageAbilityGen($('#fire-bolt1'),player1.abilities.fireBoltD);
      visualActionButtonDetails($('#fire-bolt1'), player1.abilities.fireBoltD);
    } 

    if(player1.characterLevel >=2){
      $('#player1-moves').append('<button type="button" id="pyro-blast1" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
      player1DamageAbilityGen($('#pyro-blast1'),player1.abilities.pyroBlastD);
      visualActionButtonDetails($('#pyro-blast1'), player1.abilities.pyroBlastD);
    }
  }

  //player 2 class load in
  if (player2Class === 'Mage'){
    var player2 =Object.create(Mage);
       characterBase(player2,player2Name,player2AvatarPhoto,player2Level,
                                 player2BaseHealth,player2MaxMana,player2BaseStamina,
                                 player2EquippedStamina,player2BaseStrength,player2EquippedStrength,
                                 player2BaseAgility,player2EquippedAgility,player2BaseIntellect,
                                 player2EquippedIntellect,player2BaseCrit,player2EquippedCrit,
                                 player2EquippedAttackPower,player2EquippedSpellPower,
                                 player2EquippedWeaponDamage,player2EquippedArmor,player2BaseBlock,
                                 player2EquippedBlock)

      player2.equippedSpirit = 0;
      player2.spirit = player2.baseSpirit + player2.equippedSpirit;

      player2.actionBar($('#player2-action-bar'),'player2-mana-bar');

      if (player2.characterLevel >=1){
        $('#player2-moves').append('<button type="button" id="fire-bolt2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
        player2DamageAbilityGen($('#fire-bolt2'),player2.abilities.fireBoltD);
        visualActionButtonDetails($('#fire-bolt2'), player2.abilities.fireBoltD); 
      } 

      if(player1.characterLevel >=2){
        $('#player2-moves').append('<button type="button" id="pyro-blast2" class="btn btn-success mt-2 attack-actions" data-toggle="tooltip"></button>');
        player2DamageAbilityGen($('#pyro-blast2'),player2.abilities.pyroBlastD);
        visualActionButtonDetails($('#pyro-blast2'), player2.abilities.pyroBlastD);
      }
  }

  //character functions

  //visual mana cost and name for abilities - tooltip
  function visualActionButtonDetails(button, ability){
    button.tooltip({title: ability.damage+ " damage | "+ability.manaCost  +" mana", placement: "right"}); 
    button.text(ability.name);
  }


  //Ability Actions  
    //player1
  function player1DamageAbilityGen(button,ability){
    button.click(function(){
      console.log('START OF DAMAGE ACTION');
      console.log('is game on?: '+isGameOn);
      console.log('What damage action?" '+ability.name)
      if(isGameOn === true && howManyActionsLeftInTurn > 0){
        enoughManaPlayer1Checker(ability,player1RemainingMana);
        if(enoughManaPlayer1 === true) {
          player2RemainingHealth -= ability.damage;
          player1RemainingMana -= ability.manaCost;
          howManyActionsLeftInTurn -= 1;
          createMessage(ability.name+' success for '+ ability.damage+ ' damage', true);
          abilityAvailabilityChecker()
          anyMorePlayer1AvailableActions();
          actionsLeftInTurnVisualHandler(player1TotalMoveCount, $('.ability-disabled-player1'))
          ifTurnIsZero();
          endOfGameCheckerPlayer1Win();
          endOfGame(player1.characterName,player2.characterName,$('#player2-death-indicator'))
          visualBarUpdater($('#player1-mana-bar'), player1RemainingMana,player1.maxMana,$('#player2-health-bar'),player2RemainingHealth, player2.maxHealth);
          console.log(player2.characterName+"'s remaining health: "+ player2RemainingHealth)
          console.log(player1.characterName+"'s remaining mana: "+player1RemainingMana);
        } 
      }
      console.log(player1.characterName+' disabled moves: '+$('.ability-disabled-player1').length);
      console.log('END OF DAMAGE ACTION');
    });
  }

    //player2
  function player2DamageAbilityGen(button,ability){
    button.click(function(){
      console.log('START OF DAMAGE ACTION');
      console.log('is game on?: '+isGameOn);
      console.log('What damage action?" '+ability.name)
      if(isGameOn === true && howManyActionsLeftInTurn > 0){
      enoughManaplayer2Checker(ability,player2RemainingMana);
        if(enoughManaplayer2 === true) {
          player1RemainingHealth -= ability.damage;
          player2RemainingMana -= ability.manaCost;
          howManyActionsLeftInTurn -= 1;
          createMessage(ability.name+' success for '+ ability.damage+ ' damage', true);
          abilityAvailabilityChecker()
          anyMorePlayer2AvailableActions();
          actionsLeftInTurnVisualHandler(player2TotalMoveCount, $('.ability-disabled-player2'));
          ifTurnIsZero();
          endOfGameCheckerplayer2Win();
          endOfGame(player2.characterName,player1.characterName,$('#player1-death-indicator'));
          visualBarUpdater($('#player2-mana-bar'), player2RemainingMana,player2.maxMana,$('#player1-health-bar'),player1RemainingHealth, player1.maxHealth);
          console.log(player1.characterName+"'s remaining health: "+ player1RemainingHealth);
          console.log(player2.characterName +"'s remaining mana: "+player2RemainingMana);
        } 
      }
      console.log(player2.characterName+' disabled moves: '+ $('.ability-disabled-player2').length);
      console.log('END OF DAMAGE ACTION');
    });
  }

  function enoughManaPlayer1Checker(ability, remainingMana){
    if(remainingMana < ability.manaCost){
      enoughManaPlayer1 = false;
      createMessage('Not enough mana', false);
    } else{
      enoughManaPlayer1 = true;
    }
    console.log('Enough Mana for move?: '+enoughManaPlayer1);
  }

  function enoughManaplayer2Checker(ability, remainingMana){
    if(remainingMana < ability.manaCost){
      enoughManaplayer2 = false;
      createMessage('Not enough mana', false);
    }else{
      enoughManaplayer2 = true;
    }
    console.log('Enough Mana for move?: '+enoughManaplayer2);
  }

  //updates end turn button when all abilities are disabled
  function anyMorePlayer1AvailableActions(){
    if (player1TotalMoveCount === $('.ability-disabled-player1').length){
      $('#end-turn-button').removeClass('btn-warning');
      $('#end-turn-button').addClass('btn-success');
    }    
  }

  function anyMorePlayer2AvailableActions(){
    if (player2TotalMoveCount === $('.ability-disabled-player2').length){
      $('#end-turn-button').removeClass('btn-warning');
      $('#end-turn-button').addClass('btn-success');
    }    
  }

  function actionsLeftInTurnVisualHandler(playerTotalMoveCount, abilityDisabledSelector){
    if(howManyActionsLeftInTurn === 0 || playerTotalMoveCount === abilityDisabledSelector.length){
      $('#actions-left-in-turn').text('No ');
    } else{
      $('#actions-left-in-turn').text(howManyActionsLeftInTurn);
    }
  }

  function ifTurnIsZero(){
    if(howManyActionsLeftInTurn === 0){
      $('#end-turn-button').removeClass('btn-warning');
      $('#end-turn-button').addClass('btn-success');
      $('.attack-actions').addClass('end-turn-disabled-abilities');
    }
  }
    //if player1 wins
  function endOfGameCheckerPlayer1Win(){
    if (player2RemainingHealth <= 0){
      player2RemainingHealth = 0;
      isGameOn = false;
    }
  }
    //if player2 wins
  function endOfGameCheckerplayer2Win(){
    if (player1RemainingHealth <= 0){
      player1RemainingHealth = 0;
      isGameOn = false;
    }
  }

  function endOfGame(winner, loser, loserSelector){
    if (isGameOn === false){
      winCounter(winner);
      loserSelector.css('visibility', 'visible');
      $('.attack-actions').addClass('disabled');
      createMessage(loser+' has died', false);
      createMessage(winner+ ' has won!', false);
      $('#turn-board-controls').css('display', 'none');
      $('#winner-display-turn-board').css('display','inline');
      $('#winner-display-turn-board').html('<h1>'+winner+' has won!</h1>');
      $('#fight-again-button').show();
      clearInterval(t);
      stopBGMusic();
    }
  }

//Player info visual load in
$('.player1-character-name').text(player1.characterName);
$('.player1-character-race').text(player1.characterRace);
$('.player1-character-class').text(player1.characterClass);
$('.player1-character-level').text(player1.characterLevel);

$('.player2-character-name').text(player2.characterName);
$('.player2-character-race').text(player2.characterRace);
$('.player2-character-class').text(player2.characterClass);
$('.player2-character-level').text(player2.characterLevel);

  //popover stats load in
statPopoverLoadin($('#player1-stat-popover-header'),$('#player1-stat-popover-body'),player1);
statPopoverLoadin($('#player2-stat-popover-header'),$('#player2-stat-popover-body'),player2);

function statPopoverLoadin(headerID,bodyID,player){    
headerID.html(player.characterName +"'s Stats");
bodyID.html('Stamina: '+player.stamina+'<br>'
           +'Strength: '+player.strength+'<br>'
           +'Agility: '+player.agility+'<br>'
           +'Intellect: '+player.intellect+'<br>'
           +'-Critical: '+player.crit+'<br>'
           +'-Armor: '+player.equippedArmor+'<br>'
           +'-Spirit: '+ player.spirit)
}

//popover stat hover
$('#player1-stat-info-popover').hide();
$('#player2-stat-info-popover').hide();

statPopoverHover($('#player1-stat-info-activator'), $('#player1-stat-info-popover'))
statPopoverHover($('#player2-stat-info-activator'), $('#player2-stat-info-popover'))

function statPopoverHover(activatorSelector, infoSelector){
  activatorSelector.hover(
    function(){
      infoSelector.show();
    }, function(){
      infoSelector.hide();
    }
  )
}

//Game mechanics
  //game state variable
  var isGameOn = true;
  var enoughManaPlayer1 = true;
  var enoughManaplayer2 = true;

  //Current fight variables
  var player1RemainingHealth = player1.maxHealth;
  var player1RemainingMana = player1.maxMana;
  var player2RemainingHealth = player2.maxHealth;
  var player2RemainingMana = player2.maxMana;

  //init visual bars
  visualBarUpdater($('#player1-mana-bar'), player1RemainingMana,player1.maxMana,$('#player2-health-bar'),player2RemainingHealth, player2.maxHealth);
  visualBarUpdater($('#player2-mana-bar'), player2RemainingMana,player2.maxMana,$('#player1-health-bar'),player1RemainingHealth, player1.maxHealth);

  //Turn state
    //variables
  const totalActionsPerTurn = 2;
  var howManyActionsLeftInTurn = totalActionsPerTurn;
  const totalTimePerTurn = 30;
  var timeLeftInTurn = totalTimePerTurn;
  var player1TotalMoveCount = $('#player1-moves > button').length;
  var player2TotalMoveCount = $('#player2-moves > button').length;

  console.log(player1.characterName+"'s available moves: "+player1TotalMoveCount);
  console.log(player2.characterName+"'s available moves: "+player2TotalMoveCount);
    
//init first turn
  var whosTurn = 'player1'; //either player1 or player2
  initFirstTurnVisual();

  function initFirstTurnVisual(){
    $('#end-turn-timer').hide();
    $('#whos-turn').text(player1.characterName+"'s turn");
    $('#player2-moves').hide();
    $('#actions-left-in-turn').text(howManyActionsLeftInTurn);
    $('#winner-display-turn-board').css('display','none')
    createMessage(player1.characterName+' goes first', false);
    createMessage('Fight!', false);
  }

  var t;
//Starting the fight
$('#fight-display').hide();
$('#start-fight-button').on('click', function(){ 
  $('#prefight-display').hide();
  $('#fight-display').show();
  playBGMusic();
  t = setInterval(function(){ 
    timeLeftInTurn -= 1 
    if (timeLeftInTurn === -1){
      turnSwitcher()
    }
    if (timeLeftInTurn <= 10){
      $('#end-turn-timer').show()
      $('#end-turn-timer').text(timeLeftInTurn);
    } 
  }, 1000);
});

//win Count variables
var player1WinCount = 0;
var player2WinCount = 0;


//End Turn
    //end turn/switch player turn by button
  $('#end-turn-button').on('click',function(){
    turnSwitcher();
  });

    //end turn/switch player turn by timer
  

  function turnSwitcher(){
    if(isGameOn === true){
      howManyActionsLeftInTurn = totalActionsPerTurn;
      timeLeftInTurn = totalTimePerTurn;
      $('#end-turn-timer').hide();
      $('.attack-actions').removeClass('end-turn-disabled-abilities');
      if (whosTurn === 'player1'){
        whosTurn = 'player2';
        player2ManaRegen();
        abilityAvailabilityChecker();
        anyMovesAvailableAtStarOfTurn(player2TotalMoveCount, $('.ability-disabled-player2'));
        $('#whos-turn').text(player2.characterName+"'s turn")
        $('#player1-moves').hide();
        $('#player2-moves').show();
        createMessage(player2.characterName+"'s turn:", false);
        console.log('====END OF '+player1.characterName+"'s TURN====");
      }else if (whosTurn === 'player2'){
        whosTurn = 'player1';
        player1ManaRegen();
        abilityAvailabilityChecker();
        anyMovesAvailableAtStarOfTurn(player1TotalMoveCount, $('.ability-disabled-player1'));
        $('#whos-turn').text(player1.characterName+"'s turn");
        $('#player2-moves').hide();
        $('#player1-moves').show();
        createMessage(player1.characterName+"'s turn:", false);
        console.log("====END OF "+player2.characterName +"'s TURN====");
      }
    }
  }

    //mana regen
  function player1ManaRegen(){
    player1RemainingMana += player1.spirit;
    if(player1RemainingMana > player1.maxMana){
      player1RemainingMana = player1.maxMana;
    }
    visualBarUpdater($('#player1-mana-bar'), player1RemainingMana, player1.maxMana, $('#player2-health-bar'),player2RemainingHealth, player2.maxHealth);
  }

  function player2ManaRegen(){
    player2RemainingMana += player2.spirit;
    if(player2RemainingMana > player2.maxMana){
      player2RemainingMana = player2.maxMana;
    }
    visualBarUpdater($('#player2-mana-bar'), player2RemainingMana, player2.maxMana, $('#player1-health-bar'),player1RemainingHealth,player1.maxHealth);
  }

  function anyMovesAvailableAtStarOfTurn(playerTotalMoveCount, abilityDisabledSelector){
    if(playerTotalMoveCount === abilityDisabledSelector.length){
      $('#end-turn-button').removeClass('btn-warning');
      $('#end-turn-button').addClass('btn-success');
    } else{
      $('#actions-left-in-turn').text(howManyActionsLeftInTurn);
      $('#end-turn-button').removeClass('btn-success');
      $('#end-turn-button').addClass('btn-warning');
    }
  }


//Rematch button
  $('#fight-again-button').hide();
  $('#fight-again-button').on('click',function(){
    isGameOn = true;
    enoughManaPlayer1 = true;
    enoughManaplayer2 = true;
    player1RemainingHealth = player1.maxHealth;
    player1RemainingMana = player1.maxMana;
    player2RemainingHealth = player2.maxHealth;
    player2RemainingMana = player2.maxMana;
    howManyActionsLeftInTurn = totalActionsPerTurn;
    timeLeftInTurn = totalTimePerTurn;
    visualBarUpdater($('#player1-mana-bar'), player1RemainingMana,player1.maxMana,$('#player2-health-bar'),player2RemainingHealth, player2.maxHealth);
    visualBarUpdater($('#player2-mana-bar'), player2RemainingMana,player2.maxMana,$('#player1-health-bar'),player1RemainingHealth, player1.maxHealth);
    
    resetGame();
    initFirstTurnVisual();
    $('#fight-again-button').hide();
  });

  function resetGame(){
    resetMessageBoard();
    $('#fight-display').hide();
    $('#prefight-display').show();
    $('#player1-win-count').text(player1WinCount);
    $('#player2-win-count').text(player2WinCount);
    $('.attack-actions').removeClass('disabled');
    $('.attack-actions').removeClass('ability-disabled-player1');
    $('.attack-actions').removeClass('end-turn-disabled-abilities');
    $('end-turn-button').removeClass('btn-success');
    $('.attack-actions').addClass('btn-success');
    $('end-turn-button').addClass('btn-warning');
    $('#player2-death-indicator').hide();
    $('#player1-death-indicator').hide();
    $('#turn-board-controls').show();
    $('#player1-moves').show();
    $('#player2-moves').show();
  }

  //win count
   function winCounter(winner){
    if(winner === player1.characterName){
      player1WinCount += 1;
    } else if(winner ===player2.characterName){
      player2WinCount += 1;
    }
   } 

//global functions

  function abilityAvailabilityChecker(){
    //player1
      //mage
    isManaAbilityAvailable(player1RemainingMana, 'ability-disabled-player1', $('#fire-bolt1'), player1.abilities.fireBoltD);
    isManaAbilityAvailable(player1RemainingMana, 'ability-disabled-player1', $('#pyro-blast1'), player1.abilities.pyroBlastD);

    //player2
      //mage
    isManaAbilityAvailable(player2RemainingMana, 'ability-disabled-player2', $('#fire-bolt2'), player2.abilities.fireBoltD);
    isManaAbilityAvailable(player2RemainingMana, 'ability-disabled-player2', $('#pyro-blast2'), player2.abilities.pyroBlastD);


  }
  //visually disable buttons when ability is unavailable
  function isManaAbilityAvailable(whoRemainingMana, whoAbilityDisabled, button, ability){
    if(whoRemainingMana > ability.manaCost){
      button.removeClass('btn-secondary');
      button.removeClass(whoAbilityDisabled);
      button.addClass('btn-success');
    } else if(whoRemainingMana < ability.manaCost){
      button.removeClass('btn-success');
      button.addClass('btn-secondary');
      button.addClass(whoAbilityDisabled);
    }
  }

  //visual bar updater
  function visualBarUpdater(attackerManaBar,attackerRemainingMana, attackerTotalMana, receiverHealthBar, receiverRemainingHealth, receiverTotalHealth){
    percentageHealth = receiverRemainingHealth/receiverTotalHealth* 100; 
    percentageMana = attackerRemainingMana/attackerTotalMana*100;
    attackerManaBar.css('width', percentageMana+'%');
    attackerManaBar.text(attackerRemainingMana+'/'+attackerTotalMana);
    receiverHealthBar.css('width', percentageHealth+'%');
    receiverHealthBar.text(receiverRemainingHealth+'/'+receiverTotalHealth);
    console.log('percentage health: '+percentageHealth);
    console.log('remaining health: '+receiverRemainingHealth);
  }

//Combat message box
  function createMessage(msg,playerAction){
    if(whosTurn === 'player1' && playerAction === true){
      document.getElementById('combat-message').innerHTML += '<div class="player1-message">' +msg + '</div>';
      autoScrollToBottom()
    } else if(whosTurn === 'player2' && playerAction === true){
      document.getElementById('combat-message').innerHTML += '<div class="player2-message">' +msg + '</div>';
      autoScrollToBottom()
    } else{
    document.getElementById('combat-message').innerHTML += '<div>'+msg+'</div>';
    autoScrollToBottom()
    }
  }

  function resetMessageBoard(){
    document.getElementById('combat-message').innerHTML = '';
  }
     
  function autoScrollToBottom(){
    $('#combat-message').animate({
      scrollTop: $('#combat-message').get(0).scrollHeight
    }, 1);
  }           

  //Sound
  function playBGMusic(){
    // $('#fighting-background-music')[0].play();
  }

  function stopBGMusic(){
    // $('#fighting-background-music')[0].pause();
  }

});