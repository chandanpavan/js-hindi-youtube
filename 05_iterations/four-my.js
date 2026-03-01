// for-in loops
// mainly used for objects but we can use for arrays

const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("Fr", "France");
map.set("IN", "INDIA");

for (const [key, value] in map) {
  // No output
  console.log(key, value);
}
// we cannot use for in loops to iterate over maps
