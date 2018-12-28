describe("---Game_Mechanics Functionality_Core---", function(){
  
  describe("initActivePlayer()",function(){
    it("Should set activePlayer to either '1' or '2'", function(){
      activePlayer = 0;
      initActivePlayer()
      expect(activePlayer).toBeGreaterThan(0)
      expect(activePlayer).not.toBeGreaterThan(2)
    })
  })

  describe("activePlayerSwitcher()", function(){
    it("should set activePlayer to '2' if activePlayer equals '1'", function(){
      activePlayer = 1
      activePlayerSwitcher()
      expect(activePlayer).toBe(2)
    })

    it("should set activePlayer to '1' if activePlayer equals '2'", function(){
      activePlayer = 2
      activePlayerSwitcher()
      expect(activePlayer).toBe(1)
    })
  })

  describe("activePlayerVariablesSetter()", function(){
    it("should set notActivePlayer to '2' if activePlayer equals '1'", function(){
      activePlayer = 1
      notActivePlayer = 0
      activePlayerVariablesSetter()
      expect(notActivePlayer).toBe(2)
    })

    it("should set notActivePlayer to '1' if activePlayer equals '2'", function(){
      activePlayer = 2
      notActivePlayer = 0
      activePlayerVariablesSetter()
      expect(notActivePlayer).toBe(1)
    })

    it("should set activePlayerAccessor to 'player1' if activePlayer equals '1'", function(){
      activePlayer = 1
      activePlayerAccessor = {}
      activePlayerVariablesSetter()
      expect(activePlayerAccessor).toBe(player1)
    })

    it("should set activePlayerAccessor to 'player2' if activePlayer equals '2'", function(){
      activePlayer = 2
      activePlayerAccessor = {}
      activePlayerVariablesSetter()
      expect(activePlayerAccessor).toBe(player2)
    })

    it("should set notActivePlayerAccessor to 'player2' if activePlayer equals '1'", function(){
      activePlayer = 1
      notActivePlayerAccessor = {}
      activePlayerVariablesSetter()
      expect(notActivePlayerAccessor).toBe(player2)
    })

    it("should set notActivePlayerAccessor to 'player1' if activePlayer equals '2'", function(){
      activePlayer = 2
      notActivePlayerAccessor = {}
      activePlayerVariablesSetter()
      expect(notActivePlayerAccessor).toBe(player1)
    })
  })

})