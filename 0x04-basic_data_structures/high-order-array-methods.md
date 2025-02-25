# Higher-Order Array Methods
Higher-order array methods provide powerful tools for handling arrays. They enhance efficiency by applying functions directly to elements, improving code clarity and maintainability.

## Common Higher-Order Methods

### `forEach()`
Executes a function on each array element but does **not** return a new array.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6, 8, 10
```

### `map()`
Generates a **new array** by applying a function to each element.

```javascript
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10]
```

### `filter()`
Returns a **new array** with elements that pass a specified test.

```javascript
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4]
```

### `reduce()`
Reduces an array to a **single value** by applying a function iteratively.

```javascript
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 15
```

### `find()`
Returns the **first** element that satisfies a condition.

```javascript
const found = numbers.find(num => num === 3);
console.log(found); // Output: 3
```

### `findIndex()`
Returns the **index** of the first element that meets a condition.

```javascript
const index = numbers.findIndex(num => num > 2);
console.log(index); // Output: 2
```

### `some()`
Checks if **at least one** element matches a condition.

```javascript
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true
```

### `every()`
Checks if **all** elements pass a specified test.

```javascript
const allEven = [2, 4, 6].every(num => num % 2 === 0);
console.log(allEven); // Output: true
```