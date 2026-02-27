// const tinderUser = new Object(); Singelton Object
// const tinderUser = {} ; Non Singelton Object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Chandan",
      lastname: "H",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = Object.assign({}, obj1, obj2);
// above it is not neccessary to take an empty obj but in production grade we use the same syntax
// also it is not a compulsion to use the empty array

const obj4 = { ...obj1, ...obj2 }; // most used to concatinate
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "c@gmail.com",
  },
  {
    id: 1,
    email: "c@gmail.com",
  },
  {
    id: 1,
    email: "c@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // very rarely used

// console.log(tinderUser.hasOwnProperty("isLogged")); // to check if the key exists or not

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

//  course.courseInstructor

const { courseInstructor: instructor } = course;
// object destructuring ==> learn the above syntax

console.log(instructor);
