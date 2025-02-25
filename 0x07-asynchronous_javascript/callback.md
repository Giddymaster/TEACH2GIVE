# Callbacks 
## What Are Callbacks?
A **callback** is a function passed as an argument to another function, ensuring it runs only after the previous function completes. Works fine when `fetchData()` returns data immediately. `showData(userData)` then logs the user's details.

### Example (Synchronous Code)
```javascript
function fetchData() {
    return { username: "Mwangi", role: "User" };
}

function showData(data) {
    console.log(`Username: ${data.username}, Role: ${data.role}`);
}

const userData = fetchData();
showData(userData);
```

## Asynchronous Issue
When dealing with delayed operations like API calls, returning data immediately doesn't work. `fetchData()` -does not wait for the data to be ready, returns `undefined` because `setTimeout`- which delays execution of the function, is asynchronous.

### Example (Delayed Fetch Fails)
```javascript
function fetchData() {
    setTimeout(() => {
        return { username: "Mwangi", role: "User" };
    }, 2000);
}

const userData = fetchData(); // Undefined
showData(userData);
```


## Solution: Callbacks
A **callback function** ensures data is processed only after it's available. The callback ensures the data is used after fetching is complete.

### Example (Using Callbacks)
```javascript
function fetchData(callback) {
    setTimeout(() => {
        let data = { username: "Mwangi", role: "User" };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log(`Username: ${data.username}, Role: ${data.role}`);
});
```


## Callback Hell
Nested callbacks can make code unreadable and difficult to maintain.

### Example (Callback Hell)
```javascript
fetchUser((user) => {
    fetchPosts(user, (posts) => {
        fetchComments(posts[0], (comments) => {
            console.log(`User: ${user.username}, Posts: ${posts}, Comments: ${comments}`);
        });
    });
});
```

Deep nesting makes debugging and scaling harder.
## Alternative: Promises
To avoid callback hell, **Promises** offer a more structured approach to handling asynchronous operations.

