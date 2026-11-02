// ==========================================
// ASSIGNMENT 4 - CLASSES & OBJECTS
// ==========================================

// ------------------------------------------
// Q1: E-Commerce Product Manager (Classes + Objects)
// ------------------------------------------
console.log("=== Q1: E-Commerce Product Manager ===");

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * (percent / 100);
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 1200, "Electronics"),
    new Product(2, "Headphones", 150, "Electronics"),
    new Product(3, "Coffee Maker", 80, "Home Appliances"),
    new Product(4, "Smartphone", 1100, "Electronics")
];

console.log("Products with price > 1000:");
products
    .filter(p => p.price > 1000)
    .forEach(p => console.log(p.getDetails()));


// ------------------------------------------
// Q2: Student Form Validator (Forms + RegExp)
// ------------------------------------------
console.log("\n=== Q2: Student Form Validator ===");

function validateStudentForm(name, email, phone, password) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const isValidName = nameRegex.test(name);
    const isValidEmail = emailRegex.test(email);
    const isValidPhone = phoneRegex.test(phone);
    const isValidPassword = passwordRegex.test(password);

    console.log(`Name (${name}): ${isValidName ? "Valid (Green)" : "Invalid (Red)"}`);
    console.log(`Email (${email}): ${isValidEmail ? "Valid (Green)" : "Invalid (Red)"}`);
    console.log(`Phone (${phone}): ${isValidPhone ? "Valid (Green)" : "Invalid (Red)"}`);
    console.log(`Password (${password}): ${isValidPassword ? "Valid (Green)" : "Invalid (Red)"}`);
}

validateStudentForm("Nitya Pandey", "nitya@domain.com", "9876543210", "Password@123");


// ------------------------------------------
// Q3: Library Management System (Classes + Objects)
// ------------------------------------------
console.log("\n=== Q3: Library Management System ===");

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`Book "${this.title}" has been issued.`);
        } else {
            console.log(`Book "${this.title}" is already issued.`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`Book "${this.title}" has been returned.`);
    }
}

const library = [
    new Book("JavaScript Guide", "John Doe", "123-456"),
    new Book("Node.js in Action", "Jane Smith", "789-101"),
    new Book("Clean Code", "Robert Martin", "112-131")
];

// Display available books
console.log("Available Books:");
library.filter(b => !b.isIssued).forEach(b => console.log(`- ${b.title} (${b.ISBN})`));

// Issue a book by ISBN search
const searchISBN = "789-101";
const bookToIssue = library.find(b => b.ISBN === searchISBN);
if (bookToIssue) bookToIssue.issueBook();


// ------------------------------------------
// Q4: Custom Form Builder (Forms + Classes)
// ------------------------------------------
console.log("\n=== Q4: Custom Form Builder ===");

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    renderForm() {
        let html = '<form id="dynamicForm">\n';
        this.fields.forEach(field => {
            html += `  <label>${field.label}</label>\n`;
            html += `  <input type="${field.type}" name="${field.label.toLowerCase()}" /><br>\n`;
        });
        html += '  <button type="submit">Submit</button>\n';
        html += '</form>';
        return html;
    }

    getFormData(formElement) {
        const formData = {};
        const inputs = formElement.querySelectorAll('input');
        inputs.forEach(input => {
            formData[input.name] = input.value;
        });
        return formData;
    }
}

const formConfig = [
    { type: 'text', label: 'Username' },
    { type: 'password', label: 'Password' }
];
const myFormBuilder = new FormBuilder(formConfig);
console.log("Generated HTML Form Structure:\n", myFormBuilder.renderForm());


// ------------------------------------------
// Q5: Movie Ticket Booking (Objects + RegExp)
// ------------------------------------------
console.log("\n=== Q5: Movie Ticket Booking ===");

function bookMovieTicket(name, email, seats) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        console.log("Validation Failed: Invalid Name");
        return;
    }
    if (!emailRegex.test(email)) {
        console.log("Validation Failed: Invalid Email");
        return;
    }
    if (seats < 1 || seats > 10) {
        console.log("Validation Failed: Seats must be between 1 and 10");
        return;
    }

    const bookingInfo = { name, email, seats };
    console.log("Booking Successful! Ticket Details:", bookingInfo);
}

bookMovieTicket("Nitya Pandey", "nitya@example.com", 3);


// ------------------------------------------
// Q6: Employee Management System (Classes + Object Methods)
// ------------------------------------------
console.log("\n=== Q6: Employee Management System ===");

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(101, "Amit", "Engineering", 50000),
    new Employee(102, "Priya", "HR", 40000),
    new Employee(103, "Rahul", "Marketing", 45000),
    new Employee(104, "Neha", "Engineering", 60000),
    new Employee(105, "Vikas", "Finance", 55000)
];

employees.forEach(emp => {
    console.log(`${emp.name}'s Annual Salary: $${emp.getAnnualSalary()}`);
});

const totalAnnualPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`Total Company Annual Payout: $${totalAnnualPayout}`);


// ------------------------------------------
// Q7: Login Form Validation using RegExp
// ------------------------------------------
console.log("\n=== Q7: Login Form Validation ===");

function validateLogin(username, password) {
    let isValid = true;

    if (username.length < 5) {
        console.log("Error: Username must be at least 5 characters long.");
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        console.log("Error: Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
        isValid = false;
    }

    if (isValid) {
        console.log("Success: Login validation passed!");
    }
}

validateLogin("nitya123", "StrongPass@1");