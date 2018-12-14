/*TO DO LIST*/
// add custom popover to action buttons or find a way to keep food count current thoughout multiple turns.
// create a bag section that houses the item action buttons
// create a dot display which overlays the char photo
// create a buff display which overlays the char photo
// refactor ability availability checker
// fix attackingPlayer typo throughout action mechanics
// add base armor of 40 to each charcter/ adjust combat armor ratio
// add realtime damage marker over recieving player image. damage shoud fade away.

/*BUGS*/
//After rematch, the end turn button dosent always go back to yellow 





//This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require player_stats/base_stats
//= require player_stats/player1_equipped
//= require player_stats/player2_equipped
//= require player_stats/player1_attributes
//= require player_stats/player2_attributes
//= require classes/character
//= require_tree ./classes/functions
//= require_tree ./player_stat_modifiers
//= require_tree ./classes/classes
//= require_tree ./items
//= require_tree ./bag
//= require_tree ./character_loadin/basic_character_load_in
//= require_tree ./character_loadin/hover_button_details
//= require_tree ./character_loadin/if_mage
//= require character_loadin/dot_state
//= require character_loadin/buff_state
//= require character_loadin/hover_dot_buff
//= require_tree ./actions
//= require_tree ./game_mechanics
//= require message_core/message_core
//= require_tree ./helpers





