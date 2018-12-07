//****Temporary****//     dB with provide weapon info//
//armor=>head,shoulders,chest,wrist,hands,belt,legs,boots (8)
var player2HeadArmor = {
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
var player2ShoulderArmor = {
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
var player2ChestArmor = {
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
  spirit: 3
};
var player2WristArmor = {
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
var player2HandsArmor = {
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
var player2BeltArmor = {
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
var player2LegsArmor = {
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
  spirit: 0
}
var player2BootsArmor = {
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
  spirit: 0
}
var player2PrimaryWeapon = {
  name: "wand",
  damage: [1,3]
}

var player2TotlaEquippedStats = {
  stamina: player2HeadArmor.stamina + player2ShoulderArmor.stamina + player2ChestArmor.stamina + player2WristArmor.stamina+
          player2HandsArmor.stamina + player2BeltArmor.stamina+player2LegsArmor.stamina+ player2BootsArmor.stamina, 
  strength: player2HeadArmor.strength + player2ShoulderArmor.strength + player2ChestArmor.strength + player2WristArmor.strength+
          player2HandsArmor.strength + player2BeltArmor.strength+player2LegsArmor.strength+ player2BootsArmor.strength, 
  agility: player2HeadArmor.agility + player2ShoulderArmor.agility + player2ChestArmor.agility + player2WristArmor.agility+
          player2HandsArmor.agility + player2BeltArmor.agility+player2LegsArmor.agility+ player2BootsArmor.agility, 
  intellect: player2HeadArmor.intellect + player2ShoulderArmor.intellect + player2ChestArmor.intellect +player2WristArmor.intellect+
         player2HandsArmor.intellect + player2BeltArmor.intellect + player2LegsArmor.intellect + player2BootsArmor.intellect,  
  crit: player2HeadArmor.crit + player2ShoulderArmor.crit + player2ChestArmor.crit + player2WristArmor.crit+
          player2HandsArmor.crit + player2BeltArmor.crit+player2LegsArmor.crit+ player2BootsArmor.crit, 
  attackPower: player2HeadArmor.attackPower + player2ShoulderArmor.attackPower + player2ChestArmor.attackPower + player2WristArmor.attackPower+
          player2HandsArmor.attackPower + player2BeltArmor.attackPower+player2LegsArmor.attackPower+ player2BootsArmor.attackPower,
  spellPower: player2HeadArmor.spellPower + player2ShoulderArmor.spellPower + player2ChestArmor.spellPower + player2WristArmor.spellPower+
          player2HandsArmor.spellPower + player2BeltArmor.spellPower+player2LegsArmor.spellPower+ player2BootsArmor.spellPower,    
  armor: player2HeadArmor.armor + player2ShoulderArmor.armor + player2ChestArmor.armor +player2WristArmor.armor+
         player2HandsArmor.armor + player2BeltArmor.armor + player2LegsArmor.armor + player2BootsArmor.armor,   
  block: player2HeadArmor.block + player2ShoulderArmor.block + player2ChestArmor.block + player2WristArmor.block+
          player2HandsArmor.block + player2BeltArmor.block+player2LegsArmor.block+ player2BootsArmor.block, 
  spirit: player2HeadArmor.spirit + player2ShoulderArmor.spirit + player2ChestArmor.spirit +player2WristArmor.spirit+
         player2HandsArmor.spirit + player2BeltArmor.spirit + player2LegsArmor.spirit + player2BootsArmor.spirit,       
}

