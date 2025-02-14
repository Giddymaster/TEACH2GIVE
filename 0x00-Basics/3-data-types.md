# Data Types  
There are 8 basic data types in JavaScript. Seven primitive data types: number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1) and the bigint for integer numbers of arbitrary length

## Basic data types in JavasScript 

### String  
A string in JavaScript must be surrounded by quotes.
```javascript
    let name = "Gideon Mwangi"
    let course = "Web Development"  
```
### Numbers  
Javascript has only one type of a number;the double-precision 64-bit floating point number, which adheres to the IEEE 754 standard. This single type is used to represent both integer and floating point numbers.
```javascript
    let units = 10;  // integer
    let ratio = 5.75; // Decimal
    let notANumber = NaN; // Not a  Number(invalid math operation)
```
### Boolean(Logical Type)
The boolean type has only two values: true and false.  
```javascript
    let attendedClass = true; // yes   
    let finishedAssignment = false; // no 
```
### The 'Undefined' Value
The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined
```javascript
    let age;
    console.log(age); // shows "undefined"  
```
### Null
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer”; It’s just a special value which represents “nothing”, “empty” or “value unknown”.
```javascript
    let age = null // age is unknown
```
### BigInt  
In JavaScript, the “number” type cannot safely represent integer values larger than 9007199254740991 or  -9007199254740991 for negatives there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.
```javascript
    let bigNumber = 123456789012345678901234567890n; // "n" at the end makes it a BigInt
    console.log(bigNumber);
```


### The typeof operator   
The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
A call to __typeof__ x returns a string with the type name:
```javascript
    console.log(typeof undefined) // "undefined"
    console.log(typeof 0) // "number"
    console.log(typeof 10n) // "bigint"
    console.log(typeof true) // "boolean"
    console.log(typeof "food") // "string"
    console.log(typeof Symbol("id")) // "symbol"
    console.log(typeof null) // "object"  
    console.log(typeof alert) // "function"  
```
