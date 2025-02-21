# JavaScript Classes
A class refers to the blueprint of an object.

## creating a class
use class keyword followed by classname, then define a constructor inside the class. later initialize.  The constructor method initializes the object's properties.
To create an instance of a class, use the new keyword.
```js
class Person {
    //constructor initializing object properties
    constructor(eyes,ears,hands, legs){ 
        //properties
        this.numEyes = eyes;
        this.numEars = ears;
        this.numHands = hands;
        this.numLegs = legs;
    }
    //methods
    speak(){
        console.log("The person speaks");
    }
    walk(){
        console.log("The persons is walking");
    }

}
//instantiations
const Gideon = new Person(2,2,2,2);
const Alien = new Person(3,4,2,5);

console.log(Gideon);
console.log(Alien);

Gideon.speak();
Alien.walk();
```
    output:
    Person { numEyes: 2, numEars: 2, numHands: 2, numLegs: 2 }
    Person { numEyes: 3, numEars: 4, numHands: 2, numLegs: 5 }
    The person speaks
    The persons is walking