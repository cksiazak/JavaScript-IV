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