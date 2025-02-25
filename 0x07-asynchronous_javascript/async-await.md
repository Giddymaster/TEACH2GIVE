# Consuming Promises with Async/Await 

`async/await` provides a modern approach to handling asynchronous operations in JavaScript. It simplifies working with promises, making asynchronous code look more like synchronous code.

### Why Use Async/Await?
- Built on **Promises**, offering a cleaner and more readable syntax.
- Helps avoid **callback hell**.
- Allows structured error handling with `try...catch`.

## Using Async/Await
- The `async` keyword makes a function return a **promise**.
- The `await` keyword pauses execution until the **promise resolves**.

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

async function processUser() {
    const user = await fetchUser();
    console.log(user);
}

processUser();
```

## Handling Errors with Async/Await
Errors can be caught using `try...catch`, making it easier to debug asynchronous code.

### Example
```javascript
async function processUser() {
    try {
        const user = await fetchUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

processUser();
```

## Using Finally with Async/Await
`finally` executes whether the promise is fulfilled or rejected.

### Example
```javascript
async function processUser() {
    try {
        const user = await fetchUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Process completed");
    }
}

processUser();
```

## Benefits of Async/Await
- **More readable** than promise chaining.
- **Easier debugging** with `try...catch`.
- **Better error handling** without multiple `.catch()` calls.
