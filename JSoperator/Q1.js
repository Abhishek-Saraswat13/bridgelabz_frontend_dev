// Global scope
let bonus = 5000;  
let isPermanent = false; // global variable

function calculateSalary() {
    // Local scope
    let salary = 40000;
    let isPermanent = true; // this shadows the global variable

    console.log("Inside function - local isPermanent:", isPermanent);

    if (isPermanent) {
        salary += bonus;   // bonus comes from global scope
    }

    console.log("Total salary inside function:", salary);
}

console.log("Before calling function - global isPermanent:", isPermanent);

// Call the function
calculateSalary();

console.log("After calling function - global isPermanent still:", isPermanent);
