// // Declare variables of various data types
// const username = "Alice";           // string
// const age = 28;                     // number
// const isActive = true;              // boolean
// const scores = [92, 85, 77];        // array
// const profile = { city: "Denver" }; // object
// const lastLogin = null;             // null
// let pendingTask;                    // undefined

// // Build a summary array for console.table()
// const summary = [
//   { label: "username",   value: username,   type: typeof username },
//   { label: "age",        value: age,        type: typeof age },
//   { label: "isActive",   value: isActive,   type: typeof isActive },
//   { label: "scores",     value: scores,     type: Array.isArray(scores) ? "array" : typeof scores },
//   { label: "profile",    value: profile,    type: typeof profile },
//   { label: "lastLogin",  value: lastLogin,  type: "null" }, // typeof null === "object", so set manually
//   { label: "pendingTask", value: pendingTask, type: typeof pendingTask }
// ];

// // Print in one console.table() statement
// console.table(summary);

// Declare variables of various data types
const username = "Alice";           // string
const age = 28;                     // number
const isActive = true;              // boolean
const scores = [92, 85, 77];        // array
const profile = { city: "Denver" }; // object
const lastLogin = null;             // null
let pendingTask;                    // undefined

// Helper: convert arrays/objects/null to readable strings
function formatValue(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return JSON.stringify(value);
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

// Build a summary array for console.table()
const summary = [
  { label: "username",    value: formatValue(username),    type: typeof username },
  { label: "age",         value: formatValue(age),         type: typeof age },
  { label: "isActive",    value: formatValue(isActive),    type: typeof isActive },
  { label: "scores",      value: formatValue(scores),      type: "array" },
  { label: "profile",     value: formatValue(profile),     type: "object" },
  { label: "lastLogin",   value: formatValue(lastLogin),   type: "null" },
  { label: "pendingTask", value: formatValue(pendingTask), type: typeof pendingTask }
];

// Print single formatted table
console.table(summary);

