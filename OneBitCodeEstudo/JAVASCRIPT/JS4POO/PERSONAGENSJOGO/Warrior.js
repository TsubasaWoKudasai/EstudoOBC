const Character = require("./character");

class Warrior extends Character{
    constructor (name, lifePoints, attackPoints, defensePoints, shieldPoints){
        super(name, lifePoints, attackPoints, defensePoints)
        this.shieldPoints = shieldPoints
        this.ogDefensePoints = defensePoints
        this.stance = 'attacking'
    }

    attack(targetCharacter){
        if (this.stance === 'attacking'){
            super.attack(targetCharacter)
        }
    }

    switchStance(){
        this.stance = this.stance === 'attacking' ? 'defending' : 'attacking';
        this.defensePoints = this.stance === 'defending' 
            ? this.ogDefensePoints + this.shieldPoints 
            : this.ogDefensePoints;
    }
}

module.exports = Warrior