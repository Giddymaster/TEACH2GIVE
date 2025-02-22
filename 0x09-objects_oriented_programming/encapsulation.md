# Encapsulation
Its a mechanism of restricting direct access to some of the object components.
Encapsulation in JavaScript can be achieved using private properties (with the ` # ` syntax) and `getters/setter` methods.

```js
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
}

const account = new BankAccount("John");
account.deposit(500);
account.checkBalance();
// console.log(account.#balance); // Error: Private field '#balance' must be declared
```
    output:
    Deposited 500. New balance: 500
    Current balance is: 500

- The #balance field is private, meaning it cannot be accessed directly outside the class. 
Only the methods inside the class can read or modify this field.

- The constructor initializes a new account with the owner's name. The owner property is public and can be accessed outside the class.

-  The deposit(amount) method allows adding money to the private balance. It ensures that only controlled access to modifying #balance is allowed

- checkBalance() safely retrieves the balance without exposing direct access.
