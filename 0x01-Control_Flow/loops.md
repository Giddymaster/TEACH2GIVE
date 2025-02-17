# Loops
Loops help in doing something repeatedly.  
## For Loop
For loops are used when the number of time the block of code to be executed is known. Its done by firt initializing the loop then giving the condition. When the condition is false the loop stops.
```js
for (let i=1; i<=5; i++){
    console.log(i); // i will be looped and printed 5 times
}
```
    output:
    1
    2
    3
    4
    5

## While Loop
The while loops runs as long as the condition specified is true.  
```js
let i=1;
while (i<=10){
    console.log(i);
    i+=2;
}
```
    output:
    1
    3
    5
    7
    9

### Do While Loop
This loop executes the code atleast once even is the condition is false.  
```js
let count = 1;

do {
    console.log("Iteration number:", count);
    count++;
} while (count <= 5);
```
    output
    Iteration number: 1
    Iteration number: 2
    Iteration number: 3
    Iteration number: 4
    Iteration number: 5
