# Javascript Operators

Operators in JavaScript are classified into the following categories:  
- Arithmetic operators: perform basic mathematical operations.  
- Assignment operators: assign values to variables.  
- Comparison operators: compare values.  
- Logical operators: used for boolean logic.  
- Bitwise operators: perform operations at the binary level.    
- Ternary operators    
- Type operators  

## Arithmetic Operators
The following math operations are supported:  
1. Addition +  
    ```javascript
    let sum = 5 + 3; // 8
    ```

1. Subtraction -  
    ```javascript
    let difference = 5 - 3; // 2
    ```

1. Multiplication *  
    ```javascript
    let product = 5 * 3; // 15
    ```

1. Division /  
    ```javascript
    let quotient = 5 / 3; // 1.6667
    ```

1. Modulus %  
    ```javascript
    let remainder = 5 % 3; // 2
    ```

1. Exponentiation **  
    ```javascript
    let power = 5 ** 3; // 125
    ```

1. Increment ++  
    ```javascript
    let increment = 5;
    increment++; // 6
    ```

1. Decrement --  
    ```javascript
    let decrement = 5;
    decrement--; // 4
    ```

## Assignment Operators
The following assignment operations are supported:  
1. Assignment =  
    ```javascript
    let x = 5;
    ```

1. Addition assignment +=  
    ```javascript
    let x = 5;
    x += 3; // 8
    ```

1. Subtraction assignment -=  
    ```javascript
    let x = 5;
    x -= 3; // 2
    ```

1. Multiplication assignment *=  
    ```javascript
    let x = 5;
    x *= 3; // 15
    ```

1. Division assignment /=  
    ```javascript
    let x = 5;
    x /= 3; // 1.6667
    ```

1. Modulus assignment %=  
    ```javascript
    let x = 5;
    x %= 3; // 2
    ```

1. Exponentiation assignment **=  
    ```javascript
    let x = 5;
    x **= 3; // 125
    ```

1. Left shift assignment <<=  
    ```javascript
    let x = 5;
    x <<= 1; // 10
    ```

1. Right shift assignment >>=  
    ```javascript
    let x = 5;
    x >>= 1; // 2
    ```

1. Unsigned right shift assignment >>>=  
    ```javascript
    let x = 5;
    x >>>= 1; // 2
    ```

1. Bitwise AND assignment &=  
    ```javascript
    let x = 5;
    x &= 3; // 1
    ```

1. Bitwise XOR assignment ^=  
    ```javascript
    let x = 5;
    x ^= 3; // 6
    ```

1. Bitwise OR assignment |=  
    ```javascript
    let x = 5;
    x |= 3; // 7
    ```

## Comparison Operators
The following comparison operations are supported:  
1. Equal to ==  
    ```javascript
    5 == '5'; // true
    ```

1. Not equal to !=  
    ```javascript
    5 != '5'; // false
    ```

1. Strict equal to ===  
    ```javascript
    5 === '5'; // false
    ```

1. Strict not equal to !==  
    ```javascript
    5 !== '5'; // true
    ```

1. Greater than >  
    ```javascript
    5 > 3; // true
    ```

1. Greater than or equal to >=  
    ```javascript
    5 >= 5; // true
    ```

1. Less than <  
    ```javascript
    5 < 3; // false
    ```

1. Less than or equal to <=  
    ```javascript
    5 <= 5; // true
    ```

## Logical Operators
The following logical operations are supported:  
1. Logical AND &&  
    ```javascript
    true && false; // false
    ```   
    Truth table:
    | A     | B     | A && B |
    |-------|-------|--------|
    | true  | true  | true   |
    | true  | false | false  |
    | false | true  | false  |
    | false | false | false  |

1. Logical OR ||  
    ```javascript
    true || false; // true
    ```  

    Truth table:
    | A     | B     | A && B |
    |-------|-------|--------|
    | true  | true  | true   |
    | true  | false | true   |
    | false | true  | true   |
    | false | false | false  |


1. Logical NOT !  
    ```javascript
    !true; // false
    ```
    Truth table:
    | A     | !A    |
    |-------|-------|
    | true  | false |
    | false | true  |
 

## Bitwise Operators
The following bitwise operations are supported:  
1. Bitwise AND &  
    ```javascript
    5 & 3; // 1
    ```

1. Bitwise OR |  
    ```javascript
    5 | 3; // 7
    ```

1. Bitwise XOR ^  
    ```javascript
    5 ^ 3; // 6
    ```

1. Bitwise NOT ~  
    ```javascript
    ~5; // -6
    ```

1. Left shift <<  
    ```javascript
    5 << 1; // 10
    ```

1. Right shift >>  
    ```javascript
    5 >> 1; // 2
    ```

1. Unsigned right shift >>>  
    ```javascript
    5 >>> 1; // 2
    ```

## Ternary Operator
The ternary operator is a shorthand for an `if-else` statement:  
`condition ? expressionIfTrue : expressionIfFalse`  
    ```javascript
    let age = 18;
    let canVote = (age >= 18) ? 'Yes' : 'No'; // 'Yes'
    ```

## Type Operators
The following type operations are supported:  
1. `typeof` - Returns the type of a variable.  
    ```javascript
    typeof 5; // 'number'
    ```

1. `instanceof` - Returns true if an object is an instance of a specified class or constructor.  
    ```javascript
    let date = new Date();
    date instanceof Date; // true
    ```
