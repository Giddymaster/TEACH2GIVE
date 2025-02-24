# Spread Operator
The spread operator `(...)` allows you to expand elements of an iterable (such as arrays, objects, or strings) into individual components. The spread operator enhances code flexibility by simplifying array and object manipulations

## Expanding an Array
The spread operator unpacks array elements when needed.

### Example:
```js
const numbers = [1, 2, 3];
console.log(...numbers); 
// Output: 1 2 3

const letters = ["A", "B", "C"];
console.log(...letters); 
// Output: A B C
``` 

## Copying Arrays
Using the spread operator, you can create a copy of an array without modifying the original.

### Example:
```js
const original = [10, 20, 30];
const copy = [...original];
copy.push(40);

console.log(original); 
// Output: [10, 20, 30]
console.log(copy);     
// Output: [10, 20, 30, 40]
``` 

## Merging Arrays
You can merge multiple arrays using the spread operator.

### Example:
```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const merged = [...array1, ...array2];

console.log(merged); 
// Output: [1, 2, 3, 4, 5, 6]
```

## Adding Elements to an Array
The spread operator allows inserting elements into an array dynamically.

### Example:
```js 
const nums = [2, 3, 4];
const newNums = [1, ...nums, 5];

console.log(newNums); 
// Output: [1, 2, 3, 4, 5]
```

## Copying Objects
You can duplicate an object using the spread operator.

### Example:
```js
const person = { name: "Gideon", age: 30 };
const copy = { ...person };

console.log(copy); 
// Output: { name: "Gideon", age: 30 }
``` 

## Merging Objects
The spread operator makes merging objects easy.

## Example:
```js
const obj1 = { firstName: "Gideon" };
const obj2 = { lastName: "mwangi" };
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); 
// Output: { firstName: "Gideon", lastName: "mwangi" }
```

## Overwriting Properties
When merging objects, properties from the right-most object override those on the left.

### Example:
```js
const user = { name: "Gideon", role: "User" };
const updatedUser = { ...user, role: "Admin" };

console.log(updatedUser); 
// Output: { name: "Gideon", role: "Admin" }
```