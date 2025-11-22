let age=prompt("Enter your age:");
let isCitizen=prompt("Are you a citizen? (true/false):");

if(age>=18 && isCitizen==="true"){
    console.log("Eligible for all services.");
}else if(age>=19 && age<=20 && isCitizen==="true"){
    console.log("You are eligible to vote only.");
}
else if(age>=18 && isCitizen==="false"){
    console.log("Only age criteria meet.");
}
else{
    console.log("Not eligible yet.");
}
