# Static Methods and Properties.
In JavaScript, static methods and properties belong to the class itself rather than its instances. This means they can be accessed directly from the class without creating an object.

## static methods
-declared using `static` keyword. cannot be accessed directly from instances of the calss.
```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

//MathUtils.add(10, 5) works because add() is a static method.
console.log(MathUtils.add(10, 5)); 
console.log(MathUtils.subtract(10, 5)); 


const math = new MathUtils();
// console.log(math.add(10, 5)); Error: math.add is not a function
``` 

## static properties
- declared  using `static` keyword, shared among all instances. cannot be accessed via instance.
```js
class Counter {
  static count = 0; // Static property

  static increment() {
    Counter.count++; // Accessing the static property
  }

  static getCount() {
    return Counter.count;
  }
}

// Accessing static property without an instance
console.log(Counter.getCount()); // 0

Counter.increment();
Counter.increment();

console.log(Counter.getCount()); // 2

//Counter.count is a static property, shared across the class.
// Counter.increment() increases count without needing an instance.
const counter = new Counter();
// console.log(counter.count); // Undefined

```