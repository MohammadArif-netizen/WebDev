
const  myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0) // start with zero '0'

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 4999
    },
    {
        itemName: "ML Course",
        price: 9999
    },
    {
        itemName: "Data Scientis Course",
        price: 8999
    },
]

const priceToPay =  shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);