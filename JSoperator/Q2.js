let title=" wireless headphones PRO ";

// Trim whitespace from both ends of the string
let trimmedTitle = title.trim();
console.log("Trimmed Title:", trimmedTitle);

// Convert the string to lowercase
let lowerCaseTitle = trimmedTitle.toLowerCase();
console.log("Lowercase Title:", lowerCaseTitle);

// Convert the string to capitalize first letter of each word
let capitalizedTitle = trimmedTitle.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
).join(' ');
console.log("Capitalized Title:", capitalizedTitle);

//Replace "pro" with "Pro Edition".

let updatedTitle = capitalizedTitle.replace("Pro", "Pro Edition");
console.log("Updated Title:", updatedTitle);

console.log("Cleaned Title", updatedTitle);
console.log(updatedTitle.length);