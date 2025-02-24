# Block-Scoped Variables with let and const

Before ES6, JavaScript primarily used function scope and global scope, which often led to issues such as variable hoisting.

## Understanding let and const

Unlike `var`, variables declared using `let` and `const` are block-scoped, meaning they are only accessible within the block in which they are defined.

### Hoisting Behavior

Hoisting refers to JavaScript's default behavior of moving variable and function declarations to the top of their scope. However, unlike `var`, `let` and `const` are not initialized at the top, preventing unexpected behavior.

**Example:**
```js
console.log(num); 
//throws an error:
// ReferenceError: Cannot access 'num' before initialization
let num = 10;
```

### let: Mutable Block-Scoped Variable

Variables declared with `let` can be reassigned and do not require initialization at the time of declaration.

**Example:**
```js
let count;
count = 5;
console.log(count);  
// Output: 5

count = 10;
console.log(count); 
// Output: 10
```

### const: Immutable Block-Scoped Variable

Variables declared with `const` must be initialized and cannot be reassigned after their initial value is set.

**Example:**
```js
const PI = 3.14159;
console.log(PI); 
// Output: 3.14159

PI = 3.14; 
// throws an error:
// TypeError: Assignment to constant variable.
```

By using `let` and `const`, ES6 provides better control over variable scope, improving code predictability and reducing bugs.