# Control Flows  
By default javascript executes code line by line. Control flows alters how the javascript block of code is executed through conditions and loops.  

## Conditions  
Condions allows you to execute different  block of code on specific instructions. The instructions/conditions are achieved by passing them through the following statements:  
- If statements
- If else statements  
- If ladder statements
- Switch statements
- Ternary operators

### If Statements  
The block of code is executed when the condition is true.    
```js  
let students = 20;
if (students > 1) {
    console.log("Hello, students! ")
    };
```
    output:  
    Hello, students!
### If else  
The block of the code is executed if the codition is true,  and returns the else outut if the condition is false.  
```js
let i = 9; // i is declared
if ( i>=10) {  // i<9, condition not met
    console.log(i); 
} else (i<10);{
    console.log(--i); //expected output
}
```
    output:
    8

### If else ladder  
This condtions are used for multiple conditions and returns the result of block of code that is true, If all block of code fails then the last part of else block is executed.
```js
let distance = 17;
if (distance > 5 && distance < 10){ //condition not met
    console.log("Drink water"); 
} else if (distance > 10 && distance < 20 ){ 
    console.log("Take energy drink"); //expected output
} else if (distance >= 20){
    console.log("take atleast 20 minute break");
} else {
    console.log("keep running");
}
```
    output:
    Take energy drink


### Switch statement  
The switch is a cleaner version of __if else ladder_ statements. Its used when the variable has multiple possible values.
```js
let fruit = "Mangoes";
switch (fruit) {
    case "Oranges":
        console.log("Oranges");
    break;
    case "Mangoes":
        console.log("Mangoes"); // expected output
    break;
    case "Bananas":
        console.log("Bananas")
    default:
    console.log(`Sorry, we are out of ${fruit}.`);
}
```

    output:
    Mangoes

### Ternanry Operators  
After initializing a variable, the ternary operator first lists a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.  

    let m = 49;
    condition? True : False
```js
let marks = 49;
marks > 49? console.log("Qualified"): console.log("Repeat")
```
    output:
    Repeat

## Break and Continue Statements  
- Break is used to terminate the loop when a particular condition occurs.  The javascript execution terminates the loop when the codition is met. 
```js
for(let i=1; i=<20; i++){
    if (i%5 === 0){ // the execution terminate when condition is true
        break; 
    }
    console.log(i)
}
```  
    output:
    1
    2
    3
    4
    

- Continue statement, skips a particular iteration after its met then continues to execute the remaining block of code.  
```js
for((let i=1); (i<100); i++){
    if (i%5 === 0){
        continue;
    }
    console.log(i)
}
```
    output (note that 5 and 10 are not printed when the code breaks):
    1
    2
    3
    4
    6
    7
    8
    9

