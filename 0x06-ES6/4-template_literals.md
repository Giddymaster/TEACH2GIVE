# Template Literals
Template literals simplify string handling by allowing multi-line strings and variable interpolation.

# Benefits of Template Literals
- Multi-line strings without needing `\n.`
- String interpolation for embedding variables.
- Directly evaluating expressions inside `${}`.
- String Interpolation

### Before ES6:
```js
const city = "Nairobi";
const country = "Kenya";
console.log("I live in " + city + ", " + country + ".");
```
### With template literals:
```js
const city = "Nairobi";
const country = "Kenya";
console.log(`I live in ${city}, ${country}.`);
```
## Multi-Line Strings
### Before ES6, multi-line strings required \n:
```js
const message = "Line 1\n" + "Line 2\n" + "Line 3";
console.log(message);
```
### With template literals:
```js
const message = `Line 1
Line 2
Line 3`;
console.log(message);
```
### Embedded Expressions

Template literals allow direct evaluation of expressions within `${}`:
```js
let num1 = 8;
let num2 = 4;

console.log(`The sum is ${num1 + num2} and the difference is ${num1 - num2}`);
```
Template literals improve readability and simplify string manipulations in JavaScript.

