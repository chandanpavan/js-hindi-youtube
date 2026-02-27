if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Chandan";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

// one();

if (true) {
  const username = "Chandan";
  if (true) {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// ++++++++++++++++++= interesting +++++++++++++++++

addone(5);
// we can call a function before initialization if we declare the function like this

function addone(num) {
  return num + 1;
}

addTwo(5);
//but we cannot call a function before initialization if we declare a function and store it in a variable

const addTwo = function (num) {
  return num + 2;
};
