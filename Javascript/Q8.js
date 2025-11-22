// Q8. Employee Salary Projection

// Declare current salary and increment rate
let currentSalary = 50000;       // starting salary
let incrementRate = 5;           // annual increment rate in %

console.log("Year\tSalary (USD)");
console.log("-----------------------");

// 5-year projection
for (let year = 1; year <= 5; year++) {

    // Apply increment using assignment operator
    currentSalary += currentSalary * (incrementRate / 100);

    // Round salary to 2 decimals
    let roundedSalary = currentSalary.toFixed(2);

    // Print formatted table
    console.log(`${year}\t$${roundedSalary}`);
}
