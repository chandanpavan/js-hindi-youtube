const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curval) {
//   console.log(`acc is : ${acc} and curval is ${curval}`);

//   return acc + curval;
// }, 0);

const myTotal = myNums.reduce((acc, curval) => {
  return acc + curval;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const total = shoppingCart.reduce((acc, currval) => {
  return acc + currval.price; // observe currval is just a variable to the item prizes
}, 0);

console.log(total);
