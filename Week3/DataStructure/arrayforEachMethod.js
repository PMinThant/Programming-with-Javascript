const fruits = ['kiwi', 'mango', 'apple', 'pear']
function appendIndex(fruit, index){
    console.log(`${index}.${fruit}`)
}
fruits.forEach(appendIndex)

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggies, index){
    console.log(`${index}.${veggies}`);
});

