// function program(fullName, course, school){
//     console.log(`Name: ${fullName}`);
//     console.log(`Course: ${course}`);
//     console.log(`School: ${school}`)

// }

// program("Gideon Mwangi", "Web Development", "Teach2Give");
// program("Pascal Juma", "Web Development", "Teach2Give");
// program("Levi Mbui", "Web Development", "Teach2Give");

// function prod(a, b){
//     return a * b;
// }

// //prod(5, 10) // result of a*b wont be printed.

// let result = prod(5,10);
// console.log(result); //output will be the product ab.

// const product = function(a,b){
//     console.log(a*b);
// }
// product(5,10)

// const product = (a,b)=>console.log(a*b);
// product(5,10)

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Pascal", sayGoodbye);// Passing sayGoodbye as a callback

// function prod(a,b){
//     console.log(a*b);
// }
// prod (5,10)

// function prod(a, b) {
//     return a * b;
// }

// let product = prod(5, 10);
// console.log(product);

// function students(){
//     console.log("Teach2Give")
// }
// students();

function students(){
    return "Teach2Give";
}

let message = students();
console.log(message);