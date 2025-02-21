class Person {
    //constructor
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

