
    // 1. document.getElementById(elementId)
    // let header = document.getElementById("header");
    // console.log(header);

    // 2. document.getElementsByTagName(name)
    let paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs);

    // 3. document.getElementsByClassName(className)
    let boxes = document.getElementsByClassName("box");
    console.log(boxes);

    // 4. document.querySelector(selector) - Selects the first matching element
    let firstBox = document.querySelector(".box");
    console.log(firstBox.innerText);

    // 5. document.querySelectorAll(selector) - Selects all matching elements
    let allHighlighted = document.querySelectorAll(".highlight");
    allHighlighted.forEach(el => el.style.backgroundColor = "yellow");
    console.log("querySelectorAll:", allHighlighted);
    const header = document.getElementById("header"); 
    header.innerHTML = "Welcome to JavaScript DOM Manipulation"; 
    console.log(header); // <h1 id="header">Welcome to JavaScript DOM Manipulation</h1>
    
    const firstParagraph = document.getElementsByTagName("p")[0]; 
    firstParagraph.innerText = "JavaScript is fun!";
    console.log(firstParagraph); // <p>JavaScript is fun!</p>
    
    const secondParagraph = document.getElementsByTagName("p")[1]; 
    secondParagraph.textContent = "Learning JavaScript this week.";
    console.log(secondParagraph); // <p>Learning JavaScript this week.</p>
    