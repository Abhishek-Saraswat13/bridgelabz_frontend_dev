// Weather inputs
let temperature = 28;     // in °C
let isRaining = false;    // boolean
let windSpeed = 12;       // in km/h

let advice = "";

// Decision logic using || and &&
if (isRaining === true) {
    advice = "Stay indoors with hot coffee.";
}
else if (temperature > 35) {
    advice = "Go swimming.";
}
else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
}
else {
    advice = "Perfect day for a walk.";
}

console.log(advice);
