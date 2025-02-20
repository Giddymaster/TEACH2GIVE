// const student = new Object();
//     student.name = "Gideon Mwangi",
//     student.subject = "Web Dev",
//     student.score = 90,
//     student.grade = "A",
//     student.position = 1,
//     student.course = "Computer Sci",

// console.log(student)


// function student(name, subject, score,grade, position, course){
//     this.name = name;
//     this.subject = subject;
//     this.score = score;
//     this.grade = grade;
//     this.position = position;
//     this.course = course;
// }

// const Gideon = new student("Gideon","Web Dev",90, "A", 1, "Computer sci");
// const Steve = new student("Steve", "Software Engineering", 80, "B", 2, "Computer sci");
// const Levi = new student("Levi", "Networking", 95, "A", 1, "Computer sci");

// console.log(Gideon);
// console.log(Steve);
// console.log(Levi);

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
student.surname = "Njeri"
console.log(student)
//student.getDetails();
//console.log(student.getDetails());