// reduce 

const myNums = [1,2,3,4]

/*
myNums.reduce( function (previousvalue,currentvalue,currentIndex,array) {
    console.log(previousvalue,currentvalue,currentIndex,array);
})  // Not clear

const totalSum = myNums.reduce( function(sum,current) {
    return sum + current;
},0);
*/

const totalSum = myNums.reduce( (sum,current) => sum + current , 0) // Using arrow function

console.log(totalSum);

const shoppingCarts = [
    {
        courseName: "js course",
        prices: 2999
    },
    {
        courseName: "py course",
        prices: 999
    },
    {
        courseName: "app dev course",
        prices: 5999
    },
    {
        courseName: "data scientist course",
        prices: 12999
    }
]

const totalPrices = shoppingCarts.reduce( (total,current) => total + current.prices, 0)

console.log(totalPrices);