let num1=Math.floor(Math.random()*20)+1;
let num2=Math.floor(Math.random()*20)+1;

// let arr=[1,22,34,4]
// console.log(arr[1]);

let operation=["+","-","*","/"][Math.floor(Math.random()*4)];
switch(operation){
    case "+":
        console.log(`${num1} + ${num2} = ${num1+num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1-num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1*num2}`);
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${(num1/num2).toFixed(2)}`);
        break;
    default:
        console.log("Invalid operation");                
}

