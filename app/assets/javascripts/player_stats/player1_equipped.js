//****Temporary****//     dB with provide weapon info//
//armor=>head,shoulders,chest,wrist,hands,belt,legs,boots (8)
var player1HeadArmor = {
  name: 'Crown of Fire',
  type: 'cloth',
  stamina: 0,
  strength: 0,
  agility: 0,
  intellect: 0,
  crit: 0,
  attackPower: 0,
  spellPower: 0,
  armor: 3,
  block: 0,
  spirit: 2
};
var player1ShoulderArmor = {
  name: 'Pheniox de Claire',
  type: 'cloth',
  stamina: 0,
  strength: 0,
  agility: 0,
  intellect: 0,
  crit: 0,
  attackPower: 0,
  spellPower: 0,
  armor: 7,
  block: 0,
  spirit: 1
};
var player1ChestArmor = {
  name: "Alcazra's Robes",
  type: "cloth",
  stamina: 0,
  strength: 0,
  agility: 0,
  intellect: 0,
  crit: 0,
  attackPower: 0,
  spellPower: 0,
  armor: 8,
  block: 0,
  spirit: 5
};
var player1WristArmor = {
  name: "Stell Cuffs",
  type: "mail",
  stamina: 1,
  strength: 0,
  agility: 0,
  intellect: 0,
  crit: 0,
  attackPower: 0,
  spellPower: 0,
  armor: 7,
  block: 0,
  spirit: 0
};  
var player1HandsArmor = {
  name: "Green Gloves",
  type: "cloth",
  stamina: 0,
  strength: 0,
  agility: 0,
  intellect: 1,
  crit: 0,
  attackPower: 0,
  spellPower: 0,
  armor: 3,
  block: 0,
  spirit: 0
}
var player1BeltArmor = {
  name: "Small Belt",
  type: "cloth",
  stamina: 0,
  strength: 0,
  agility: 0,
  intellect: 0,
  crit: 0,
  attackPower: 0,
  spellPower: 0,
  armor: 2,
  block: 0,
  spirit: 0
}
var player1LegsArmor = {
  name: "Brilted Pants",
  type: "cloth",
  stamina: 0,
  strength: 0,
  agility: 0,
  intellect: 2,
  crit: 0,
  attackPower: 0,
  spellPower: 0,
  armor: 7,
  block: 0,
  spirit: 3
}
var player1BootsArmor = {
  name: "Marlin's Boots",
  type: "cloth",
  stamina: 0,
  strength: 0,
  agility: 0,
  intellect: 1,
  crit: 0,
  attackPower: 0,
  spellPower: 0,
  armor: 7,
  block: 0,
  spirit: 1
}
var player1PrimaryWeapon = {
  name: "wand",
  damage: [5,8]
}

var player1TotlaEquippedStats = {
  stamina: player1HeadArmor.stamina + player1ShoulderArmor.stamina + player1ChestArmor.stamina + player1WristArmor.stamina+
          player1HandsArmor.stamina + player1BeltArmor.stamina+player1LegsArmor.stamina+ player1BootsArmor.stamina, 
  strength: player1HeadArmor.strength + player1ShoulderArmor.strength + player1ChestArmor.strength + player1WristArmor.strength+
          player1HandsArmor.strength + player1BeltArmor.strength+player1LegsArmor.strength+ player1BootsArmor.strength, 
  agility: player1HeadArmor.agility + player1ShoulderArmor.agility + player1ChestArmor.agility + player1WristArmor.agility+
          player1HandsArmor.agility + player1BeltArmor.agility+player1LegsArmor.agility+ player1BootsArmor.agility, 
  intellect: player1HeadArmor.intellect + player1ShoulderArmor.intellect + player1ChestArmor.intellect +player1WristArmor.intellect+
         player1HandsArmor.intellect + player1BeltArmor.intellect + player1LegsArmor.intellect + player1BootsArmor.intellect,  
  crit: player1HeadArmor.crit + player1ShoulderArmor.crit + player1ChestArmor.crit + player1WristArmor.crit+
          player1HandsArmor.crit + player1BeltArmor.crit+player1LegsArmor.crit+ player1BootsArmor.crit, 
  attackPower: player1HeadArmor.attackPower + player1ShoulderArmor.attackPower + player1ChestArmor.attackPower + player1WristArmor.attackPower+
          player1HandsArmor.attackPower + player1BeltArmor.attackPower+player1LegsArmor.attackPower+ player1BootsArmor.attackPower,
  spellPower: player1HeadArmor.spellPower + player1ShoulderArmor.spellPower + player1ChestArmor.spellPower + player1WristArmor.spellPower+
          player1HandsArmor.spellPower + player1BeltArmor.spellPower+player1LegsArmor.spellPower+ player1BootsArmor.spellPower,    
  armor: player1HeadArmor.armor + player1ShoulderArmor.armor + player1ChestArmor.armor +player1WristArmor.armor+
         player1HandsArmor.armor + player1BeltArmor.armor + player1LegsArmor.armor + player1BootsArmor.armor,   
  block: player1HeadArmor.block + player1ShoulderArmor.block + player1ChestArmor.block + player1WristArmor.block+
          player1HandsArmor.block + player1BeltArmor.block+player1LegsArmor.block+ player1BootsArmor.block, 
  spirit: player1HeadArmor.spirit + player1ShoulderArmor.spirit + player1ChestArmor.spirit +player1WristArmor.spirit+
         player1HandsArmor.spirit + player1BeltArmor.spirit + player1LegsArmor.spirit + player1BootsArmor.spirit,       
}


