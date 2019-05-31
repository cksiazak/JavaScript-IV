// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(InstructAttrs) {
        super(InstructAttrs);
        this.specialty = InstructAttrs.specialty;
        this.favLanguage = InstructAttrs.favLanguage;
        this.catchPhrase = InstructAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student} receives a pergect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subjecct}` 
    }
}

let dan = new Instructor({
    name: "Dan",
    age: 35 + "(?)",
    location: "basically The Matrix",
    specialty: "Javascript",
    favLanguage: "Javascript",
    catchPhrase: "Cult of Functionality",
})
let chris = new Student({
    name: "Chris",
    age: 23,
    location: "El Paso",
    previousBackground: "User Specialist",
    className: "Web PT7",
    favSubjects: ['Javascript', 'CSS', 'HTML'],
})
let taylor = new ProjectManager({
    name: "Taylor",
    age: "not a day over 21",
    location: "the far side of the continent",
    specialty: "basically everything",
    favLanguage: "Scratch",
    catchPhrase: "Hello everyone",
    gradClassName: "WEB(something)",
    favInstructor: "Josh",
})

let splinter = new Instructor({
    name: "Splinter",
    age: 75,
    location: "New York",
    specialty: "Teaching",
    favLanguage: "English",
    catchPhrase: "(philosophical quote)",
})

let michaelangelo = new Student({
    name: "Michaelangelo",
    age: 17,
    location: "New York",
    previousBackground: "Crime fighting turtle",
    className: "PizzaScience5",
    favSubjects: ['ninja', 'skateboarding', 'pizza'],
})

let donatello = new ProjectManager({
    name: "Donatello",
    age: 18,
    location: "NY sewer",
    specialty: "Technology",
    favLanguage: "English",
    catchPhrase: "Uh....",
    gradClassName: "Ninja14",
    favInstructor: "Splinter",
})