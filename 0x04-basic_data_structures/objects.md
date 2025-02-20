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
1. Dot notation
2. Bracket Notation.