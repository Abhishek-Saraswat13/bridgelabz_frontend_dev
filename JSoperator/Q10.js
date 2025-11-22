// Given nested array
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Loop through each department
for (let dept of departments) {
    
    let name = dept[0];
    let score = dept[1];
    let evaluation = "";

    // Nested if-else conditions
    if (score >= 90) {
        evaluation = "Excellent";
    } 
    else if (score >= 75 && score <= 89) {
        evaluation = "Good";
    } 
    else if (score >= 60 && score <= 74) {
        evaluation = "Average";
    } 
    else {
        evaluation = "Needs Improvement";
    }

    console.log(`${name}: ${evaluation}`);
}
