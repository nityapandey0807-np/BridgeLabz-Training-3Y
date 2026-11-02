// ==========================================
// ASSIGNMENT 3 - JS ES FEATURES & STRICT MODE
// ==========================================
"use strict";

// ------------------------------------------
// Q1 – Dynamic Data Parser
// ------------------------------------------
console.log("=== Q1: Dynamic Data Parser ===");
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidNumericData = [];

apiData.forEach(item => {
    // Convert to Number, Boolean, String forms
    const numForm = Number(item);
    const boolForm = Boolean(item);
    const strForm = String(item);

    console.log(`Original: ${item} | Number: ${numForm} | Boolean: ${boolForm} | String: ${strForm}`);

    // Check if valid number (excluding NaN, empty spaces like " ", strings with letters like "100px", null/undefined)
    if (item !== null && item !== undefined && item.toString().trim() !== "" && !isNaN(item) && item !== "NaN") {
        validNumericData.push(Number(item));
    } else {
        invalidNumericData.push(item);
    }
});

console.log("Valid Numeric Data:", validNumericData);
console.log("Invalid Numeric Data:", invalidNumericData);


// ------------------------------------------
// Q2 – Employee Bonus Calculator
// ------------------------------------------
console.log("\n=== Q2: Employee Bonus Calculator ===");
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

employees.forEach(emp => {
    try {
        const salaryNum = Number(emp.salary);
        const yearsNum = Number(emp.years);

        if (isNaN(salaryNum) || isNaN(yearsNum)) {
            throw new Error("Invalid conversion to number");
        }

        const bonus = yearsNum > 3 ? salaryNum * 0.1 : salaryNum * 0.05;
        console.log(`Employee: ${emp.name} | Salary: ₹${salaryNum} | Experience: ${yearsNum} years | Bonus: ₹${bonus}`);
    } catch (error) {
        console.log(`Error processing employee ${emp.name}: ${error.message}`);
    }
});


// ------------------------------------------
// Q3 – Transaction Validator
// ------------------------------------------
console.log("\n=== Q3: Transaction Validator ===");
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

transactions.forEach((tx, index) => {
    try {
        if (tx === null || tx === undefined) {
            throw new Error("Null or undefined entry");
        }
        if (tx.id === undefined || tx.amount === undefined) {
            throw new Error("Missing amount or id");
        }
        if (tx.amount < 0) {
            throw new Error("Negative amount");
        }
        validTransactions.push(tx);
    } catch (error) {
        invalidTransactions.push({ transaction: tx, error: error.message });
    }
});

console.log(`Successful Transactions Count: ${validTransactions.length}`, validTransactions);
console.log(`Failed Transactions Count: ${invalidTransactions.length}`, invalidTransactions);


// ------------------------------------------
// Q4 – Debugging Mystery
// ------------------------------------------
console.log("\n=== Q4: Debugging Mystery ===");
// Under "use strict", using an undeclared variable like 'greeting = "Welcome"' throws a ReferenceError.
// Fix: Always declare variables using let, const, or var.

function showMessage() {
    let greeting = "Welcome"; // Fixed by adding 'let'
    console.log(greeting);
}
showMessage();


// ------------------------------------------
// Q5 – Hoisting Lab: The Sequence Trap
// ------------------------------------------
console.log("\n=== Q5: Hoisting Lab ===");
// Demonstrating hoisting behavior with var vs let/const

console.log("Hoisting with var (Outputs undefined instead of error):");
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

try {
    console.log(hoistedLet); // Throws ReferenceError due to Temporal Dead Zone (TDZ)
    let hoistedLet = "I am in TDZ";
} catch (err) {
    console.log("Caught Hoisting Error for let:", err.message);
}