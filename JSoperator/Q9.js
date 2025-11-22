// Step 1: Create an array with numbers 1–30
let numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Step 2: New array to store results
let results = [];

// Step 3: Analyze each number
for (let num of numbers) {

    if (num % 3 === 0 && num % 5 === 0) {
        results.push("FizzBuzz");
    } 
    else if (num % 2 === 0) {
        results.push("Even");
    } 
    else {
        results.push("Odd");
    }
}

// Step 4: Display results
console.log("Numbers:", numbers);
console.log("Analysis Results:", results);

