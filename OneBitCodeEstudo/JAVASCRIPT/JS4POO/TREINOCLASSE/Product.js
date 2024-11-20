class Product {
    constructor (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock (quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }

}

const watch = new Product (" relogio de pulso", "...", 80)
watch.addToStock(99)
const priceWithDiscount = watch.calculateDiscount(10)

console.log(watch)
console.log ("preco com desconto de 10% " + priceWithDiscount)

console.log (watch)