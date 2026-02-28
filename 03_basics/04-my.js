// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  // simple IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("Chandan"); // IIFE using arrow function

// ()() , the second paranthese is like calleing that function
// IIFE is used becuase this gets polluted by global scope so we use IIFE
