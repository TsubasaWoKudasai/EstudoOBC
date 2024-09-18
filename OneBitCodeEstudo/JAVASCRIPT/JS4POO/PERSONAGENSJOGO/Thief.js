const Character = require("./character")

class Thief extends Character {
    attack(targetCharacter){
        targetCharacter.lifePoints -= Math.max((this.attackPoints - targetCharacter.defensePoints) * 2 , 0 )
    }
}

module.exports = Thief