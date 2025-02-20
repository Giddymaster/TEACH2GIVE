# Basic Dat Structures.  
Data structures is a way to organize and store data so that it can be accessed and modified. There are several basic inbuilt data structures including  
- arrays
- objects
- sets
- maps
- strings

# Arrays
An array is a collection of elements/ special variables that can hold more than one variables/data type accessed by an id/index. 
### creating arrays
1. using literals
```js 
let courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
console.log(courseMates)
const nums = [1,2,3,4]
console.log(nums)
```
    output:
    [ 'Levi', 'Pascal', 'Moses', 'Naomi' ]
    [ 1, 2, 3, 4 ]

2. using new Array constructor.
```js
let courses = new Array("web dev", "sales force" ,"software engineering", "cyber security")
console.log(courses)
```
    output:
    [ 'web dev', 'sales force', 'software engineering', 'cyber security' ]

>NOTE: Arrays can be multi-dimentional, that is, array can be put inside of another array.
```js
let courseMates = ["Levi", "Pascal", "Moses", "Naomi",[1,2,3,4] ]
console.log(courseMates)
```
    output:
    [ 'Levi', 'Pascal', 'Moses', 'Naomi', [ 1, 2, 3, 4 ] ]
### accessing arrays  
-done by referring and index number of array item. Index counting starts at zero.  
```js
let courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
console.log(courseMates[3]) // Naomi
```
    output:
    Naomi
### array Methods
- __length()__ - checks the length/number of items in  an array and returns it  
```js
let courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
console.log(courseMates.length)
```
    output:
    4

- pop() - removes the last element of the array
```js
let courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
courseMates.pop();
console.log(courseMates);
```
    output:
    [ 'Levi', 'Pascal', 'Moses' ]

- push() - adds new element at the end of an array
```js
let courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
courseMates.push("Lydiah");
console.log(courseMates);
```
    output:
    [ 'Levi', 'Pascal', 'Moses', 'Naomi', 'Lydiah' ]


- shift() - removes first element of an array.
```js
let courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
courseMates.shift();
console.log(courseMates);
```
    output:
    [ 'Pascal', 'Moses', 'Naomi' ]


- unshift() - adds element in the start of an array. Returns new length of the array.  
```js
let courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
courseMates.unshift("Elias");
console.log(courseMates);
```
    output:
    [ 'Levi', 'Pascal', 'Moses', 'Naomi' ]  


- at() - returns element at specific index 
```js
const courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
console.log(courseMates.at(0));
console.log(courseMates.at(2));
```
    output:
    Levi
    Moses


- toString() -joins all elements of array into a string without a separator
```js:
const courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
console.log(courseMates.toString());
```
    output:
    Levi,Pascal,Moses,Naomi

- join() - works like `toString()` but you can specify a separator.
```js
const courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
console.log(courseMates.join("&&"));
console.log(courseMates.join("+"));
```
    output:
    Levi&&Pascal&&Moses&&Naomi
    Levi+Pascal+Moses+Naomi
- concat() - joins two arrays together into one array.
```js
let courseMates = ["Levi", "Pascal", "Moses", "Naomi"]
let courses = ["Web Dev", "Software engineering", "Data Analysis"]
console.log(courseMates.concat(courses))
```
    output:
    [
    'Levi',
    'Pascal',
    'Moses',
    'Naomi',
    'Web Dev',
    'Software engineering',
    'Data Analysis'
    ]

- flat() - converts multidimensional array into a single dimension array. 
```js
let studentCourses = [
    ['Levi','Software engineering'],
    ['Pascal',  'Web Dev'],
    ['Moses', 'Data Analysis'],
    ['Naomi', ' Web dev'],
];
console.log(studentCourses.flat());
```
    output:
    [
    'Levi',
    'Software engineering',
    'Pascal',
    'Web Dev',
    'Moses',
    'Data Analysis',
    'Naomi',
    ' Web dev'
    ]

- indexOf() - finds the index of an element in an array and if not found, returns -1. Incase of two similar element in same array, the index of the first common element is returned.
```js:
let studentCourses = ['Levi','Software engineering','Pascal',  'Web Dev','Moses', 'Data Analysis','Naomi', ' Web dev'];
console.log(studentCourses.indexOf('Naomi'));
```
    output:
    6

- lastIndexOf() - works like `indexOf()` but Incase of two similar element in same array, the index of the common element is returned.
```js
let studentCourses = ['Levi','Software engineering','Pascal',  'Web dev','Moses', 'Data Analysis','Naomi', 'Web dev'];
console.log(studentCourses.lastIndexOf('Web dev'));
```
    output:
    7

- include() - checks if element exist and returns `TRUE` and `FALSE` if element is not found. 
```js
let studentCourses = ['Levi','Software engineering','Pascal',  'Web dev','Moses', 'Data Analysis','Naomi', 'Web dev'];
console.log(studentCourses.includes('Web dev'));
console.log(studentCourses.includes('Jeroboam'));
```
    output:
    true
    false
- reverse() - reverses the elements of an array.
```js
let studentCourses = ['Levi','Software engineering','Pascal',  'Web dev','Moses', 'Data Analysis','Naomi', 'Web dev'];
console.log(studentCourses.reverse());
```
    output:
    [
    'Web dev',
    'Naomi',
    'Data Analysis',
    'Moses',
    'Web dev',
    'Pascal',
    'Software engineering',
    'Levi'
    ]