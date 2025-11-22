// Take marks input from the user as a comma-separated list
let input = prompt("Enter marks of 5 subjects separated by commas (e.g., 80,75,90,60,85):");

// Convert input string to an array of numbers
let marks = input.split(",").map(Number);

// Validate: Make sure exactly 5 subjects are entered
if (marks.length !== 5) {
    console.log("Error: Please enter exactly 5 subject marks.");
} else {

    // Check if any subject is below 35 → automatically detained
    let hasFail = marks.some(mark => mark < 35);

    // Calculate total
    let total = marks.reduce((sum, val) => sum + val, 0);

    // Calculate average & percentage (same for 5 subjects)
    let average = total / marks.length;
    let percentage = (total / (marks.length * 100)) * 100; // assuming each subject = 100 marks

    // Show calculations
    console.log("Marks:", marks);
    console.log("Average:", average.toFixed(2));
    console.log("Percentage:", percentage.toFixed(2) + "%");

    // Final result based on rules
    if (hasFail) {
        console.log("Result: Detained (Failed in one or more subjects)");
    } 
    else if (percentage >= 85) {
        console.log("Result: Promoted with Distinction");
    } 
    else if (percentage >= 50) {
        console.log("Result: Promoted");
    } 
    else {
        console.log("Result: Detained");
    }
}
