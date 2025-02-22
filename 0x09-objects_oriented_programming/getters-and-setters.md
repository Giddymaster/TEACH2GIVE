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
console.log(user.name); // "Dennis"

// Using the setter
user.name = "John"; // Updates successfully
console.log(user.name); // "John"

user.name = 42; // Error: Name must be a string!
```

The constructor - initializes the _name property when a new User object is created.
The underscore `(_name) `is  a `private-like` property and it's still accessible.

```js
  constructor(name) {
    this._name = name; 
  }
```
The get method - retrieves the value
```js
  get name() {
    return this._name;
  }
  console.log(user.name); // "Gideon"
```

The Setter method - validates and updates the value
```js
  set name(newName) {
    if (typeof newName !== "string") {
      console.error("Name must be a string!");
      return;
    }
    this._name = newName;
  }

```

```js
//validates and updates if the name is a string 
user.name = "John"; 
console.log(user.name); 
```
```js
//throws error since 42 is not a string
user.name = 42;
```
