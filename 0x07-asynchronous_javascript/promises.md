# Promises
## Understanding Promises
A **promise** is a JavaScript object that represents a value that might be available now, later, or never. It provides a structured way to manage asynchronous operations.

### Why Use Promises?
- Asynchronous operations don't always return results immediately.
- Promises link **producing** (data retrieval) and **consuming** (using the retrieved data) code.
- They offer a clearer and more readable alternative to callbacks.

## Promise States
A promise can exist in three states:
1. **Pending** – Initial state, waiting for completion.
2. **Fulfilled** – Operation was successful.
3. **Rejected** – Operation failed.

## Creating a Promise
A promise is created using the `new Promise()` constructor, which takes an executor function with `resolve` and `reject` parameters.

### Example
```javascript
let myPromise = new Promise((resolve, reject) => {
    let x = 1;
    if (x === 1) {
        resolve("x is 1");
    } else {
        reject("x is not 1");
    }
});
```

## Consuming a Promise
- Use `.then()` to handle the resolved value.
- Use `.catch()` to handle errors.
- Use `.finally()` for cleanup, regardless of success or failure.

### Syntax
```javascript
myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise handling complete.");
    });
```
### Example:
```js
let myPromise = new Promise(function (resolve, reject) {
  let x = 1;
  if (x === 1) {
    resolve("x is 1");
  } else {
    reject("x is not 1");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("It was nice working with this promise");
  });
```

## Returning a Promise from a Function
Functions can return promises to allow chaining and better readability.

### Example
```javascript
function fetchUser() {
    return new Promise((resolve, reject) => {
        let error = false;
        if (!error) {
            resolve({ username: "_john", role: "Admin" });
        } else {
            reject("There was an error");
        }
    });
}

fetchUser()
    .then((user) => {
        console.log(`Username: ${user.username}, Role: ${user.role}`);
    })
    .catch((error) => {
        console.log(error);
    });
```

## Benefits of Promises
- **Improved Readability**: Avoids deeply nested callbacks.
- **Better Error Handling**: Errors can be caught in a single `.catch()`.
- **Scalability**: Easier to chain multiple asynchronous operations.

