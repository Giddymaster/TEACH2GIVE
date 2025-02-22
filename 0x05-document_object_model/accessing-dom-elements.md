# Accessing Dom Elements
Document Object Model(DOM) is a standard for how to get, change,add, delete and modify HTML elements.  

We start by accessing document object - the HTML document - then use the following methods to access DOM elements.

We start by HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessing Dom Elements</title>
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
# Methods of accessing DOM elements
1. `document.getElementById(elementId)` - Selects the `<h1>` with id="header" and changes its color to blue.
```js
    let header = document.getElementById("header");
    console.log(header);
```
    output:
    <h1 id="header">Accessing Dom Elements</h1>


2. `document.getElementsByTagName(name)` - Selects all HTML tags eg. `<p>` and returns NodeList of all elements that match the tagname passed.
```js

    let paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs);
```
    output:
    HTMLCollection(2) [p, p]

3. `document.getElementsByClassName(className)` -  Selects all elements with classname eg ` class="box" ` and returns a NodeList of all elements that match the class name passed.
```js

    let boxes = document.getElementsByClassName("box");
    console.log(boxes);
```
    output:
    HTMLCollection(3) [div.box, div.box, div.box]

4. `document.querySelector(selector)` - Selects the first element that matches a specified css selector, id or tagname eg `.box` 
```js
    let firstBox = document.querySelector(".box");
    console.log(firstBox);
```
    output:
    <div class="box">Div with class box</div>

5. `document.querySelectorAll(selector)` - Selects all elements with  class, id or tag name eg. `class="highlight"` and returns a  node list of them
```js
    let allHighlighted = document.querySelectorAll(".highlight");
    console.log(allHighlighted);
```
    output:
    NodeList(1) [span.highlight]
