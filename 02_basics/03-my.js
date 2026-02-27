// singelton
// Object.create

// Object literals

const mySym = Symbol("key1"); // key value pair

const JsUser = {
  name: "Chandan",
  fullname: "Chandan H",
  [mySym]: "key1", // using a symbol as key-value pair
  age: 19,
  email: "chandu.h2024@gmail.com",
  place: "Bangalore",
  isLoggedIn: "true",
  lastLoginDay: "19th Oct of 2026",
};

// console.log(JsUser.email);
// // the above method cannot be used always as strings cannot be used in dot methods so it is better to use square braces
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser["mySym"]); // o/p of symbol

JsUser.email = "chandan@google.com";
// Object.freeze(JsUser); // this freezes the object and does not let any changes to happen after that

JsUser.email = "chandan@oracle.com";

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user , ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
