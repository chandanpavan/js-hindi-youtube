// Doubt in this usage in arrow function reffered to Chatgpt but the context level was high

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);
// here if we run the above code it gives an empty object
// whereas if we run the same code in browser then it gives Window
// as it is returning windows in browser thats why we are able to do DOM manipulation

// function chai() {
//   let username = `hitesh`;
//   console.log(this.username); // can't use like this in function can only be used in objects == o/p undefined
//   console.log(this); //bahut sari value
// }

// chai();

// const chai = function () {
//   let username = `hitesh`;
//   console.log(this.username); // o/p undefined ==> same as the above
// };

const chai = () => {
  let usename = "hitesh";
  console.log(this); //##D  here it is returning an empty paranthese == {}
};
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// IMPLICIT RETURN
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({
  username: "Chandan",
}); // ** to return an object from a function you need to wrap the object with ()
console.log(addTwo(3, 4));
