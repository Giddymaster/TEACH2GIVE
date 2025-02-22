# Polymorphism:
Polymorphism allows an entity of an object-oriented code such as a variable or a method to have more than one form.
Achieved thro:
- Method overriding - defining a method in a subclass with the same name as one in the parent class

- Method overloading - defining multiple methods with the same name but different parameters—though JavaScript does not support it natively

```js
//parent class
class Math {
  add(number1, number2) {
    return number1 + number2; 
  }
}
//child class
class Arithmetics extends Math {
  add(number1, number2) {
    if (number1 < 0) {
      console.log("Can only add positive numbers");
    } else if (number2 < 0) {
      console.log("Can only add positive numbers");
    } else {
      console.log(number1 + number2);
    }
  }
}

//instances
const arithmetic = new Arithmetics();
arithmetic.add(-5, 5);
arithmetic.add(5, -5);
arithmetic.add(5, 5);
```
overide happens when arithmetic takes the `add` from math and first check the condition if the two numbers are positive for it to sum up.  

polymorphism is the behavior of `add` in `arithmetic` and `math` instances.