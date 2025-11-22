// Given cart array
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Variable to store discounted total
let discountedTotal = 0;

// Loop through each product and apply category discounts
for (let product of cart) {
    
    let finalPrice = product.price;

    // Apply category-based discount
    if (product.category === "electronics") {
        finalPrice -= finalPrice * 0.10; // 10%
    } 
    else if (product.category === "fashion") {
        finalPrice -= finalPrice * 0.05; // 5%
    }

    discountedTotal += finalPrice;
}

// After category discounts, check for extra 5% discount
if (discountedTotal > 50000) {
    discountedTotal -= discountedTotal * 0.05;
}

// Use reduce() to also calculate original total
let originalTotal = cart.reduce((sum, p) => sum + p.price, 0);

// Final Output
console.log("Original Total:", originalTotal);
console.log("Total After Discounts:", discountedTotal.toFixed(2));

