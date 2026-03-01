// for of loops .

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello World!";

for (const greet of greeting) {
  // if (greet == " ") continue;
  // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map(); // Map itself is an object
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("Fr", "France");
map.set("IN", "INDIA"); // duplicates do not get adds to map.
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, "=>", value);
}

const myObject = {
  game1: "NFS",
  game2: "SpiderMan",
};

for (const [key, values] of myObject) {
  // Objects are not iteratable
  // console.log(key, values);
}
