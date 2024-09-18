class Character {
    constructor(name, lifePoints, attackPoints, defensePoints){
        this.name = name
        this.lifePoints =lifePoints
        this.attackPoints = attackPoints
        this.defensePoints = defensePoints
    }

    attack(targetCharacter){
        targetCharacter.lifePoints -= Math.max( this.attackPoints - targetCharacter.defensePoints, 0 )
    }
}

module.exports = Character
