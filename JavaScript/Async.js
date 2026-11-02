// ==========================================
// ASSIGNMENT 6 - ASYNC PROGRAMMING WITH JS
// ==========================================

// ------------------------------------------
// Q1 – The Startup Morning: Async Coffee Maker
// ------------------------------------------
console.log("=== Q1: Async Coffee Maker ===");

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Failed to boil water!");
            else resolve("Water boiled");
        }, 1200);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Failed to brew coffee!");
            else resolve("Coffee brewed");
        }, 1500);
    });
}

function pourCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Failed to pour coffee!");
            else resolve("Coffee poured into cup");
        }, 1000);
    });
}

boilWater()
    .then(res => { console.log(res); return brewCoffee(); })
    .then(res => { console.log(res); return pourCup(); })
    .then(res => { console.log(res); console.log("Coffee ready for the team!\n"); })
    .catch(err => console.log("Q1 Error:", err, "\n"));


// ------------------------------------------
// Q2 – Task Scheduler: Micro vs Macro Challenge
// ------------------------------------------
console.log("=== Q2: Task Scheduler ===");
console.log("Start");

setTimeout(() => {
    console.log("Timeout callback (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (Microtask)");
});

console.log("Synchronous log");
console.log("End\n");
/* 
Explanation: 
Microtasks (Promises) have higher priority than Macrotasks (setTimeout). 
Therefore, the promise callback executes before the setTimeout callback 
even though both have a 0ms delay.
*/


// ------------------------------------------
// Q3 – Bug Tracker: Callback to Promise Migration
// ------------------------------------------
console.log("=== Q3: Bug Tracker ===");

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate
            if (success) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs!");
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
        console.log("");
    })
    .catch(err => console.log("Q3 Error:", err, "\n"));


// ------------------------------------------
// Q4 – DevOps Delay: Async Timeout Race
// ------------------------------------------
console.log("=== Q4: DevOps Delay ===");

const serverA = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.1) reject("Server A failed");
        else resolve("Server A responded in 2s");
    }, 2000);
});

const serverB = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.1) reject("Server B failed");
        else resolve("Server B responded in 3s");
    }, 3000);
});

Promise.all([serverA, serverB])
    .then(results => {
        console.log("Deployment completed for all servers:", results);
    })
    .catch(err => console.log("Promise.all failed:", err));

Promise.race([serverA, serverB])
    .then(fastest => {
        console.log("Fastest response:", fastest, "\n");
    })
    .catch(err => console.log("Promise.race failed:", err, "\n"));


// ------------------------------------------
// Q5 – Frontend Rush: Avoiding Callback Hell
// ------------------------------------------
console.log("=== Q5: Frontend Rush (Async/Await) ===");

const delayStep = (stepName) => new Promise(resolve => {
    setTimeout(() => {
        console.log(`Stage completed: ${stepName}`);
        resolve();
    }, 1000);
});

async function runPipelineAsync() {
    await delayStep("design");
    await delayStep("build");
    await delayStep("test");
    await delayStep("deploy");
    await delayStep("celebrate");
    console.log("Pipeline finished!\n");
}
runPipelineAsync();


// ------------------------------------------
// Q6 – E-Commerce Dashboard: Product Card Fetcher
// ------------------------------------------
console.log("=== Q6: E-Commerce Product Fetcher ===");

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Network response was not ok");
        const products = await response.json();
        
        // Log first 3 products as an example output
        products.slice(0, 3).forEach(p => {
            console.log(`Product: ${p.title}`);
            console.log(`Price: $${p.price}`);
            console.log(`Image: ${p.image}\n`);
        });
    } catch (error) {
        console.log("Failed to load products. Please try again.\n");
    }
}
fetchProducts();


// ------------------------------------------
// Q7 – The Lazy Loader: Promise Combinator Practice
// ------------------------------------------
console.log("=== Q7: The Lazy Loader ===");

function loadProfile() { return new Promise((r, rej) => setTimeout(() => Math.random() < 0.2 ? rej("Profile Failed") : r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise((r, rej) => setTimeout(() => Math.random() < 0.2 ? rej("Posts Failed") : r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise((r, rej) => setTimeout(() => Math.random() < 0.2 ? rej("Messages Failed") : r("Messages Loaded"), 1000)); }

async function testAllSettled() {
    const startTime = Date.now();
    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
    const endTime = Date.now();

    results.forEach((res, index) => {
        const modules = ["Profile", "Posts", "Messages"];
        if (res.status === "fulfilled") {
            console.log(`${modules[index]} succeeded: ${res.value}`);
        } else {
            console.log(`${modules[index]} failed: ${res.reason}`);
        }
    });
    console.log(`Total time taken: ${endTime - startTime}ms\n`);
}
testAllSettled();


// ------------------------------------------
// Q8 – Order Processing Flow: Async Retry Mechanism
// ------------------------------------------
console.log("=== Q8: Order Processing Flow ===");

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) resolve("Order Success!");
            else reject("Order Failed!");
        }, 1000);
    });
}

async function processOrder() {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success - ${result}`);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
            if (attempt === maxAttempts) {
                throw "Order could not be processed";
            }
        }
    }
}

processOrder()
    .then(msg => console.log("Process finished successfully\n"))
    .catch(err => console.log("Final Error:", err, "\n"));


// ------------------------------------------
// Q9 – Debugging the Event Loop
// ------------------------------------------
console.log("=== Q9: Debugging Event Loop ===");
/*
Predicted Order:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback
*/
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end\n");


// ------------------------------------------
// Q10 – The Final Delivery: Async Pipeline Debugger
// ------------------------------------------
console.log("=== Q10: Async Delivery Pipeline ===");

const deliveryStep = (msg) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.15) reject("Step failed!");
        else resolve(msg);
    }, 1000);
});

async function runPipeline() {
    try {
        console.log("Start Pipeline");
        console.log(`Step 1: ${await deliveryStep("Order taken")}`);
        console.log(`Step 2: ${await deliveryStep("Food prepared")}`);
        console.log(`Step 3: ${await deliveryStep("Package ready")}`);
        console.log(`Step 4: ${await deliveryStep("Out for delivery")}`);
        console.log("Delivery completed!\n");
    } catch (error) {
        console.log("Pipeline failed!\n");
    }
}
runPipeline();