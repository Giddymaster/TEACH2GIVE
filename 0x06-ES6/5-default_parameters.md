# Default Parameters
Default parameters enable function parameters to have preset values if no argument is provided.

## Example Usage

### Before ES6:
```js
function greet(name) {
    if (!name) {
        name = "student";
    }
    console.log("Hello, " + name);
}
greet(); 
greet("Gideon"); 
```
    output:
    Hello, student
    Hello, Gideon

### With default parameters:
Default parameters make functions more flexible and reduce unnecessary conditional checks.
```js
function greet(name = "student") {
    console.log(`Hello, ${name}`);
}
greet(); 
greet("Gideon");
```
    output:
    Hello, student
    Hello, Gideon
