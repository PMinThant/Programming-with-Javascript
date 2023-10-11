// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) { // Use dishData.length to iterate through the array
        const dish = dishData[i]; // Get the current dish object
        let finalPrice;

        if (taxBoolean === true) { // Use strict comparison
            finalPrice = dish.price * tax; // Calculate final price with tax
        } else if (taxBoolean === false) {
            finalPrice = dish.price; // Calculate final price
        }
        else{
            console.log("You need to pass a boolean to the getPrices call!");
            return; // Return early if taxBoolean is not true
        }

        console.log("Dish: ", dish.name); // Print the dish name
        console.log("Price: $", finalPrice);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;

        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log( 'Discount is: $' + discount)

        getPrices(taxBoolean); // Call getPrices within getDiscount

        if (discount > 0) {
            console.log('Discount is: $' + discount);
        } else {
            console.log('No applicable discount.');
        }
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
