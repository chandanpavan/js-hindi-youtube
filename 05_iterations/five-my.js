const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (item) {
  //   console.log(item);
});

coding.forEach((val) => {
  //   console.log(val);
});

function printMe(item) {
  //   console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item) => {
  //   console.log(item);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "ruby",
    languageFileName: "rb",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageFileName);
});
