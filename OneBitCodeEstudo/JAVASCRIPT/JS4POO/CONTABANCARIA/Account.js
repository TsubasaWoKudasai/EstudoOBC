module.exports = class Account {
    #balance
    // #deposits
    // #loans
    // #transfers
  
    constructor(user) {
      this.owner = user
      this.#balance = 0
      this.deposits = []
      this.loans = []
      this.transfers = []
    }
  
    get balance() {
      return this.#balance
    }
  
    addDeposit(deposit) {
      this.#balance += deposit.value
      this.deposits.push(deposit)
    }
  
    addLoan(loan) {
      this.#balance =+ loan.value
      this.loans.push(loan)
    }
  
    addTransfer(transfer) {
      if (transfer.toUser.email === this.owner.email) {
        this.#balance += transfer.value
        this.transfers.push(transfer)
      } else if (transfer.fromUser.email === this.owner.email) {
        this.#balance -= transfer.value
        this.transfers.push(transfer)
      }
    }
  }

////////////////////////////////////////////////////////////////////////
// tentativa de usar atributos privados
////////////////////////////////////////////////////////////////////////
// const Deposit = require("./Deposit")
// const Loan = require("./Loan")
// const Transfer = require("./Transfer")

// module.exports = class Account{
//     #balance
//     #deposits
//     #loans
//     #transfers

//     constructor(user){
//         this.owner = user
//         this.#balance = 0
//         this.#deposits = []
//         this.#loans = []
//         this.#transfers = []
//     }

//     get balance (){
//         return this.#balance
//     }

//     get deposits(){
//         return this.#deposits.map(deposit => ({
//             value : deposit.value
//         }))
//     }

//     addDeposit(value){
//         const deposit = new Deposit(value)
//         this.#deposits.push(deposit)
//         this.#balance += deposit.value
//     }

//     get loans (){
//         return this.#loans.map(loan =>({
//             value : loan.value,
//             interestRate: loan.interestRate,
//         }))
//     }

//     addLoan(value, interestRate){
//         const loan = new Loan(value, interestRate)
//         this.#loans.push(loan)
//         this.#balance += loan.value
//     }

//     get transfers(){
//         return this.#transfers.map(transfer => ({
//             amount: transfer.amount,
//             recipient: transfer.recipient,

//         }));
//     }

//     addTransfer(transfer){
//         if (transfer.toUser.email === this.owner.email) {
//             this.#balance += transfer.value
//             this.#transfers.push(transfer)
//           } else if (transfer.fromUser.email === this.owner.email) {
//             this.#balance -= transfer.value
//             this.#transfers.push(transfer)
//           }
//         }
// }