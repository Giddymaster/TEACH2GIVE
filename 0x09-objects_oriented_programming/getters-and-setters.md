# Getters and Setters
-allow controlled access to an object's properties.
Getters (get): retrieve a property value.
Setters (set): modifies a property value while allowing validation.

    Example:
```js
  class User {
    constructor(name) {
      this._name = name; // Private property convention (_name)
  }

  // Getter (retrieves the value)
  get name() {
    return this._name;
  }

  // Setter (validates and updates the value)
  set name(newName) {
    if (typeof newName !== "string") {
      console.error("Name must be a string!");
      return;
    }
    this._name = newName;
  }
}

const user = new User("Gideon");

// Using the getter
console.log(user.name); // "Gideon"

// Using the setter
user.name = "John"; // Updates successfully
console.log(user.name); // "John"

user.name = 42; // Error: Name must be a string!
```

  output:
  Gideon
  John
  Name must be a string!