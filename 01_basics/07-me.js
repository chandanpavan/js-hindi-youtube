let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// the above are different types of getting date

// let myCreatedDate = new Date(2026, 1, 26);
// let myCreatedDate = new Date(2026, 1, 26, 5, 3, 26);
// let myCreatedDate = new Date("2026-02-26");
let myCreatedDate = new Date("02-26-2026");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); convert to seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());

const temp = newDate.toLocaleString("default", {
  weekday: "long",
}); // it gives the complete weekday name, if we give short it will show Thu

console.log(temp);
