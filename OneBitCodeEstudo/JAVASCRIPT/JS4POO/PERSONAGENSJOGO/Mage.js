const Character = require("./character");

class Mage extends Character{
    constructor (name, lifePoints, attackPoints, defensePoints, magicPoints) {
        super (name, lifePoints, attackPoints, defensePoints)
        this.magicPoints = magicPoints
    }

    attack (targetCharacter){
        targetCharacter.lifePoints -= Math.max((this.attackPoints + this.magicPoints) - targetCharacter.defensePoints, 0)
    }

    heal(targetCharacter){
        targetCharacter.lifePoints += this.magicPoints * 2
    }

}

module.exports = Mage