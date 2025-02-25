# Object Literal Enhancements
ES6 introduced several improvements to object literals, making object creation and manipulation more concise and readable.

## Shorthand Property Names
If the variable name matches the property name, you can omit the explicit assignment.

**Before ES6:**

```javascript
const firstName = "Gideon";
const lastName = "Mwangi";
const age = 30;

const person = { firstName: firstName, lastName: lastName, age: age };
console.log(person); // { firstName: 'Gideon', lastName: 'Mwangi', age: 30 }
```

**After ES6:**

```javascript
const firstName = "Gideon";
const lastName = "Mwangi";
const age = 30;

const person = { firstName, lastName, age };
console.log(person); // { firstName: 'Gideon', lastName: 'Mwangi', age: 30 }
```

## Method Shorthand
Methods can be defined without the `function` keyword.

**Before ES6:**

```javascript
const person = {
  firstName: "Gideon",
  lastName: "Mwangi",
  greet: function () {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
  },
};
person.greet();
```

**After ES6:**

```javascript
const person = {
  firstName: "Gideon",
  lastName: "Mwangi",
  greet() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
  },
};
person.greet();
```

## Computed Property Names
Dynamic property names can be defined using expressions inside square brackets `[]`.

```javascript
const key = "status";

const profile = {
  ["user" + "Name"]: "Gideon",
  age: 30,
  [key]: "Active",
};

console.log(profile); // { userName: 'Gideon', age: 30, status: 'Active' }
