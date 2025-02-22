# Abstraction
Its hiding implementation details and exposing only what is nescessary.

```js
class BankAccount {
  #balance = 0;  // Private property, hidden from outside

  constructor(owner) {
    this.owner = owner;  // Public property (owner of the account)
  }

  deposit(amount) {
    this.#balance += amount;  // Internal operation (modifying private #balance)
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  checkBalance() {
    console.log(`Current balance is: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Please enter an amount that matches your balance`);
    } else {
      this.#balance -= amount;  // Internal operation (modifying private #balance)
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

```

    const account = new BankAccount("John");
  account.deposit(500);
  account.withdraw(900);  // Invalid, as balance is insufficient
  account.withdraw(200);  // Valid, withdrawal happens
