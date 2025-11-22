// Generate an array of 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Highest and Lowest Scores
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Average Score (using reduce)
let average =
    scores.reduce((total, score) => total + score, 0) / scores.length;

// Number of students who passed (≥ 50)
let passedCount = scores.filter(score => score >= 50).length;

// Formatted Output using Template Literals
let summary = `
===== Student Performance Summary =====

Scores: ${scores.join(", ")}

Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed (≥50): ${passedCount}

=======================================
`;

console.log(summary);
