# DOM Event Listener Method
The `addEventListener()` method attaches an event handler to a specified element.

It attaches an event handler without overwriting existing handlers.
It takes in these parameters:
The first parameter is the type of event passed in as a string e.g., click, mousedown, mouseenter e.t.c.

The second parameter is the function we want to call when the specified event occurs.

Example:
```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Button Clicked");
});
```