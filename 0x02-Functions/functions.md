# Functions
A function is a block of code that performs a specific task. Functions are first-class citizens. To use a function you need to invoke or call it.
```js
function = functionName(parameter){
    function body/block of code
}

functionName(argument); // calling a function
```

A parameter is a variable declared in a function and it acts as a placeholder for argument.
An argument is an actual/real value or data that will be passed to a function when called.
>A function can have multiple parameters. Each argument passed must match a parameter.

```js
function program(fullName, course, school){
    console.log(`Name: ${fullName}`);
    console.log(`Course: ${course}`);
    console.log(`School: ${school}`)

}

program("Gideon Mwangi", "Web Development", "Teach2Give");
program("Pascal Juma", "Web Development", "Teach2Give");
program("Levi Mbui", "Web Development", "Teach2Give");
```
    output:
    Name: Gideon Mwangi
    Course: Web Development
    School: Teach2Give
    Name: Pascal Juma
    Course: Web Development
    School: Teach2Give
    Name: Levi Mbui
    Course: Web Development
    School: Teach2Give

#### Function return values 
It uses return keyword.
```js
function prod(a, b){
    return a*b
}

prod(5, 10) // result of a*b wont be printed.

let result = prod(5,10)
console.log(result) //output will be the product ab.
```
    output:
    50

### Categories of functions
- Functions that dont take parameters and dont return value.  
```js
function students(){
    console.log("Teach2Give")
}
students();
```
    output:
    Teach2Give

- Functions that dont take parameters but return value.  
```js
function students(){
    return "Teach2Give";
}

let message = students();
console.log(message);
```
    output:
    Teach2Give

- Functions that take parameters and dont return value.  
```js
function prod(a,b){
    console.log(a*b);
}
prod (5,10)
```
    output:
    50

- Functions that take parameters and return value.

```js
function prod(a, b) {
    return a * b; 
}

let product = prod(5, 10);
console.log(product);

```
    output
    50

### Types of Functions
1. Function declaration -defining a function in javascript.  
```js
function products(a, b){
    // the function product is defined
}

product(); // calling a function
```
2. Function expressions/anonymous function - saving/declaring a function into a variable. 
```js
const product = function(a,b){
    console.log(a*b);
}
product(5,10) // output is 15
```
3. Arrow Functions - simplifies code to single line. From:
```js
const product = function(a,b){
    console.log(a*b);
}
product(5,10)

to

const product = (a,b)=>{ // word function is replace by arrow
    console.log(a*b);
}
product(5,10)

or

const product = (a,b)=>console.log(a*b);
product(5,10)

```
4. Callback Function - function that is passed as an argument to another function and is executed later inside that function
```js
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Pascal", sayGoodbye);// Passing sayGoodbye as a callback
```
    output:
    Hello, Pascal
    Goodbye!