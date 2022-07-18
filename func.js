// console.log('demo test');
// let name = "Sohan"
// let name2 = "Mohan"

// console.log('...........................................');


// console.log('......................................');





// console.log('here is demo test');
// function greet(name){
//     console.log(name + "is a good boy");
// }

// let name = "Shunham";
// let name1 = "Sagar";
// let name2 = "Amit";
// let name3 = "Rohan";

// greet(name);
// greet(name1);
// greet(name2);
// greet(name3);
// console.log(name + "is a good boy");
// console.log(name1 + "is a good boy");
// console.log(name2 + "is a good boy");
// console.log(name3 + "is a good boy");




// Arrow Function:
// hello = () => {
//   document.getElementById("demo").innerHTML += this;
// }

// // The window object calls the function:
// window.addEventListener("load", hello);

// // A button object calls the function:
// document.getElementById("btn").addEventListener("click", hello);




// //arrow func with no argument

// let greet = () => console.log('Hello'); greet(); // Hello


// //Arrow Function with One Argument
// let greet = x => console.log(x); greet('Hello'); // Hello





// //Arrow Function as an Expression
// let age = 5; let welcome = (age < 18) ? () => console.log('Baby') : () => console.log('Adult'); welcome(); // Baby




// Multiline Arrow Functions

// let sum = (a, b) => { let result = a + b; return result; } let result1 = sum(5,7); console.log(result1); // 12











//promise


// var promise = new Promise(function(resolve, reject){
//     //do something
// });


// var promise = new Promise(function(resolve, reject) {
//     const x = "Books";
//     const y = "Books"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
     
//   promise.
//       then(function () {
//           console.log('Success, You are a GEEK');
//       }).
//       catch(function () {
//           console.log('Some error has occurred');
//       });



//Promise Resolved
// var promise = new Promise(function(resolve, reject) {
//     resolve('Books');
// })
   
// promise
//     .then(function(successMessage) {
//        //success handler function is invoked
//         console.log(successMessage);
//     }, function(errorMessage) {
//         console.log(errorMessage);
//     })


//callback
// document.write("Hi");
//     document.write("<br>");
  
//     setTimeout(() => {
//         document.write("Let us see what happens");
//     }, 2000);
  
//     document.write("<br>");
//     document.write("End");
//     document.write("<br>");


//Asynchronous

// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);
  
  

//synchronise

// // Define a function function f1()
//  { 
//     // Do something // Do something again // Again // So on... } // Invoke the function f1();
//  }