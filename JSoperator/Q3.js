// Given number
let x = 16.75;

// Required calculations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomValue = Math.floor(Math.random() * 41) + 10; 
// generates number between 10–50

// Template literal summary
let summary = `
==== Math Utility Dashboard ====
Given Number: ${x}

Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Cube (x^3): ${powerValue}
Random Number (10–50): ${randomValue}
================================
`;

console.log(summary);
