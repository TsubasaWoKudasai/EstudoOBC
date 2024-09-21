const Installment = require("./Installment")

module.exports = class Loan {
    static #fee = 1.05

    constructor (value, installments){
        this.value = value
        this.interestRate = Loan.#fee
        this.installments = []
        const installmentValue = (value * Loan.#fee) / installments
        for (let i = 1; i <= installments; i++){
            this.installments.push(new Installment(installmentValue, i))
        }
        this.createdAt = new Date()
    }

    static get fee() {
        return Loan.#fee
    }

    static set fee(newFeePercentage){
        Loan.#fee = 1 + (newFeePercentage / 100)
    }
}