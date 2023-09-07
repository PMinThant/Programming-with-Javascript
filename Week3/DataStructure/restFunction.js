function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate*item)
}
let shoppingCart = addTaxToPrices(1.1, 46,89,35,79)
console.log(shoppingCart)