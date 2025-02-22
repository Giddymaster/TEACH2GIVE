// class Animal {
//     constructor(numLegs, numEyes) {
//       this.numLegs = numLegs;
//       this.numEyes = numEyes;
//     }
  
//     move() {
//       console.log(`Animal looking at the road with ${this.numEyes} eyes`);
//       console.log(`Animal moving with ${this.numLegs} legs`);
//     }
  
//     eat() {
//       console.log(`Animal eating for survival`);
//     }
//   }
  
//   class Cow extends Animal {
//     constructor(numLegs, numEyes, breed, gender) {
//       super(numLegs, numEyes); // calls the parent constructor
//       this.breed = breed;
//       this.gender = gender;
//     }
  
//     sound() {
//       console.log(`The ${this.gender} ${this.breed} cow is mooing`);
//     }
//   }
  
//   const myCow = new Cow(4, 2, "Guernsey", "Male");
//   myCow.move();
//   myCow.eat();
//   myCow.sound();

class BankAccount {
    #balance = 0;
  
    constructor(owner) {
      this.owner = owner;
    }
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  
    checkBalance() {
      console.log(`Current balance is: ${this.#balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.#balance) {
        console.log(`Please enter an amount that matches your balance`);
      } else {
        this.#balance -= amount;
        console.log(
          `Successful withdrawal of ${amount}. New balance: ${this.#balance}`,
        );
      }
    }
  }
  
  const account = new BankAccount("John");
  account.deposit(500);
  account.withdraw(900); 
  account.withdraw(200); 

