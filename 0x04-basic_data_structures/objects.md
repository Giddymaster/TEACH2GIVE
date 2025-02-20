# Objects
objects are collections of key-value pairs. A function inside an object is referred to as a method.

## Creating an Object.
1. Using Object Literals(curly braces)
```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
}

console.log(student)
```
    output:
    {
    name: 'Gideon Mwangi',
    subject: 'Web Dev',
    score: 90,
    grade: 'A',
    position: 1,
    course: 'Computer Sci'
    }

2. Using new Object() 
```js
const student = new Object();
    student.name = "Gideon Mwangi",
    student.subject = "Web Dev",
    student.score = 90,
    student.grade = "A",
    student.position = 1,
    student.course = "Computer Sci",

console.log(student)
```
    output:
    {
    name: 'Gideon Mwangi',
    subject: 'Web Dev',
    score: 90,
    grade: 'A',
    position: 1,
    course: 'Computer Sci'
    }

3. Using a Constructor function
```js
function student(name, subject, score,grade, position, course){
    this.name = name;
    this.subject = subject;
    this.score = score;
    this.grade = grade;
    this.position = position;
    this.course = course;
}

const Gideon = new student("Gideon","Web Dev",90, "A", 1, "Computer sci");
const Steve = new student("Steve", "Software Engineering", 80, "B", "Computer sci");
const Levi = new student("Levi", "Networking", 95, "A", 1, "Computer sci");

console.log(Gideon);
console.log(Steve);
console.log(Levi);
```

    output:

    student {
    name: 'Gideon',
    subject: 'Web Dev',
    score: 90,
    grade: 'A',
    position: 1,
    course: 'Computer sci'
    }
    student {
    name: 'Steve',
    subject: 'Software Engineering',
    score: 80,
    grade: 'B',
    position: 2,
    course: 'Computer sci'
    }
    student {
    name: 'Levi',
    subject: 'Networking',
    score: 95,
    grade: 'A',
    position: 1,
    course: 'Computer sci'
    }

> NOTE:   
1.Functions can be nested inside objects.  
2.Never using an object arrow inside an object.

```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
    getDetails: function() {
        console.log (`${this.name} is studying ${this.subject} and scored ${this.score}, achieving grade ${this.grade}.`);
    },
}

student.getDetails();
```

    output:
    Gideon Mwangi is studying Web Dev and scored 90, achieving grade A.

## Accessing object properties 
1. Dot notation - use dot followed by the property name.
2. Bracket Notation - use square bracket with property name as a string.
These properties are used to both access and modify objects

## Modifying Objects
1. Adding new properties
```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
    getDetails: function() {
        console.log (`${this.name} is studying ${this.subject} and scored ${this.score}, achieving grade ${this.grade}.`);
    },
}

student.age = 25; //added new property age
student["admNumber"] = "CS/2/1015"; //added new property admNumber

console.log(student)
```
    output:
    {
    name: 'Gideon Mwangi',
    subject: 'Web Dev',
    score: 90,
    grade: 'A',
    position: 1,
    course: 'Computer Sci',
    getDetails: [Function: getDetails],
    age: 25, //added new property age
    admNumber: 'CS/2/1015'
    }
2. Updating a property
```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
    getDetails: function() {
        console.log (`${this.name} is studying ${this.subject} and scored ${this.score}, achieving grade ${this.grade}.`);
    },
}

student.grade = "B"; // updates grade value from A to B
student["course"] = "Data Structures"; // updates course value

console.log(student)
```
    output:
    {
    name: 'Gideon Mwangi',
    subject: 'Web Dev',
    score: 90,
    grade: 'B',
    position: 1,
    course: 'Data Structures',
    getDetails: [Function: getDetails]
    }

2. Deleting a property  
```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
    getDetails: function() {
        console.log (`${this.name} is studying ${this.subject} and scored ${this.score}, achieving grade ${this.grade}.`);
    },
}

delete student.grade; //deleting grade property
delete student.getDetails //deleting getDetails property

console.log(student)
```
    objects
    {
    name: 'Gideon Mwangi',
    subject: 'Web Dev',
    score: 90,
    position: 1,
    course: 'Computer Sci'
    }

## Objects methods
1. objects.keys(objectName) - returns an array containing all the keys of an object.
```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
    getDetails: function() {
        console.log (`${this.name} is studying ${this.subject} and scored ${this.score}, achieving grade ${this.grade}.`);
    },
}

console.log(Object.keys(student));
```
output:
    [
    'name',
    'subject',
    'score',
    'grade',
    'position',
    'course',
    'getDetails'
    ]

2. object.values(objectName) - returns an array containing all the values of an object
```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
    getDetails: function() {
        console.log (`${this.name} is studying ${this.subject} and scored ${this.score}, achieving grade ${this.grade}.`);
    },
}


console.log(Object.values(student));
```
output:
    [
    'Gideon Mwangi',
    'Web Dev',
    90,
    'A',
    1,
    'Computer Sci',
    [Function: getDetails]
    ]

3. object.entries(objectName) - returns an array of key-value pairs from an object
```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
    getDetails: function() {
        console.log (`${this.name} is studying ${this.subject} and scored ${this.score}, achieving grade ${this.grade}.`);
    },
}


console.log(Object.entries(student));
```
    output:
    [
    [ 'name', 'Gideon Mwangi' ],
    [ 'subject', 'Web Dev' ],
    [ 'score', 90 ],
    [ 'grade', 'A' ],
    [ 'position', 1 ],
    [ 'course', 'Computer Sci' ],
    [ 'getDetails', [Function: getDetails] ]
    ]
4. Object.freeze(objectName) - freezes an objects, no more changes can be done.
```js
const student = {
    name: "Gideon Mwangi",
    subject: "Web Dev",
    score: 90,
    grade: "A",
    position: 1,
    course: "Computer Sci",
    getDetails: function() {
        console.log (`${this.name} is studying ${this.subject} and scored ${this.score}, achieving grade ${this.grade}.`);
    },
}


Object.freeze(student);
student.surname = "Njeri" // surname property was not added
console.log(student)
```
    output:
    {
    name: 'Gideon Mwangi',
    subject: 'Web Dev',
    score: 90,
    grade: 'A',
    position: 1,
    course: 'Computer Sci',
    getDetails: [Function: getDetails]
    }