# Sets
Sets represents a collections of unique values- No duplication.

## Set Properties 
- unique/no duplicates
- no indexing- elements cannot be acccessed by index
- elements in set don't maintain their order.

Sets are created using `new Set()`
-returns number of elements and the set itself.
```js
const cordinates = new Set([1,2,3,4,5,6]);
const mixedSet = new Set ([10,5,"Gideon"]);

console.log(cordinates);
console.log(mixedSet);
```
    output:
    Set(6) { 1, 2, 3, 4, 5, 6 }
    Set(3) { 10, 5, 'Gideon' }

## Sets Methods
1. add() - adds new element
```js
const mixedSet = new Set ([10,5,"Gideon"]);
mixedSet.add("Pascal")
mixedSet.add("Levi")
mixedSet.add(80)
mixedSet.add(27)

console.log(mixedSet);
```
    output:
    Set(7) { 10, 5, 'Gideon', 'Pascal', 'Levi', 80, 27 }

2. delete() - removes specified element
```js
const mixedSet = new Set ([10, 5, 'Gideon', 'Pascal', 'Levi', 80, 27]);
mixedSet.delete("Pascal")
mixedSet.delete("Levi")
mixedSet.delete(80)
mixedSet.delete(27)

console.log(mixedSet);
```
    output:
    Set(3) { 10, 5, 'Gideon' }
3. has() - returns true if specified value exist in a set.
```js
const mixedSet = new Set ([10, 5, 'Gideon', 'Pascal', 'Levi', 80, 27]);

console.log(mixedSet.has("Levi"));
console.log(mixedSet.has("Naomi"));
console.log(mixedSet.has(34));
```
    output:
    true
    false
    false

4. size() - returns the number of elements in a set.
```js
const mixedSet = new Set ([10, 5, 'Gideon', 'Pascal', 'Levi', 80, 27]);

console.log(mixedSet.size);
```
    output
    7