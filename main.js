//Reading article in Lessons:JS Essential Concepts for 9/7 named" Indepth SCope, hoisting"
//
//Example from article

//       function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     
///      function getFullName() {
//       return firstName + " " + lastName,
    
//     }};
  
//     alert( "Hello, " + getFullName("Mckenna", "Theby") );
//     alert( "Bye, " + getFullName() );

    ////no idea how to make this come back with anything? 

//Another example from the article: 
  
// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
//   alert( counter()); //alerts 0 
//   alert( counter()); //alerts 1
//   alert( counter()); //alerts 2

  //this function will create a function named 'makeCounter
  //where we create a variable named "count" and equal
  //count to  the number 0. we then want that to return another
  //function where we take the variable count that's equal to 
  //and increment it up by one using ++. Then outside that code
  //we create a variable counter to equal the invocation of the makeCounter function.
  //then we alert the invocation of counter() which starts counting at the original of zero.


  //2. SCope in JS
  //2.1 WAtch video
  //2.2-Understand different between scopes
  //2.3 Implement a few functions showcasing the different scopes

  //a

  //   function yourFunction(a) {
//    return 3 +a
//   }
// console.log(yourFunction(4));  

//7 this is globally scoped?
//why isn't this a block or function scope? this must be glocally scope

// function yourFunction() {
//     console.log("This is your Function");
//     function myFunction(){
//         console.log("This is my inner function");
//         myFunction();;
        
//     }};
//  yourFunction();
// myFunction();             //not defined              //We cannot call myFunction outside the scope of yourFunction


//another example for 2.3

// // Global scope variable
// const globalVar = "I'm a global variable";

// function outerFunction() {
//   // Function scope variable
//   const outerVar = "I'm in the outer function";

//   function innerFunction() {
//     // Function scope variable
//     const innerVar = "I'm in the inner function";

//     // Access variables from different scopes
//     console.log(globalVar); // Access global variable //works anywhere
//     console.log(outerVar);   // Access outer function's variable 
//     console.log(innerVar);  // Access inner function's variable
//   }
  
//   // Call the inner function
//   innerFunction();

//   // Trying to access innerVar here will result in an error---NO IT WORKS!-we can access becaue the outer function is accessible and it contains the inner function
// }

// // Call the outer function
// outerFunction();

// // Trying to access outerVar or innerVar here will result in an error------but no it actually works  not sure why. 

// //i will try to console log the inner and outer variables here:
// // console.log(outervar);                                         //outer var is not defined as i would think
// // console.log(innervar);                                            //innervar is not defined as i would expect 


// //try another example:
// function foo() {
//     let y = 20;
//     console.log(y);
// }
// foo();

// // console.log(foo());  //undefined
// // console.log(y);  //y is not defined

// //Another example i am going to delcare a variable inside a function and then express it outside of it and
// //see how that affects it

// function thisFunction(){
//     let x;
// }
// x=5;
// console.log(x);   //my guess is this is not defined but we will see---//  it does show 5- so i dont get this. MOving on for now


//3 Explore Hoisting- 3.1 Watch video again  3.2 Understand differences between var let and const in hoisting
//4. Hands-on exercises:
///4.1



const globalVar = "I'm a global variable";
function scopeTest() {
   
    
  
    if (true) {
      // Declare a block-scoped variable
      const blockVar = "I'm a block-scoped variable";
      console.log(globalVar); // Access globalVar from within the block
      console.log(blockVar);  // Access blockVar from within the block
    }
  
    // Try to access blockVar outside the block (will result in an error)
    // console.log(blockVar);  // This line will produce an error
  
    function innerFunction() {
      // Declare a function-scoped variable
      const functionVar = "I'm a function-scoped variable";
      console.log(globalVar);   // Accessible here!
      console.log(functionVar); // Accessible here!
    //   console.log(blockVar);    //Not ACCESSIBLE HERE OUTSIDE IT'S BLOCK!
    }
  
    innerFunction();
  
    // Try to access functionVar outside the function (will result in an error)
    // console.log(functionVar);  // This line will produce an error
  }
  
  scopeTest();
  
  // Try to access globalVar, blockVar, or functionVar outside scopeTest (won't produce errors)
  console.log(globalVar); // Access globalVar from global scope
  // console.log(blockVar);  // This line will produce an error
  // console.log(functionVar);  // This line will produce an error
  