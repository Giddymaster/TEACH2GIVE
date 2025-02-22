# DOM Events
An event in the DOM is an action that happens in the browser that the browser can respond to after user interactions eg. clicks, key presses, or mouse movements.

## Some popular DOM events
1. `onclick` - triggered when an element is clicked.
```js
const buttonElement = document.querySelector("button");
buttonElement.onclick = function() {
    console.log("Button clicked!");
};
```
    Output:
    Button clicked! (upon clicking the button)

2. `onmouseover` - Triggered when the mouse pointer moves over an element.

3. `onmouseout` - Triggered when the mouse pointer moves out of an element.

4. `onkeydown` - Triggered when a key is pressed down.

5. `onkeyup` - Triggered when a key is released.

6. `onload` - Triggered when the entire page has finished loading.

7. `onfocus` - Triggered when an element gains focus.
