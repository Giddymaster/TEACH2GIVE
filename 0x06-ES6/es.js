// console.log(num);
// let num = 10;
// let count;
// count = 5;
// console.log(count); // Output: 5

// count = 10;
// console.log(count); // Output: 10

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(2, 3));

// const multiply = (a, b) => a * b;
// console.log(multiply(3, 2));
// const obj = {
//     value: 10,
//     getValue: () => console.log(this.value) // `this` refers to the surrounding scope, not `obj`
// };
// obj.getValue(); // Output: undefined
// function greet(name) {
//     if (!name) {
//         name = "student";
//     }
//     console.log("Hello, " + name);
// }
// greet(); // Output: Hello, student
// greet("Gideon"); // Output: Hello, Gideon
function greet(name = "student") {
    console.log(`Hello, ${name}`);
}
greet(); // Output: Hello, student
greet("Gideon"); // Output: Hello, Gideon