# Introduction to Javascript  

Javascript enables us to add the interactivity and dynamic functionalities to our websites.  

# 

Javascript can be used internally or externally in a HTML document.
We use `<script> " javascript code is wriiten here " </script>` tag in the HTM files.

### Internal Javascript  
Javascript code is written in the body of the HTML file. Its recommended to place the script at the end of the body to  optimize the script loading. Javacript can block page rendering if not loaded correctly.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // This is a single line comment
        /*
            This is a multi-line comment
        */
        console.log("Hello World!");
    </script>
</body>
</html>
```

### External Javascript  
The scrit is written in a separate .js file then linked into HTML file. For example, main.js is a sepate file but its linked into the HTML document in the head section.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body>
    <h1>External Javascript</h1>
    <p>The javascrit file main.js is linked on the header section</p>
</body>
</html>
```

main.js

```javascript
console.log('Hello, world!');
console.log('This is external JavaScript file.');
```

#### Optimizing script loading.  

1. Use defer keyword to ensure the script is loaded after the HTML is fully loaded.    

```javascript
<script src="main.js" defer></script>
```  

2. Use asnc keyword to load scripts asynchronously and run them as soon as they are downloaded. The assync keyword should be used where its absolutely needed.    

```javascript
<script src="main.js" async></script>
```

3. Put the script tag at the end of the every page before the closing body tag.  

```javascript
<script src="main.js">The script closing tag is put</script>
```
