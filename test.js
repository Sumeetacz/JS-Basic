// var a = 10;
// console.log(a)



// var a = 10
// function f(){
// console.log(a)
// }
// f();
// console.log(a); // output 10,10


// function f() {
 
//     // It can be accessible any
//     // where within this function
//     var a = 10;
//     console.log(a)
// }
// f();

// // A cannot be accessible
// // outside of function

// console.log(a);



// var a = 10
   
//     // User can re-declare
//     // variable using var
//     var a = 8
 
//     // User can update var variable
//     a = 7



// var name = "my name";
// var myAge = 22;

// if(myAge > 18) {
//     var name = "another person name";
// }

// console.log(name); //output => "another person name"



//let



// let a = 10
 
// // It is not allowed
// let a = 10

// // It is allowed
// a = 10




// let a = 10
//   if (true) {
//     let a=9
//     console.log(a) // It prints 9
//   }
//   console.log(a) // It prints 10



// let name = "Sumeet";
// name = "kumar"
// console.log(name);



// let myAge = 20;
// if(myAge > 18) {
//     let myName = "my name";
//     console.log(myName) //output => "my name"
// }
// console.log(myName); //output => ReferenceError



// let myName = "my name";
// myName = "my new name";
// console.log(myName); //output => "my new name"




//const


// const name ="Sumeet";
// name = "Kumar";
// console.log(name);


// const myName = "my name";
// myName = "not my name";

// console.log(myName); //output => TypeError: invalid assignment to const 'myName'






console.log('here is demo test');
function greet(name){
    console.log(name + "is a good boy");
}

let name = "Shunham";
let name1 = "Sagar";
let name2 = "Amit";
let name3 = "Rohan";

greet(name);
greet(name1);
greet(name2);
greet(name3);
console.log(name + "is a good boy");
console.log(name1 + "is a good boy");
console.log(name2 + "is a good boy");
console.log(name3 + "is a good boy");