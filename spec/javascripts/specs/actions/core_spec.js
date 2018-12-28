describe("---Actions Core---", function(){

  describe("enoughManaChecker()", function(){
    it("should return 'true' when remaining mana is more than the ability mana cost", function(){
      player1.enoughMana = true;
      player1.remainingMana = 40;
      ability.manaCost = 30;
      enoughManaChecker(player1, ability)
      expect(player1.enoughMana).toBe(true);
    });

    it("should return 'true' when remaining mana is equal to ability mana cost", function(){
      player1.enoughMana = true;
      player1.remainingMana = 40;
      ability.manaCost = 40;
      enoughManaChecker(player1, ability)
      expect(player1.enoughMana).toBe(true);
    });

    it("should return 'false' when remaining mana is less than the ability mana cost", function(){
      player1.enoughMana = true;
      player1.remainingMana = 30;
      ability.manaCost = 40;
      enoughManaChecker(player1, ability)
      expect(player1.enoughMana).toBe(false);
    });
  });

  describe("isBlockAttack()", function(){
    it("should return 'true' when random number is below receiving players block", function(){
      num = 4
      player2.block = 5
      blocked = isBlockAttack(player2,num)
      expect(blocked).toBe(true)
    })

    it("should return 'false' when random number is above receiving players block", function(){
      num = 6
      player2.block = 5
      blocked = isBlockAttack(player2,num)
      expect(blocked).toBe(false)
    })
  })

  describe("isCriticalHit()", function(){
    it("should return 'true' when random number is below attacking players crit", function(){
      num = 4
      player1.crit = 5
      critical = isCriticalHit(player1,num)
      expect(critical).toBe(true)
    })

    it("should return 'false' when random number is above attacking players crit", function(){
      num = 6
      player1.crit = 5
      critical = isCriticalHit(player1,num)
      expect(critical).toBe(false)
    })
  })

  describe("getAbsorbedDamageByArmor()", function(){
    it("should return '0' when armor is '45' (level 1)", function(){
      player2.totalArmor = 45
      absorbed = getAbsorbedDamageByArmor(player2)
      expect(absorbed).toBe(0)
    })

    it("should return '1278' when armor is '400'", function(){
      player2.totalArmor = 400
      absorbed = getAbsorbedDamageByArmor(player2)
      expect(absorbed).toBe(1278)
    })
  })

  describe("getRandomArbitrary()", function(){
    it("shoud return a number in between the min and max number", function(){
      min = 5
      max = 10
      num = getRandomArbitrary(min, max)
      expect(num).toBeGreaterThan(min-1)
      expect(num).not.toBeGreaterThan(max)
    })
  })

  describe("criticalActuator()", function(){
    it("should return double damage if critical is 'true'", function(){
      critical = true
      aggregateDamage = 20
      aggregateDamage = criticalActuator(critical,aggregateDamage)
      expect(aggregateDamage).toBe(40)
    })

    it("should not return double damage if critical is 'false'", function(){
      critical = false
      aggregateDamage = 20
      aggregateDamage = criticalActuator(critical,aggregateDamage)
      expect(aggregateDamage).toBe(20)
    })
  })

  describe("damageAfterArmor()", function(){
    it("should return zero if aggregateDamage minus absorbed is less than or greater than zero", function(){
      aggregateDamage = 40
      absorbed = 50
      aggregateDamage = damageAfterArmor(aggregateDamage, absorbed)
      expect(aggregateDamage).toBe(0)
    })

    it("should return aggregateDamage minus absorbed if sum is greater than zero", function(){
      aggregateDamage = 40
      absorbed = 30
      aggregateDamage = damageAfterArmor(aggregateDamage, absorbed)
      expect(aggregateDamage).toBe(10)
    })
  })

  describe("blockActuator()", function(){
    it("should return zero if blocked equals 'true'", function(){
      blocked = true
      aggregateDamage = 40
      aggregateDamage = blockActuator(blocked, aggregateDamage)
      expect(aggregateDamage).toBe(0)
    })

    it("should return aggregateDamage if blocked equals 'false'", function(){
      blocked = false
      aggregateDamage = 40
      aggregateDamage = blockActuator(blocked, aggregateDamage)
      expect(aggregateDamage).toBe(40)
    })
  })

  describe("attackActuator()", function(){
    it("should minus aggregateDamage from remainingHealth", function(){
      player2.remainingHealth = 100
      aggregateDamage = 45
      attackActuator(player2,aggregateDamage)
      expect(player2.remainingHealth).toBe(55)
    }) 

    it("should minus one from actionsLeftInTurn", function(){
      actionsLeftInTurn = 2
      attackActuator(player2,aggregateDamage)
      expect(actionsLeftInTurn).toBe(1)
    })   
  })

  describe("manaAttackActuator()", function(){
    beforeEach(function() {
      player2.remainingHealth= 100
      player1.remainingMana = 100
      ability.manaCost = 55
      aggregateDamage = 45
    });
    it("should minus aggregateDamage from remainingHealth", function(){
      manaAttackActuator(player1,player2,aggregateDamage,ability)
      expect(player2.remainingHealth).toBe(55)
    })

    it("should minus manaCost from remainingMana", function(){
      manaAttackActuator(player1,player2,aggregateDamage,ability)
      expect(player1.remainingMana).toBe(45)
    })

    it("should minus one from actionsLeftInTurn", function(){
      actionsLeftInTurn = 2
      manaAttackActuator(player1,player2,aggregateDamage,ability)
      expect(actionsLeftInTurn).toBe(1)
    })
  })

  describe("dotActuator()", function(){
    it("should minus aggregateDamage from remainingHealth ",function(){
      player2.remainingHealth = 45
      aggregateDamage = 7
      dotState.turnsLeft = notRelevantNum
      dotActuator(player2, aggregateDamage, dotState)
      expect(player2.remainingHealth).toBe(38)
    })

    it("should minus one from dotState.turnsLeft",function(){
      player2.remainingHealth = notRelevantNum
      aggregateDamage = notRelevantNum
      dotState.turnsLeft = 2
      dotActuator(player2, aggregateDamage, dotState)
      expect(dotState.turnsLeft).toBe(1)
    })
  })
  describe("armorBuffActuator()", function(){
    beforeEach(function() {
      player1.totalArmor = 45
      player1.remainingMana = 100
      ability.armorGain = 60
      ability.manaCost = 90
    });

    it("should add armorGain to totalArmor", function(){
      armorBuffActuator(player1, ability)
      expect(player1.totalArmor).toBe(105)
    })

    it("should minus manaCost from remainingMana", function(){
      armorBuffActuator(player1, ability)
      expect(player1.remainingMana).toBe(10)
    })

    it("should minus one from actionsLeftInTurn", function(){
      actionsLeftInTurn = 2
      armorBuffActuator(player1, ability)
      expect(actionsLeftInTurn).toBe(1)
    })
  })

  describe("foodHealthActuator()", function(){
    it("should add healthRegen to remainingHealth",function(){
      player1.remainingHealth = 40
      player1.bag.slot1.item.healthRegen = 30
      foodHealthActuator(player1)
      expect(player1.remainingHealth).toBe(70)
    })

    it("should minus one from bag.slot1.count",function(){
      player1.bag.slot1.count = 3
      foodHealthActuator(player1)
      expect(player1.bag.slot1.count).toBe(2)
    })

    it("should minus one actionsLeftInTurn",function(){
      actionsLeftInTurn = 2
      foodHealthActuator(player1)
      expect(actionsLeftInTurn).toBe(1)
    })
  })
  
  describe("endOfGameChecker()", function(){
    it("should return 'true' when remaining health is above zero", function(){
      isGameOn = true;
      player1.remainingHealth = 1;
      endOfGameChecker(player1)
      expect(isGameOn).toBe(true);
    });

    it("should return 'false' when remaining health is equal to zero", function(){
      isGameOn = true;
      player1.remainingHealth = 0;
      endOfGameChecker(player1)
      expect(isGameOn).toBe(false);
    });
  });

  describe("dotSetter()", function(){
    it("should set dotState.active to true", function(){
      dotState.active = false
      ability.dot.turns = notRelevantNum
      dotSetter(dotState, ability)
      expect(dotState.active).toBe(true)
    })

    it("should set doteState.turnsLeft to equal ability.dot.turns", function(){
      dotState.turnsLeft = 0
      ability.dot.turns = 2
      dotSetter(dotState, ability)
      expect(dotState.turnsLeft).toBe(2)
    })
  })

  describe("ifBlockedNoDot()", function(){
    beforeEach(function() {
      spyOn(window,'dotSetter');
    });
    it("should not call dotSetter() if blocked equals 'true'", function(){
      blocked = true
      ifBlockedNoDot(blocked,dotState,ability)
      expect(dotSetter).not.toHaveBeenCalled()
    })

    it("should call dotSetter() if blocked equals 'false'", function(){
      blocked = false
      ifBlockedNoDot(blocked,dotState,ability)
      expect(dotSetter).toHaveBeenCalled()
    })
  })

  describe("armorBuffSetter()",function(){
    it("should set buffState.active to 'true'", function(){
      buffState.active = false
      ability.turns = notRelevantNum
      armorBuffSetter(buffState, ability)
      expect(buffState.active).toBe(true)
    })

    it("should set buffState.turns to equal ability.turns", function(){
      buffState.turnsLeft = 0
      ability.turns = 2
      armorBuffSetter(buffState, ability)
      expect(buffState.turnsLeft).toBe(2)
    })
  })

  describe("isDotExpired()",function(){
    it("should keep dotState.active to 'true' if dotState.turnsLeft does not equal zero", function(){
      dotState.turnsLeft = 1
      dotState.active = true
      isDotExpired(dotState)
      expect(dotState.active).toBe(true)
    })

    it("should set dotState.active to 'false' if dotState.turnsLeft equals zero", function(){
      dotState.turnsLeft = 0
      dotState.active = true
      isDotExpired(dotState)
      expect(dotState.active).toBe(false)
    })
  })

  describe("isBuffExpired()",function(){
    it("should keep buffState.active to 'true' if buffState.turnsLeft does not equal zero", function(){
      player1.totalArmor = 45
      ability.armorGain = 60
      buffState.turnsLeft = 1
      buffState.active = true
      isBuffExpired(player1, ability, buffState)
      expect(buffState.active).toBe(true)
    })

    it("should set buffState.active to 'false' if buffState.turnsLeft equals zero", function(){
      player1.totalArmor = 45
      ability.armorGain = 60
      buffState.turnsLeft = 0
      buffState.active = true
      isBuffExpired(player1, ability, buffState)
      expect(buffState.active).toBe(false)
    })

    it("should set player1.totalArmor to '45' if buffState.turnsLeftequals zero", function(){
      player1.totalArmor = 105
      ability.armorGain = 60
      buffState.turnsLeft = 0
      buffState.active = true
      isBuffExpired(player1, ability, buffState)
      expect(player1.totalArmor).toBe(45)
    })
  })

  describe("buffStateIncrementor()", function(){
    it("should minus one from buffState.turnsLeft", function(){
      buffState.turnsLeft = 3
      buffStateIncrementor(buffState)
      expect(buffState.turnsLeft).toBe(2)
    })
  })

});
















