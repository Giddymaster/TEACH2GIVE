# Changing DOM Elements
We can change the content, attributes and styling of DOM elements

## Changing the content of HTML elements
1. innerHTML - Sets or gets the HTML content of an element. updates the h1 element.  
```js
const header = document.getElementById("header"); 
header.innerHTML = "Welcome to JavaScript DOM Manipulation"; 
console.log(header);
```

2. innerText - Sets or get the text content of an element not preserving the HTML tags. changes the first paragraph’s text (ignores HTML).  
```js
const firstParagraph = document.getElementsByTagName("p")[0]; 
firstParagraph.innerText = "JavaScript is fun!";
console.log(firstParagraph);
```
3. textContent - Sets or gets the text content of an element and its descendants without preserving the HTML tags. modifies the second paragraph.
```js
const secondParagraph = document.getElementsByTagName("p")[1]; 
secondParagraph.textContent = "Learning JavaScript this week.";
console.log(secondParagraph);
```

## Changing the attribute of HTML elements
1. use element.attribute = value -Directly setting type of the button.  
2. use element.setAttribute("attribute", "value")


## Changing the styling of HTML elements
1. use element.style.property = "value" - Directly modifying style properties like backgroundColor, padding, and border.
```js
const box = document.querySelector(".box"); 
box.style.backgroundColor = "lightblue";
box.style.padding = "10px";
box.style.border = "2px solid black";
console.log(box);
```

## Changing styling in JavaScript using CSS classes
1. element.classList.add() - dds one or more class names to an element without removing the existing classes.
`classList.add("new-style")` adds a new class. 
```js
const span = document.querySelector(".highlight");
span.classList.add("new-style");
console.log(span.classList);
``` 

2. element.classList.remove() - removes one or more classes from an element.   
`classList.remove("highlight")` removes an existing class.
```js
span.classList.remove("highlight");
console.log(span.classList);
``` 

3. element.classList.toggle() - toggles the specified class, it is present, it is removed, if it is absent, it is added. 
`classList.toggle("active")` toggles the class on or off.
```js
const span = document.querySelector(".highlight");
span.classList.add("new-style");
console.log(span.classList);
```
4. element.classList.contains() - returns true if an element contains the specified class(es), false otherwise.
`classList.contains("active")` checks if a class exists.
```js
box.classList.toggle("active");
console.log(box.classList.contains("active"));
```
5. element.classList.replace() - replaces an existing class with a new class.
`classList.replace("box", "new-box")` replaces a class. 
```js
box.classList.replace("box", "new-box");
console.log(box.classList);
```

6. element.style.setProperty() - sets a CSS property on an element (first parameter) and its value (second parameter).
`style.setProperty("font-size", "20px")` modifies a CSS property.
```js
box.style.setProperty("font-size", "20px");
console.log(box.style.fontSize);
```