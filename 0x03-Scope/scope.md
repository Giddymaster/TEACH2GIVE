# Scopes
Scope determine where the variables are accessible.

## Types of scope
- Global Scope-  they are declared outside any function/block. It accessed anywhere in the js.  
```js
let age = 25

function myAge(){
    console.log(age);
}

myAge()
```

- Functional Scope - declared inside a function and only declared in the functions only.  

- Blockscope (using let and const) - any code inside a {} is a block. Only variables declared using a `let` and `const` can be accessed and not outside the block. Variables declared inside a block can be accessed inside and outside the block as its not a blockscope.
```js
function myAge() {
    if (true) {
        let x = 10;
        const y = 20;
        var z = 30;
        console.log(x); 
        console.log(y); 
        console.log(z); 
    }

    console.log(x); // this will throw an error. let can only be accessed inside the block.
    console.log(y); //  this will throw an error. const can only be accessed inside the block.
    console.log(z); // this will be printed.
}
myAge();
```
    output:
    10
    20
    30
    30

- Lexical Scope -  This happens when we have nested child(inner) functions inside a parent(outer) function. Variable declared in the the child function can only be accessed in the child function only whereas those in parent function can be accessed by both the parent and child functions.
```js
function outer() {
    let myAge = 55;
    function inner(){
        console.log(myAge)
    }
}
outer()