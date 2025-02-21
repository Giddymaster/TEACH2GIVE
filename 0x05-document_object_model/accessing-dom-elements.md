# Accessing Dom Elements
Document Object Model(DOM) is a standard for how to get, change,add, delete and modify HTML elements.  

We start by accessing document object - the HTML document then use the following methods to access DOM elements.

We start by HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessing Dom Elements</title>
    <style>
        .highlight {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1 id="header">Accessing Dom Elements</h1>
    <p>We are 16 students in Web Development Class</p>
    <p>We are learning javascript this week.</p>

    <div class="box">Div with class box</div>
    <div class="box">Div with class box2</div>
    <div class="box">Div with class box3</div>

    <span class="highlight">Web Development.</span>

    <button type="button">button</button>
</body>
</html>
```
1. document.getElementById(elementId) - Selects the `<h1>` with id="header" and changes its color to blue.
```js
function button {
    let header = document.getElementById("header");
    header.style.color = "blue";
    console.log("getElementById:", header.innerText);
```
2. document.getElementsByTagName(name) - Selects all `<p>` elements and increases their font size.
```js

    let paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs);
```
3. document.getElementsByClassName(className) -  Selects all elements with class="box" and applies a gray background.
```js

    let boxes = document.getElementsByClassName("box");
    console.log(boxes);
```
4. document.querySelector(selector) - Selects the first .box element and adds a black border.
```js
    let firstBox = document.querySelector(".box");
    console.log(firstBox);
```
5. document.querySelectorAll(selector) - Selects all elements with class="highlight" and changes the background color to yellow.
```js
    let allHighlighted = document.querySelectorAll(".highlight");
    console.log(allHighlighted);
}
```