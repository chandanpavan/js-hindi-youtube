function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// const res = addTwoNumbers(3, 4);

// console.log(`Result ${res}`); // o/p undefined
// logging to console and returning a value from a function are two diff things

function addTwoNumbers2(num1, num2) {
  let result = num1 + num2;
  return result;
  console.log("Chandan"); // this line of code will not get exectued as the function will stop executing after a return
}
const result = addTwoNumbers2(3, 4);
// console.log(`Result ${result}`);

function loginUserMessage(username = "sam") {
  // sam is written so as to set it default
  if (username === undefined) {
    console.log("Please enter a username.");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Chandan"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  // rest operaator
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

handleObject({
  username: "sammy",
  price: 399,
});

const myNewArray = [20, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 600, 1000]));
