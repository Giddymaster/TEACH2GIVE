# Fetch and HTTP Requests
Fetch allows your computer/client to communicate with other computer/server over the web. 

HTTP protocol - media which computer communicates.
HTTP Request- client computer asking for data from server.
HTTP Response - server computer giving feedback to client.

## Types of HTTP Requests
1. Get - client computer asking for data from server computer eg, serching videos on You Tube(server)
2. Post -client computer sends data to be created on the server. eg. uploading video You Tube(server)
3. Put - client computer requesting data to be updated on server. eg. editing/modifying uploaded video on You Tube(server) 
4. Delete - client computer requesting data to be deleted on server.  eg. deleting uploaded videos You Tube(server)

## Making fetch Request

`fetch ("api endpoint")` - api endpoint is the identifier of the server
`Resource` is the specified item required from the api. eg users, comments, posts etc.

```js
fetch("https://jsonplaceholder.typicode.com/users") 
//Asks the server for user data (GET request).
  .then(function (response) { 
  })
  // convert non-readable response to JSON
    return response.json();
  .then(function (data) {
    console.log(data); //returns a promise
  })
  //If something goes wrong, e.g., no internet, this shows an error.
  .catch(function (error) {
    console.log("There was an error");
    console.log(error);
  });
  ```

  ## Using Assync Function 
  ```js
  async function fetchUser() {
  try {
    // await parses the promise
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json(); // Convert response to JSON, gives the data.
    console.log(data); // Display user data
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}

fetchUser();
```

## Handling Errors
Sometimes, things go wrong (e.g., no internet, server issues) Use `try` and `catch`
```js
async function fetchLyrics() {
  try {
    const response = await fetch(
      "https://api.lyrics.ovh/v1/artist/title");
    
    const data = await response.json(); // Convert response to JSON
    console.log(data); // Display user data
  } catch (error) {
    console.error("Error: Type another song title"); // Handle errors
  }
}

fetchLyrics();