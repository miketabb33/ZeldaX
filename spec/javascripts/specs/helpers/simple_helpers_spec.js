describe("---Helpers Simple_Heplers---", function(){
  describe("calculatePercentage()", function(){
    it("should return a percentage from a fraction",function(){
      numerator = 100
      denominator = 800
      percentage = calculatePercentage(numerator, denominator)
      expect(percentage).toBe(12.5)
    })
  })

  describe("ifHealthisOverMaxHealthHandler()", function(){
    it("should set remainingHealth to maxHealth if remainingHealth becomes greater than maxHealth",function(){
      player1.maxHealth = 100
      player1.remainingHealth = 120
      ifHealthisOverMaxHealthHandler(player1)
      expect(player1.remainingHealth).toBe(100)
    })
  })

  describe("gainManaActuator()", function(){
    it("should add spirit to remainingMana", function(){
      player1.remainingMana = 30
      player1.spirit = 24
      gainManaActuator(player1)
      expect(player1.remainingMana).toBe(54)
    })
  })

  describe("ifManaisOverMaxManaHandler()", function(){
    it("should set remainingMana to maxMana if remainingMana becomes greater than maxMana",function(){
      player1.maxMana = 100
      player1.remainingMana = 120
      ifManaisOverMaxManaHandler(player1)
      expect(player1.remainingMana).toBe(100)
    })
  })

  describe("randomNum1to100()", function(){
    it("should return a random number between '1' and '100'",function(){
      num = randomNum1to100()
      expect(num).toBeGreaterThan(1)
      expect(num).not.toBeGreaterThan(101)
    })
  })

})