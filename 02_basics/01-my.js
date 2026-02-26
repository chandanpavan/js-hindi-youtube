//array

const myArr = [0, 1, 2, 3, 4, 5];
const heros = ["hulk", "spiderman", "loki"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
//  to add a value in the start of an array ==> acts as push
// myArr.shift();
//  acts as pop

console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); // res === -1 as 9 does not exist

const newArr = myArr.join();
// this newArr is a String, the above line converts array into string and store in newArr

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
// splice not only includes the last element and also manipulates the array by removing those items from the array

console.log(myn2);
console.log("C", myArr);
