describe("gainManaActuator()", function(){
    it("should add spirit to remainingMana", function(){
      player1.remainingMana = 30
      player1.spirit = 24
      gainManaActuator(player1)
      expect(player1.remainingMana).toBe(54)
    })
  })