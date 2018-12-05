//****Temporary****//     dB with provide weapon info//
//armor=>head,shoulders,chest,wrist,hands,belt,legs,boots (8)
var player1HeadArmor = {
  name: 'Crown of Fire',
  type: 'cloth',
  armor: 3,
  intellect: 0,
  spirit: 2
};
var player1ShoulderArmor = {
  name: 'Pheniox de Claire',
  type: 'cloth',
  armor: 7,
  intellect: 0,
  spirit: 1
};
var player1ChestArmor = {
  name: "Alcazra's Robes",
  type: "cloth",
  armor: 8,
  intellect: 0,
  spirit: 5
};
var player1WristArmor = {
  name: "Stell Cuffs",
  type: "mail",
  armor: 7,
  intellect: 0,
  spirit: 0
};  
var player1HandsArmor = {
  name: "Green Gloves",
  type: "cloth",
  armor: 3,
  intellect: 1,
  spirit: 0
}
var player1BeltArmor = {
  name: "Small Belt",
  type: "cloth",
  armor: 2,
  intellect: 0,
  spirit: 0
}
var player1LegsArmor = {
  name: "Brilted Pants",
  type: "cloth",
  armor: 7,
  intellect: 2,
  spirit: 3
}
var player1BootsArmor = {
  name: "Marlin's Boots",
  type: "cloth",
  armor: 7,
  intellect: 1,
  spirit: 1
}
var player1PrimaryWeapon = {
  name: "wand",
  damage: [1,5]
}

var player1TotlaEquippedStats = {
  armor: player1HeadArmor.armor + player1ShoulderArmor.armor + player1ChestArmor.armor +player1WristArmor.armor+
         player1HandsArmor.armor + player1BeltArmor.armor + player1LegsArmor.armor + player1BootsArmor.armor,
  intellect: player1HeadArmor.intellect + player1ShoulderArmor.intellect + player1ChestArmor.intellect +player1WristArmor.intellect+
         player1HandsArmor.intellect + player1BeltArmor.intellect + player1LegsArmor.intellect + player1BootsArmor.intellect,       
  spirit: player1HeadArmor.spirit + player1ShoulderArmor.spirit + player1ChestArmor.spirit +player1WristArmor.spirit+
         player1HandsArmor.spirit + player1BeltArmor.spirit + player1LegsArmor.spirit + player1BootsArmor.spirit,       
}


