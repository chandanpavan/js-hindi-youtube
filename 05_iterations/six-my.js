// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;  // we cannot return things in forEach
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = myNums.filter((val) => val > 4); // ==> here no need to write return keyword

const res1 = myNums.filter((val) => {
  //   return val > 4;    ==> here return keyword should be used as we wrote the condition in a scope
});

// console.log(res);

const newNums = [];

myNums.forEach((val) => {
  if (val > 4) {
    newNums.push(val);
  }
}); // we can do the same job using forEach but it need some more logic that's all.

// console.log(newNums);

// some more is there refer to original scripts
