// Take total purchase amount from the user
let input = prompt("Enter your total purchase amount:");
let total = Number(input);

let discountPercent = 0;

// Apply discount tiers
if (total >= 10000) {
    discountPercent = 25;
} 
else if (total >= 5000) {
    discountPercent = 15;
}
else if (total >= 2000) {
    discountPercent = 5;
}
else {
    discountPercent = 0;
}

// Calculate discount amount and final price
let discountAmount = (total * discountPercent) / 100;
let finalPrice = total - discountAmount;

// Use Math.round() for rounding
total = Math.round(total);
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Display results
console.log("Original Total: ₹" + total);
console.log("Discount Percentage: " + discountPercent + "%");
console.log("Final Price After Discount: ₹" + finalPrice);
