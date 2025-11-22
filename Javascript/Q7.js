let userGuess=prompt("Guess a number between 1 and 50:");
let a=Math.floor(Math.random()*50)+1;
if(userGuess==a){
    console.log("Congratulations! You guessed the correct number.");
}
else if(userGuess-3<=a && userGuess+3>=a){
    console.log("Very Close!");
}
else{
    console.log("Sorry, the correct number was " + a);
}