#  ES6 Modules

ES6 introduced a module system that enables JavaScript code to be divided into separate files, making it more structured, reusable, and easier to maintain.

Modules export and import functions, variables, or classes across different files.

### Using ES6 Modules
- In browsers, set the `<script>` tag’s `type` to `module`:
  
  ```html
  <script type="module" src="app.js"></script>
  ```
  
- In Node.js, add `"type": "module"` in `package.json` or use the `.mjs` extension.

## Exporting and Importing
ES6 provides **named exports** and **default exports**.

### Named Exports
Exports multiple values from a module using the `export` keyword.

**mathUtils.mjs:**
```js
export function multiply(x, y) {
  return x * y;
}
```

**app.mjs:**
```js
import { multiply } from "./mathUtils.mjs";
console.log(multiply(4, 3)); // 12
```

### Aliases for Imports
Rename imports using `as`.

**mathUtils.mjs:**
```js
export function multiply(x, y) {
  return x * y;
}
```

**app.mjs:**
```js
import { multiply as product } from "./mathUtils.mjs";
console.log(product(4, 3)); // 12
```

### Default Exports
Each module can have one default export, which can be imported without curly braces.

**logger.mjs:**
```js
export default function logMessage(msg) {
  console.log(`Message: ${msg}`);
}
```

**app.mjs:**
```js
import logMessage from "./logger.mjs";
logMessage("Hello, World!");
```

**Output:**
```js
Message: Hello, World!
```

This system is based on exporting and importing functions, variables, or classes across different files.

## Key Considerations for ES6 Modules

When utilizing ES6 modules in a web browser, ensure that the _type_ attribute in the _<script>_ tag is set to _module_.

```html
<script type="module" src="app.js"></script>
```

For ES6 modules in Node.js:
- Add "type": "module" to your `package.json` file.
- Use the `.mjs` extension for module files.

## Exporting and Importing in ES6 Modules

ES6 provides two main ways to export content from a module: **named exports** and **default exports**.

### Named Exports

Named exports allow multiple values to be exported from a single module using the `export` keyword.

**Example: Exporting a function from a file called `mathUtils.mjs` and importing it in `app.mjs`:**

**mathUtils.mjs:**
```js
export function multiply(x, y) {
  return x * y;
}
```

**app.mjs:**
```js
import { multiply } from "./mathUtils.mjs";

console.log(multiply(4, 3));
```

**Output:**
```js
12
```

### Assigning Aliases to Imports

The `as` keyword allows renaming of imported modules for better readability or to avoid conflicts.

**mathUtils.mjs:**
```js
export function multiply(x, y) {
  return x * y;
}
```

**app.mjs:**
```js
import { multiply as product } from "./mathUtils.mjs";

console.log(product(4, 3));
```

**Output:**
```js
12
```

### Default Exports

Each module can have only one default export, which can be imported using any name.

**logger.mjs:**
```js
export default function logMessage(msg) {
    console.log(`Message: ${msg}`);
}
```

**app.mjs:**
```js
import logMessage from "./logger.mjs";

logMessage("Hello, World!");
```

**Output:**
```js
Message: Hello, World!
```

