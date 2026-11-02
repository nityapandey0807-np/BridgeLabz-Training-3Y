// ==========================================
// ASSIGNMENT 5 - ALL QUESTIONS COMBINED
// ==========================================

console.log("--- Q1: Callback Function ---");
function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
greetUser("Nitya", showEndMessage);


console.log("\n--- Q2: Array Operations with Callbacks ---");
function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4];
const doubled = applyOperation(numbers, (num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8]

const squared = applyOperation(numbers, (num) => num * num);
console.log("Squared:", squared); // [1, 4, 9, 16]


console.log("\n--- Q3: Arrow Function vs Normal Function ---");
// 1. Arrow function (this.name is undefined)
const userArrow = {
    name: "Nitya",
    showName: () => {
        console.log(`Name (Arrow): ${this.name}`);
    }
};
userArrow.showName(); 

// 2. Fixed using a normal function
const userNormal = {
    name: "Nitya",
    showName: function() {
        console.log(`Name (Normal): ${this.name}`);
    }
};
userNormal.showName(); // Name: Nitya


console.log("\n--- Q4: Constructor Function & Prototype ---");
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");
car1.getDetails(); 
car2.getDetails(); 


console.log("\n--- Q5: Prototype Inheritance (Person & Student) ---");
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Nitya", "CSE");
student1.getName();   
student1.getBranch(); 


console.log("\n--- Q6: Multi-Level Prototype Chain ---");
function PersonQ6(name) {
    this.name = name;
}
PersonQ6.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
};

function Faculty(name, department) {
    PersonQ6.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(PersonQ6.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function() {
    console.log(`${this.name} teaches in ${this.department}.`);
};

function Professor(name, department, researchArea) {
    Faculty.call(this, name, department);
    this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.research = function() {
    console.log(`${this.name} is researching in ${this.researchArea}.`);
};

const prof = new Professor("Dr. Sharma", "Computer Science", "AI");
prof.eat();      
prof.teach();    
prof.research(); 


console.log("\n--- Q7: Closures ---");
function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log("Triple of 5:", triple(5)); // 15


console.log("\n--- Q8: Custom Prototype Method myMap() ---");
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const arr = [1, 2, 3];
const multiplied = arr.myMap(num => num * 2);
console.log("myMap result:", multiplied); // [2, 4, 6]


console.log("\n--- Q9: ES6 Classes ---");
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(`Class Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    getBranch() {
        console.log(`Class Branch: ${this.branch}`);
    }
}

const s1 = new StudentClass("Nitya", "CSE");
s1.getName();   
s1.getBranch();