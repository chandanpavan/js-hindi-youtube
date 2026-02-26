// singelton
// Object.create

// Object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Chandan",
  fullname: "Chandan H",

  age: 19,
  location: "Jaipur",
  email: "chandu.h2024@gmail.com",
  place: "Bangalore",
  isLoggedIn: "true",
  lastLoginDay: "19th Oct of 2026",
};

console.log(JsUser.email);
// the above method cannot be used always as strings cannot be used in dot methods so it is better to use square braces
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
