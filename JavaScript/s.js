let userName = "Nitya";
let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}


let strData = "Hello";
let numData = 42;
let boolData = true;
let arrData = [1, 2, 3];
let objData = { name: "Nitya", role: "Developer" };
let nullData = null;
let undefData;

let summary = [
    { label: "String", value: strData, type: typeof strData },
    { label: "Number", value: numData, type: typeof numData },
    { label: "Boolean", value: boolData, type: typeof boolData },
    { label: "Array", value: arrData, type: Array.isArray(arrData) ? "array" : typeof arrData },
    { label: "Object", value: objData, type: typeof objData },
    { label: "Null", value: nullData, type: typeof nullData },
    { label: "Undefined", value: undefData, type: typeof undefData }
];

console.table(summary);


let expenses = [1500, 3000, 8000, 1200, 2500];
let totalExpense = expenses.reduce((acc, curr) => acc + curr, 0);

let taxAmount = totalExpense * 0.10;
let finalTotal = totalExpense + taxAmount;
let averageExpense = finalTotal / expenses.length;

console.log(`Total Expense (with 10% tax): ₹${finalTotal.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);


let marks = [85, 90, 78, 88, 92];
let totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
let percentage = (totalMarks / (marks.length * 100)) * 100;

let hasFailed = marks.some(mark => mark < 35);

if (hasFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}


let temperature = 28;
let isRaining = false;
let windSpeed = 10;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}


let purchaseTotal = 7500;
let discountRate = 0;

if (purchaseTotal >= 10000) {
    discountRate = 0.25;
} else if (purchaseTotal >= 5000) {
    discountRate = 0.15;
} else if (purchaseTotal >= 2000) {
    discountRate = 0.05;
} else {
    discountRate = 0;
}

let discountAmount = purchaseTotal * discountRate;
let finalAmount = purchaseTotal - discountAmount;

console.log(`Purchase Total: ₹${purchaseTotal}`);
console.log(`Discount Applied: ${discountRate * 100}%`);
console.log(`Final Amount to Pay: ₹${finalAmount.toFixed(2)}`);