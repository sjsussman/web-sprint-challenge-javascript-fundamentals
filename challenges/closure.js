// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction is able to access the variable internal because closure allows any nested function to reach outside it's scope for more information. In this case the information is the variable internal, which was delcared in the parent function MyFunction. It is important to note that function cannot reach 'inward' to child functions for information. Closure only works 'outwards'.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){

  let counter = 0;
  
    for (let i = 0; i <= num; i++){
      counter += i;
    }
  return counter;
  }
  
  console.log(summation(4));