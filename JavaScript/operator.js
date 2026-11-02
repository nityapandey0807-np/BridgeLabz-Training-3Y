console.log("=== Q1: Scope Conflict Resolver ===");

let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;
    
    if (isPermanent) {
        let totalSalary = salary + bonus;
        console.log(`Permanent Employee - Total Salary: ₹${totalSalary}`);
    } else {
        console.log(`Contract Employee - Total Salary: ₹${salary} (No Bonus)`);
    }
}

calculateSalary(true);
calculateSalary(false);


console.log("\n=== Q2: String Manipulation Report ===");

let rawTitle = " wireless headphones PRO ";

let trimmed = rawTitle.trim();
let replaced = trimmed.replace(/pro/i, "Pro Edition");

let cleanedTitle = replaced
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(`Cleaned Title: "${cleanedTitle}"`);
console.log(`Length: ${cleanedTitle.length}`);


console.log("\n=== Q3: Math Utility Dashboard ===");

let x = 16.75;

let roundedVal = Math.round(x);
let sqrtVal = Math.sqrt(x);
let powVal = Math.pow(x, 3);
let randomVal = Math.floor(Math.random() * 41) + 10;

console.log(`--- Math Summary for x = ${x} ---`);
console.log(`Rounded Value: ${roundedVal}`);
console.log(`Square Root: ${sqrtVal.toFixed(2)}`);
console.log(`Cube Power: ${powVal.toFixed(2)}`);
console.log(`Random Number (10-50): ${randomVal}`);


console.log("\n=== Q4: Array Performance Analyzer ===");

const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
const average = (totalScore / scores.length).toFixed(2);

const passedCount = scores.filter(score => score >= 50).length;

console.log("Scores Array:", scores);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average}`);
console.log(`Number of Students Passed (≥ 50): ${passedCount}`);


console.log("\n=== Q5: Boolean Logic Access System ===");

function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    const hasAccess = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
    
    console.log(`Alarm: ${isAlarmOn}, Door Locked: ${isDoorLocked}, Window Closed: ${isWindowClosed}, Owner Inside: ${isOwnerInside}`);
    console.log(`Status: ${hasAccess ? "Secure" : "Unsafe"}\n`);
}

checkAccess(true, true, true, true);
checkAccess(false, true, true, true);