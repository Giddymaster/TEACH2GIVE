# Type coercion and Type conversion  
Operators and functions automatically convert the values given to them to the right type.   
The three most widely used type conversions are to string, to number, and to boolean.  

__String Conversion__ – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

__Numeric Conversion__ – Occurs in math operations. Can be performed with Number(value).

### Implicit Conversion

This is done automatically by javascript while executing commands
```javascript
    console.log(23 + "10"); // "2310" (Number coerced into a string)
    console.log("74" - 57); // 17 (String coerced into a number)
    console.log(true + 32); // 33 (true coerced into 1)
    console.log(false + "48"); // "false10" (false coerced into string)
```
### Explicit Conversion
This is done by developers while writing the code. Most widely method used include:   
- Convert to string using String() or toString()
```javascript
        console.log(String(76768));    or  
        console.log((76768).toString());
```
- Convert to number using Number(), parseInt() or parseFloat()
```javascript
        console.log(Number("9126")); // number
        console.log(parseInt("423")); // integer
        console.log(parseFloat("676")); // float
        console.log(parseInt("23px")); //integer   
```
- Convert to boolean using Boolean()
Falsy values: 0, "", null, undefined, NaN, false.
Truthy values: everything else
```javascript
        console.log(Boolean(945)); // true
        console.log(Boolean("programming")); // true
        console.log(Boolean(null)); // false
```