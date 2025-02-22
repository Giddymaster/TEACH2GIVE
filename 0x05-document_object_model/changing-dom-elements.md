# Changing DOM Elements
We can change the content, attributes and styling of DOM elements

The HTML:
```HTML
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

## Changing the content of HTML elements
1. `innerHTML` - Sets or gets the HTML content of an element. updates the h1 element.  
```js
const header = document.getElementById("header");
console.log(header.innerHTML); // accessing
header.innerHTML = "<h1>Updated Header Content</h1>";
console.log(header.innerHTML);
```
  output:
  <h1>Updated Header Content</h1>

2. `innerText` - Sets or get the text content of an element not preserving the HTML tags. changes the first paragraph’s text (ignores HTML).  
```js
const firstParagraph = document.getElementsByTagName("p")[0];
console.log(firstParagraph.innerText);
firstParagraph.innerText = "Students in Web Development Class increased to 20.";
console.log(firstParagraph.innerText);
```
  output:
  Students in Web Development Class increased to 20.

3. `textContent` - Sets or gets the text content of an element and its descendants without preserving the HTML tags. modifies the second paragraph.
```js
const secondParagraph = document.getElementsByTagName("p")[1];
console.log(secondParagraph.textContent);
secondParagraph.textContent = "We are creating a game using javascript this week.";
console.log(secondParagraph.textContent);
```
    output:
    We are creating a game using javascript this week.

## Changing the attribute of HTML elements
1. use element.attribute = value -Directly setting type of the button.
```js
header.id = "updated-header";
console.log(header);
```
  Output: 
  Updated header id: updated-header

2. use element.setAttribute("attribute", "value")
```js
const button = document.querySelector("button");
button.setAttribute("type", "submit");
console.log(button);
```
  Output: 
  Updated button type: submit

## Changing the styling of HTML elements
1. use element.style.property = "value" - Directly modifying style properties like backgroundColor, padding, and border.
```js
const box = document.querySelector(".box");
box.style.backgroundColor = "lightblue";
box.style.padding = "10px";
box.style.border = "2px solid black";
console.log(box);
```
  output:
  The background-color: lightblue; padding: 10px; border: 2px solid black;

## Changing styling in JavaScript using CSS classes
1. `element.classList.add()` - adds one or more class names to an element without removing the existing classes.
```js
const span = document.querySelector(".highlight");
span.classList.add("new-style");
console.log(span.classList);
``` 

2. `element.classList.remove()` - removes one or more classes from an element.   
```js
span.classList.remove("highlight");
console.log(span.classList);
``` 

3. `element.classList.toggle()` - toggles the specified class class on or off, it is present, it is removed, if it is absent, it is added. 
```js
span.classList.toggle("active");
console.log(span.classList);
```

4. `element.classList.contains()` - returns true if an element contains the specified class, false otherwise.
```js
box.classList.toggle("active");
console.log(box.classList.contains("active"));
```
    Output: 
    Box contains 'active' class: false

5. `element.classList.replace()` - replaces an existing class with a new class. 
```js
box.classList.replace("box", "new-box");
console.log(box.classList);
```

6. `element.style.setProperty()` - sets a CSS property on an element (first parameter) and its value (second parameter). modifies a CSS property.
```js
box.style.setProperty("font-size", "20px");
console.log(box.style.fontSize);
```

    Output:
     Updated font size: 20px