// Security condition variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = false;
let isOwnerInside = true;

// Access rule:
// Secure only if ALL conditions are true
let isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

// Output
if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}
