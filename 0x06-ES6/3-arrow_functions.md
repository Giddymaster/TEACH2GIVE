# Arrow Functions in ES6
Arrow functions were introduced in ES6 to offer a more concise way to define functions, eliminating the need for the function keyword and simplifying syntax.

## Traditional Function vs. Arrow Function

- Before (Using function keyword):
```js
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
```
- After (Using arrow function):
```js
const multiply = (a, b) => a * b;
console.log(multiply(3, 2));
```

- Arrow Functions and this
Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical scope, making them unsuitable for use as object methods.

Example:
```js
const obj = {
    value: 10,
    getValue: () => console.log(this.value) 
    // `this` refers to the surrounding scope, not `obj`
};
obj.getValue(); 
// Output: undefined
```