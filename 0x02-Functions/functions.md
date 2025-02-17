# Functions
A function is a block of code that performs a specific task. Functions are first-class citizens. To use a function you need to invoke or call it.
```js
function = functionName(parameter){
    ffunction body/block of code
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

```

- Functions that dont take parameters but return value.  
```js

```

- Functions that take parameters and dont return value.  
```js

```

- Functions that take parameters and return value.

```js

```

### Types of Functions
1. Function declaration  
```js
```
2. Function expressions/anonymous function  
```js
```
3. Arrow Functions  
```js
```
4. Call Back Functions  
```js
```