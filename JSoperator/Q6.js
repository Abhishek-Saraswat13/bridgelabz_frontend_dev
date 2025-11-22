// Global counter variable
let count = 0;

// Increment function
function increment() {

    // Nested function to show scope
    function update() {
        count++;
        console.log("Count after increment:", count);
    }

    update(); // simulate nested update
}

// Decrement function
function decrement() {

    // Nested function to show scope
    function update() {
        count--;
        console.log("Count after decrement:", count);
    }

    update(); // simulate nested update
}

// Simulated click events
increment();  
increment();  
decrement();  
increment();
decrement();
