## Rest Operator

The rest operator (`...`) is used to collect multiple elements into a single array or object.

It is commonly used in array and object destructuring, as well as function parameters.

### Rest Operator Use Cases

#### Rest in Function Parameters
When a function has multiple parameters but we don’t know how many arguments will be passed, we can use the rest operator.

```js
function myFunction(...numbers) {
  console.log(numbers);
}

myFunction(5, 6);  // [5, 6]
myFunction(10, 14, 23, 12, 9); // [10, 14, 23, 12, 9]
myFunction(2); // [2]
```

