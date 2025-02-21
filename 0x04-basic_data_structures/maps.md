A map data structure allows you to store key - value pairs. Keys can be of any data type.

Maps are created using `new Map()`
```js
const myMap = new Map();
```

## Maps Methods
1. set(key, value) - adds a key value pair to the map or updates if the key-value pair already exists.
```js
const student = new Map();
student.set("name", "Gideon  Mwangi");
student.set("grade", "A");
student.set("position", 1);
student.set("courses", ["Web Dev", "software Engineering"]);

console.log(student)
```
    output:
    Map(4) {
    'name' => 'Gideon  Mwangi',
    'grade' => 'A',
    'position' => 1,
    'courses' => [ 'Web Dev', 'software Engineering' ]
    }
2. get(key) - returns the value associated with the specific key in the map or undefined if it doesn't exist.
```js
const student = new Map();
student.set("name", "Gideon  Mwangi");
student.set("grade", "A");
student.set("position", 1);
student.set("courses", ["Web Dev", "software Engineering"]);

console.log(student.get("name"));
console.log(student.get("subjects"));// its not defined
```
    output:
    Gideon  Mwangi
    undefined

3. has(key) - returns true if the map contains the specified key. false otherwise.
```js
const student = new Map();
student.set("name", "Gideon  Mwangi");
student.set("grade", "A");
student.set("position", 1);
student.set("courses", ["Web Dev", "software Engineering"]);

console.log(student.has("name"));
console.log(student.has("subjects"));
```
    output:
    true
    false

4. delete(key) - removes a specified key-value air from the map.
```js
const student = new Map();
student.set("name", "Gideon  Mwangi");
student.set("grade", "A");
student.set("position", 1);
student.set("courses", ["Web Dev", "software Engineering"]);

student.delete("grade");
student.delete("position");

console.log(student);
```
    output:
    Map(2) {
    'name' => 'Gideon  Mwangi',
    'courses' => [ 'Web Dev', 'software Engineering' ]
    }

5. size - returns the number of key-value pairs in a map.
```js
const student = new Map();
student.set("name", "Gideon  Mwangi");
student.set("grade", "A");
student.set("position", 1);
student.set("courses", ["Web Dev", "software Engineering"]);

console.log(student.size);
```
    output:
    4

6. clear() - removes all the key-value pairs from a map.
```js
const student = new Map();
student.set("name", "Gideon  Mwangi");
student.set("grade", "A");
student.set("position", 1);
student.set("courses", ["Web Dev", "software Engineering"]);

student.clear();
console.log(student);
```
    output:
    Map(0) {}

