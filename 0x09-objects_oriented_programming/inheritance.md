# Inheritance 
Inheritance allows one class to inheritance properties and methods from another class.

```js
class Animal {
  //properties of parent class 
    constructor(numLegs, numEyes) {
      this.numLegs = numLegs;
      this.numEyes = numEyes;
    }
  
    move() {
      console.log(`Animal looking at the road with ${this.numEyes} eyes`);
      console.log(`Animal moving with ${this.numLegs} legs`);
    }
  
    eat() {
      console.log(`Animal eating for survival`);
    }
  }
  //child class. inheritance done by `extends`
  class Cow extends Animal {
    constructor(numLegs, numEyes, breed, gender) {
      super(numLegs, numEyes); // calls the parent constructor
      this.breed = breed;
      this.gender = gender;
    }
  
    sound() {
      console.log(`The ${this.gender} ${this.breed} cow is mooing`);
    }
  }
  
  const myCow = new Cow(4, 2, "Guernsey", "Male");
  myCow.move();
  myCow.eat();
  myCow.sound();
  ```
    output: // from animal methods
    Animal looking at the road with 2 eyes 
    Animal moving with 4 legs
    Animal eating for survival
    The Male Guernsey cow is mooing